import { normalizeIndianNumber } from '../normalize';
import type {
  WhatsAppProvider,
  WhatsAppSendResult,
  WhatsAppTemplateComponent
} from '../types';

export class MetaWhatsAppProvider implements WhatsAppProvider {
  private async send(payload: Record<string, unknown>): Promise<WhatsAppSendResult> {
    const phoneNumberId = process.env.META_PHONE_NUMBER_ID;
    const accessToken = process.env.META_ACCESS_TOKEN;

    if (!phoneNumberId || !accessToken) {
      return {
        success: false,
        error: 'META_PHONE_NUMBER_ID or META_ACCESS_TOKEN not configured'
      };
    }

    try {
      const res = await fetch(
        `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      );

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        return {
          success: false,
          error: data?.error?.message || `Meta API HTTP ${res.status}`
        };
      }

      return { success: true };
    } catch (err) {
      return {
        success: false,
        error:
          err instanceof Error
            ? err.message
            : 'Unknown WhatsApp send error'
      };
    }
  }

  async sendText(to: string, _body: string): Promise<WhatsAppSendResult> {
    return this.send({
      messaging_product: 'whatsapp',
      to: normalizeIndianNumber(to),
      type: 'template',
      template: {
        name: 'hello_world',
        language: {
          code: 'en_US'
        }
      }
    });
  }

  async sendTemplate(
    to: string,
    templateName: string,
    languageCode: string,
    components?: WhatsAppTemplateComponent[]
  ): Promise<WhatsAppSendResult> {
    const phoneNumberId = process.env.META_PHONE_NUMBER_ID;
    const accessToken = process.env.META_ACCESS_TOKEN;
    const normalizedTo = normalizeIndianNumber(to);
    const maskedTo = maskNumber(normalizedTo);

    if (!phoneNumberId || !accessToken) {
      return {
        success: false,
        error: 'META_PHONE_NUMBER_ID or META_ACCESS_TOKEN not configured'
      };
    }

    const payload = {
      messaging_product: 'whatsapp',
      to: normalizedTo,
      type: 'template',
      template: {
        name: templateName,
        language: {
          code: languageCode
        },
        ...(components && components.length > 0 ? { components } : {})
      }
    };

    console.log('[WHATSAPP_CUSTOMER_DIAGNOSTIC] outgoing request', {
      messaging_product: payload.messaging_product,
      to: maskedTo,
      type: payload.type,
      template: payload.template
    });

    try {
      const res = await fetch(
        `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      );

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        console.error('[WHATSAPP_CUSTOMER_DIAGNOSTIC]', {
          provider: 'meta',
          templateName,
          languageCode,
          to: maskedTo,
          httpStatus: res.status,
          statusText: res.statusText,
          success: false,
          metaErrorCode: data?.error?.code,
          metaErrorType: data?.error?.type,
          metaErrorMessage: data?.error?.message,
          fbtraceId: data?.error?.fbtrace_id,
          response: data
        });
        return {
          success: false,
          error: data?.error?.message || `Meta API HTTP ${res.status}`
        };
      }

      console.log('[WHATSAPP_CUSTOMER_DIAGNOSTIC]', {
        provider: 'meta',
        templateName,
        languageCode,
        to: maskedTo,
        httpStatus: res.status,
        statusText: res.statusText,
        success: true,
        messageId: data?.messages?.[0]?.id,
        response: data
      });

      return { success: true };
    } catch (err) {
      console.error('[WHATSAPP_CUSTOMER_DIAGNOSTIC]', {
        provider: 'meta',
        templateName,
        languageCode,
        to: maskedTo,
        success: false,
        error: err instanceof Error ? err.message : 'Unknown WhatsApp send error'
      });
      return {
        success: false,
        error:
          err instanceof Error
            ? err.message
            : 'Unknown WhatsApp send error'
      };
    }
  }
}

function maskNumber(normalized: string): string {
  if (normalized.length <= 4) return '*'.repeat(normalized.length);
  return `+${'*'.repeat(normalized.length - 4)}${normalized.slice(-4)}`;
}
