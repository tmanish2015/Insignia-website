export interface WhatsAppSendResult {
  success: boolean;
  error?: string;
}

export interface WhatsAppTemplateParameter {
  type: 'text';
  text: string;
}

export interface WhatsAppTemplateComponent {
  type: 'body' | 'header' | 'button';
  parameters: WhatsAppTemplateParameter[];
}

export interface WhatsAppProvider {
  sendText(to: string, body: string): Promise<WhatsAppSendResult>;
  sendTemplate(
    to: string,
    templateName: string,
    languageCode: string,
    components?: WhatsAppTemplateComponent[]
  ): Promise<WhatsAppSendResult>;
}
