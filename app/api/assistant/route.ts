import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { getRecommendation } from '@/lib/assistant/recommend';
import type { AssistantInput } from '@/types/assistant';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as AssistantInput;
    if (!body.industry || !body.turnoverBand || !body.employeeBand || !body.painPoint || !body.recaptchaToken) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }
    const score = await verifyRecaptcha(body.recaptchaToken);
    if (score < 0.5) {
      return NextResponse.json({ ok: false, error: 'reCAPTCHA check failed' }, { status: 403 });
    }

    const recommendation = getRecommendation(body);

    const supabase = supabaseServer();
    const { error } = await supabase.from('assistant_leads').insert({
      industry: body.industry,
      turnover_band: body.turnoverBand,
      employee_band: body.employeeBand,
      current_software: body.currentSoftware ?? null,
      pain_point: body.painPoint,
      recommended_product: recommendation.product,
      recommended_tier: recommendation.tier
    });

    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });

    return NextResponse.json({ ok: true, recommendation });
  } catch (err) {
    return NextResponse.json({ ok: false, error: err instanceof Error ? err.message : 'Server error' }, { status: 500 });
  }
}
