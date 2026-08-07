export type Interest = 'erp' | 'ai_automation' | 'digital_marketing' | 'all';

export interface EnquiryInput {
  fullName: string;
  company: string;
  workEmail: string;
  phone?: string;
  interest: Interest;
  message?: string;
  recaptchaToken: string;
  sourcePage: string;
}
