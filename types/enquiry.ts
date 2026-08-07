export type Requirement = 'erp' | 'ai_automation' | 'digital_marketing' | 'all';

export interface EnquiryInput {
  name: string;
  company: string;
  email: string;
  mobile: string;
  industry: string;
  businessType: string;
  requirement: Requirement;
  message?: string;
  recaptchaToken: string;
}
