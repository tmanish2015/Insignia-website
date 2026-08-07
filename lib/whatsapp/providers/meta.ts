import { normalizeIndianNumber } from '../normalize';
import type { WhatsAppProvider, WhatsAppSendResult } from '../types';

export class MetaWhatsAppProvider implements WhatsAppProvider {
  async sendText(to: string, body: string): Promise<WhatsAppSendResult> {
    const phoneNumberId = process.env.META_PHONE_NUMBER_ID;
    const accessToken = process.env.META_ACCESS_TOKEN;
    if (!phoneNumberId || !accessToken) {
      return { success: false, error: 'META_PHONE_NUMBER_ID or META_ACCESS_TOKEN not configured' };
    }

    try {
      const res = await fetch(`https://graph.facebook.com/v21.0/${phoneNumberId}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: normalizeIndianNumber(to),
          type: 'text',
          text: { body }
        })
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        return { success: false, error: data?.error?.message || `Meta API HTTP ${res.status}` };
      }
      return { success: true };
    } catch (err) {
      return { success: false, error: err instanceof Error ? err.message : 'Unknown WhatsApp send error' };
    }
  }
}
