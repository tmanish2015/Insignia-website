import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { sendConfirmationEmail, sendAdminNotification } from '@/lib/email/resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.fullName || !body.company || !body.workEmail || !body.recaptchaToken) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }
    const score = await verifyRecaptcha(body.recaptchaToken);
    if (score < 0.5) return NextResponse.json({ ok: false, error: 'reCAPTCHA check failed' }, { status: 403 });

    const supabase = supabaseServer();
    let enquiryId = body.enquiryId;
    if (!enquiryId) {
      const { data, error } = await supabase
        .from('enquiries')
        .insert({
          full_name: body.fullName,
          company: body.company,
          work_email: body.workEmail,
          phone: body.phone ?? null,
          interest: 'all',
          source_page: 'demo_booking',
          recaptcha_score: score
        })
        .select('id')
        .single();
      if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
      enquiryId = data.id;
    }

    const { error: bookingError } = await supabase
      .from('demo_bookings')
      .insert({ enquiry_id: enquiryId, requested_slot: body.requestedSlot ?? null });
    if (bookingError) return NextResponse.json({ ok: false, error: bookingError.message }, { status: 500 });

    try {
      await Promise.all([
        sendConfirmationEmail(body.workEmail, body.fullName),
        sendAdminNotification({ fullName: body.fullName, company: body.company, workEmail: body.workEmail, type: 'demo_booking' })
      ]);
    } catch (emailErr) {
      console.error('demo-booking: booking saved but email failed', emailErr);
    }

    return NextResponse.json({ ok: true, enquiryId });
  } catch (err) {
    return NextResponse.json({ ok: false, error: err instanceof Error ? err.message : 'Server error' }, { status: 500 });
  }
}
