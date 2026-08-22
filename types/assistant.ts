export type TurnoverBand = 'under_1cr' | '1cr_10cr' | '10cr_50cr' | 'over_50cr';
export type EmployeeBand = 'under_10' | '10_50' | '50_200' | 'over_200';

export interface AssistantInput {
  industry: string;
  turnoverBand: TurnoverBand;
  employeeBand: EmployeeBand;
  currentSoftware?: string;
  painPoint: string;
  recaptchaToken: string;
}

export interface AssistantRecommendation {
  product: 'Tradeflow AI ERP' | 'FabFlow ERP' | 'AI Business Automation' | 'Digital Marketing';
  tier: 'Starter' | 'Growth' | 'Enterprise';
  reason: string;
}
