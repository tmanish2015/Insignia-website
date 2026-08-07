import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { sendConfirmationEmail, sendAdminNotification } from '@/lib/email/resend';
import type { EnquiryInput } from '@/types/enquiry';

export async function POST(req: NextRequest) {
  const body = (await req.json()) as EnquiryInput;
  if (!body.fullName || !body.company || !body.workEmail || !body.interest || !body.recaptchaToken) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
  }
  const score = await verifyRecaptcha(body.recaptchaToken);
  if (score < 0.5) {
    return NextResponse.json({ ok: false, error: 'reCAPTCHA check failed' }, { status: 403 });
  }
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from('enquiries')
    .insert({
      full_name: body.fullName,
      company: body.company,
      work_email: body.workEmail,
      phone: body.phone ?? null,
      interest: body.interest,
      message: body.message ?? null,
      source_page: body.sourcePage ?? 'contact',
      recaptcha_score: score
    })
    .select('id')
    .single();

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });

  await Promise.all([
    sendConfirmationEmail(body.workEmail, body.fullName),
    sendAdminNotification({ fullName: body.fullName, company: body.company, workEmail: body.workEmail, interest: body.interest })
  ]);

  return NextResponse.json({ ok: true, id: data.id });
}
