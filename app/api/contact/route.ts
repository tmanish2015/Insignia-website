import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { sendWhatsAppText } from '@/lib/whatsapp';
import type { EnquiryInput, Requirement } from '@/types/enquiry';

const requirementLabels: Record<Requirement, string> = {
  erp: 'ERP Implementation',
  ai_automation: 'AI Automation',
  digital_marketing: 'Digital Marketing',
  all: 'All of the above'
};

function customerMessage() {
  return `Thank you for contacting Insignia Technologies.

We have received your enquiry successfully.

One of our ERP consultants will contact you shortly.

If your requirement is urgent, simply reply to this WhatsApp.

Regards,
Team Insignia Technologies
www.insigniatech.in`;
}

function adminMessage(body: EnquiryInput) {
  const now = new Date();
  const date = now.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
  const time = now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });
  return `🚨 NEW WEBSITE ENQUIRY

Name: ${body.name}
Company: ${body.company}
Mobile: ${body.mobile}
Email: ${body.email}
Industry: ${body.industry}
Business Type: ${body.businessType}
Requirement: ${requirementLabels[body.requirement]}
Message: ${body.message || '-'}

Lead Source: Website Contact Form
Date: ${date}
Time: ${time}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as EnquiryInput;
    if (!body.name || !body.company || !body.email || !body.mobile || !body.industry || !body.businessType || !body.requirement || !body.recaptchaToken) {
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
        name: body.name,
        company: body.company,
        email: body.email,
        mobile: body.mobile,
        industry: body.industry,
        business_type: body.businessType,
        requirement: body.requirement,
        message: body.message ?? null,
        lead_source: 'Website Contact Form',
        whatsapp_customer_status: 'pending',
        whatsapp_admin_status: 'pending'
      })
      .select('id')
      .single();

    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });

    const adminNumber = process.env.ADMIN_WHATSAPP_NUMBER;
    const [adminResult, customerResult] = await Promise.all([
      adminNumber ? sendWhatsAppText(adminNumber, adminMessage(body)) : Promise.resolve({ success: false, error: 'ADMIN_WHATSAPP_NUMBER not configured' }),
      sendWhatsAppText(body.mobile, customerMessage())
    ]);

    if (!adminResult.success) console.error('contact: admin WhatsApp notify failed', adminResult.error);
    if (!customerResult.success) console.error('contact: customer WhatsApp confirmation failed', customerResult.error);

    try {
      await supabase
        .from('enquiries')
        .update({
          whatsapp_admin_status: adminResult.success ? 'sent' : 'failed',
          whatsapp_customer_status: customerResult.success ? 'sent' : 'failed'
        })
        .eq('id', data.id);
    } catch (statusErr) {
      console.error('contact: failed to record WhatsApp status', statusErr);
    }

    return NextResponse.json({ ok: true, id: data.id });
  } catch (err) {
    return NextResponse.json({ ok: false, error: err instanceof Error ? err.message : 'Server error' }, { status: 500 });
  }
}
