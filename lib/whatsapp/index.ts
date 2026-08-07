import { MetaWhatsAppProvider } from './providers/meta';
import type { WhatsAppProvider, WhatsAppSendResult } from './types';

function getWhatsAppProvider(): WhatsAppProvider {
  const provider = process.env.WHATSAPP_PROVIDER ?? 'meta';
  switch (provider) {
    case 'meta':
      return new MetaWhatsAppProvider();
    default:
      throw new Error(`WhatsApp provider "${provider}" is not implemented yet`);
  }
}

export function sendWhatsAppText(to: string, body: string): Promise<WhatsAppSendResult> {
  return getWhatsAppProvider().sendText(to, body);
}

export type { WhatsAppProvider, WhatsAppSendResult };
