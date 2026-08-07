'use client';
import { useState, FormEvent } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import type { Interest } from '@/types/enquiry';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      const recaptchaToken = executeRecaptcha ? await executeRecaptcha('contact') : '';
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fd.get('fullName'),
          company: fd.get('company'),
          workEmail: fd.get('workEmail'),
          phone: fd.get('phone'),
          interest: fd.get('interest') as Interest,
          message: fd.get('message'),
          recaptchaToken,
          sourcePage: 'contact'
        })
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Something went wrong');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16 px-5">
        <div className="w-13 h-13 mx-auto mb-5 rounded-md bg-accent-soft flex items-center justify-center text-2xl">✓</div>
        <h3 className="text-2xl font-extrabold mb-2.5">Thanks — we've got it.</h3>
        <p className="text-fg-muted">Our team will reach out within one business day to schedule your consultation.</p>
      </div>
    );
  }

  const fieldCls = 'w-full px-4 py-3.5 border border-border rounded-sm font-sans text-[15px] bg-surface text-fg focus:outline-none focus:border-accent';
  const labelCls = 'block text-[13px] font-bold mb-2 text-fg';

  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <div><label className={labelCls}>Full name</label><input name="fullName" required placeholder="Your name" className={fieldCls} /></div>
        <div><label className={labelCls}>Company</label><input name="company" required placeholder="Company name" className={fieldCls} /></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <div><label className={labelCls}>Work email</label><input name="workEmail" type="email" required placeholder="you@company.com" className={fieldCls} /></div>
        <div><label className={labelCls}>Phone</label><input name="phone" type="tel" placeholder="+91" className={fieldCls} /></div>
      </div>
      <div className="mb-5">
        <label className={labelCls}>What are you looking to solve?</label>
        <select name="interest" className={fieldCls}>
          <option value="erp">ERP Implementation</option>
          <option value="ai_automation">AI Automation</option>
          <option value="digital_marketing">Digital Marketing</option>
          <option value="all">All of the above</option>
        </select>
      </div>
      <div className="mb-5">
        <label className={labelCls}>Message</label>
        <textarea name="message" placeholder="Tell us a bit about your business and goals" className={`${fieldCls} min-h-[110px] resize-y`} />
      </div>
      {status === 'error' && <p className="text-sm text-accent2 mb-4">{error}</p>}
      <button type="submit" disabled={status === 'submitting'} className="w-full inline-flex items-center justify-center rounded-full font-bold py-3.5 bg-gradient-to-br from-accent to-accent2 text-white shadow-glow disabled:opacity-60">
        {status === 'submitting' ? 'Sending…' : 'Book Your Free Consultation'}
      </button>
    </form>
  );
}
