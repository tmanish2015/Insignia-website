'use client';
import { useState, FormEvent } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Button } from '@/components/ui/Button';
import { industryOptions } from '@/lib/data/industryOptions';
import type { AssistantRecommendation, EmployeeBand, TurnoverBand } from '@/types/assistant';

type Status = 'idle' | 'submitting' | 'done' | 'error';

const turnoverOptions: { value: TurnoverBand; label: string }[] = [
  { value: 'under_1cr', label: 'Under ₹1 crore' },
  { value: '1cr_10cr', label: '₹1–10 crore' },
  { value: '10cr_50cr', label: '₹10–50 crore' },
  { value: 'over_50cr', label: 'Over ₹50 crore' }
];
const employeeOptions: { value: EmployeeBand; label: string }[] = [
  { value: 'under_10', label: 'Under 10' },
  { value: '10_50', label: '10–50' },
  { value: '50_200', label: '50–200' },
  { value: 'over_200', label: 'Over 200' }
];

const fieldCls = 'w-full px-4 py-3.5 border border-border rounded-sm font-sans text-[15px] bg-surface text-fg focus:outline-none focus:border-accent';
const labelCls = 'block text-[13px] font-bold mb-2 text-fg';

export function AIAssistant() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [recommendation, setRecommendation] = useState<AssistantRecommendation | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      const recaptchaToken = executeRecaptcha ? await executeRecaptcha('assistant') : '';
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          industry: fd.get('industry'),
          turnoverBand: fd.get('turnoverBand'),
          employeeBand: fd.get('employeeBand'),
          currentSoftware: fd.get('currentSoftware'),
          painPoint: fd.get('painPoint'),
          recaptchaToken
        })
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Something went wrong');
      setRecommendation(data.recommendation);
      setStatus('done');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  if (status === 'done' && recommendation) {
    return (
      <div className="max-w-[560px] mx-auto text-center bg-surface border border-border rounded-md shadow-sm p-9">
        <div className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft inline-block px-4 py-1.5 rounded-full border border-accent/40 mb-5">Recommended for you</div>
        <h3 className="text-2xl font-extrabold mb-2">{recommendation.product} — {recommendation.tier}</h3>
        <p className="text-fg-muted mb-7">{recommendation.reason}</p>
        <Button href="/contact" variant="accent">Book a Demo of {recommendation.product}</Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-[560px] mx-auto bg-surface border border-border rounded-md shadow-sm p-9">
      <div className="mb-5">
        <label className={labelCls}>What industry are you in?</label>
        <select name="industry" required className={fieldCls}>
          {industryOptions.map(i => <option key={i} value={i}>{i}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <div>
          <label className={labelCls}>Annual turnover</label>
          <select name="turnoverBand" required className={fieldCls}>
            {turnoverOptions.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Number of employees</label>
          <select name="employeeBand" required className={fieldCls}>
            {employeeOptions.map(e => <option key={e.value} value={e.value}>{e.label}</option>)}
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className={labelCls}>What do you use today? (optional)</label>
        <input name="currentSoftware" placeholder="Excel, Tally, WhatsApp, nothing yet..." className={fieldCls} />
      </div>
      <div className="mb-5">
        <label className={labelCls}>What's the biggest pain point right now?</label>
        <textarea name="painPoint" required placeholder="e.g. I don't know my real cash position until my CA closes the books" className={`${fieldCls} min-h-[90px] resize-y`} />
      </div>
      {status === 'error' && <p className="text-sm text-accent2 mb-4">{error}</p>}
      <button type="submit" disabled={status === 'submitting'} className="w-full inline-flex items-center justify-center rounded-full font-bold py-3.5 bg-gradient-to-br from-accent to-accent2 text-white shadow-glow disabled:opacity-60">
        {status === 'submitting' ? 'Thinking…' : 'Get My Recommendation'}
      </button>
    </form>
  );
}
