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
    return this.send({
      messaging_product: 'whatsapp',
      to: normalizeIndianNumber(to),
      type: 'template',
      template: {
        name: templateName,
        language: {
          code: languageCode
        },
        ...(components && components.length > 0 ? { components } : {})
      }
    });
  }
}
