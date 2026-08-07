import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail(to: string, fullName: string) {
  return resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to,
    subject: "Thanks — we've got your request",
    html: `<p>Hi ${fullName},</p><p>Thanks for reaching out to Insignia. Our team will contact you within one business day to schedule your consultation.</p>`
  });
}

export async function sendAdminNotification(data: Record<string, string>) {
  return resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: process.env.EMAIL_ADMIN_NOTIFY!,
    subject: `New enquiry: ${data.company}`,
    html: `<pre>${JSON.stringify(data, null, 2)}</pre>`
  });
}
