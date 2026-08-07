import type { AssistantInput, AssistantRecommendation } from '@/types/assistant';

const textileKeywords = ['textile', 'fabric', 'garment', 'apparel', 'weav', 'dye', 'spinning', 'knitting', 'yarn', 'cloth'];
const marketingKeywords = ['marketing', 'leads', 'lead generation', 'seo', 'ads', 'pipeline', 'customers', 'branding'];

function pickTier(input: AssistantInput): AssistantRecommendation['tier'] {
  if (input.turnoverBand === 'over_50cr' || input.employeeBand === 'over_200') return 'Enterprise';
  if (input.turnoverBand === '10cr_50cr' || input.employeeBand === '50_200') return 'Enterprise';
  if (input.turnoverBand === '1cr_10cr' || input.employeeBand === '10_50') return 'Growth';
  return 'Starter';
}

function pickProduct(input: AssistantInput): { product: AssistantRecommendation['product']; reason: string } {
  const industry = input.industry.toLowerCase();
  const pain = input.painPoint.toLowerCase();

  if (marketingKeywords.some(k => pain.includes(k))) {
    return { product: 'Digital Marketing', reason: 'Your main pain point is about filling the pipeline, not running operations.' };
  }
  if (textileKeywords.some(k => industry.includes(k))) {
    return { product: 'FabFlow ERP', reason: 'FabFlow is Insignia\'s ERP tuned for textile and fabric operations — dye lots, shade variation and roll-level tracking built in.' };
  }
  if (input.employeeBand === 'under_10' && input.turnoverBand === 'under_1cr') {
    return { product: 'AI Business Automation', reason: 'At your current size, automating the repetitive work usually pays off faster than a full ERP rollout.' };
  }
  return { product: 'Tradeflow AI ERP', reason: 'Tradeflow is Insignia\'s core ERP for manufacturers, distributors and multi-location operations.' };
}

export function getRecommendation(input: AssistantInput): AssistantRecommendation {
  const { product, reason } = pickProduct(input);
  return { product, tier: pickTier(input), reason };
}
