export interface WhatsAppSendResult {
  success: boolean;
  error?: string;
}

export interface WhatsAppProvider {
  sendText(to: string, body: string): Promise<WhatsAppSendResult>;
}
