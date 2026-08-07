import { Button } from '@/components/ui/Button';
import { PricingTierCard } from '@/components/marketing/PricingTierCard';

const tiers = [
  { name: 'Starter', price: 'Custom Quote', description: 'For single-location businesses ready to move off spreadsheets.', features: ['Core ERP: Sales, Purchase, Inventory', 'Finance & GST/TDS', 'Up to 5 users', 'Standard onboarding', 'Email support'], ctaLabel: 'Get a Quote', ctaVariant: 'ghost' as const },
  { name: 'Growth', price: 'Custom Quote', description: 'For multi-location teams ready to automate and market at scale.', features: ['Full ERP: CRM, HRMS, Manufacturing', 'AI Automation & WhatsApp AI', 'Multi-warehouse & multi-branch', 'Unlimited users', 'Dedicated onboarding manager', 'Priority support'], ctaLabel: 'Get a Quote', ctaVariant: 'accent' as const, featured: true },
  { name: 'Enterprise', price: 'Custom Quote', description: 'For corporates that need custom workflows and integrations.', features: ['Everything in Growth', 'Digital Marketing & funnels', 'Custom AI agents & integrations', 'Advanced roles & approvals', 'SLA-backed support', 'Dedicated success team'], ctaLabel: 'Talk to Sales', ctaVariant: 'ghost' as const }
];

const faqs = [
  ["Why isn't pricing listed publicly?", "Insignia is scoped to your modules, user count and data volume, so a flat price would either overcharge simple setups or undercharge complex ones. A quote takes one call."],
  ["Is there a setup or implementation fee?", "Implementation is scoped alongside your plan and covers data migration, configuration and training — it's part of the quote you receive, not a surprise."],
  ["Can I add AI or marketing later?", "Yes. Every plan runs on the same platform, so modules can be added as you grow without a re-implementation."],
  ["Do you offer annual contracts?", "Both monthly and annual terms are available; annual terms typically include a discount, confirmed on your quote."]
];

export default function Pricing() {
  return (
    <>
      <header className="pt-20 pb-14 text-center">
        <div className="max-w-wrap mx-auto px-8">
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Pricing</span>
          <h1 className="text-4xl md:text-[56px] max-w-[700px] mx-auto mt-5">Simple, transparent, built to scale</h1>
          <p className="text-lg max-w-[560px] mx-auto mt-5 text-fg-muted">Every plan is scoped to your modules, users and data volume — you'll get an exact quote after a short discovery call, not a generic price list.</p>
        </div>
      </header>

      <section className="pt-0">
        <div className="max-w-wrap mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {tiers.map(t => <PricingTierCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      <section className="bg-surface mt-24">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Questions</span>
            <h2 className="text-[38px] mt-5">Pricing, answered</h2>
          </div>
          <div className="max-w-[780px] mx-auto">
            {faqs.map(([q, a], i) => (
              <div key={q} className={`py-6.5 border-t border-border ${i === faqs.length - 1 ? 'border-b' : ''}`}>
                <h4 className="text-[17px] mb-2">{q}</h4>
                <p className="text-[15px] text-fg-muted">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-wrap mx-auto px-8">
          <div className="bg-gradient-to-br from-accent-soft to-accent2-soft border border-border shadow-glow rounded-lg p-10 md:p-20 text-center text-white">
            <h2 className="text-white text-4xl mb-4">Get your exact price in one call</h2>
            <p className="text-fg-muted text-[17px] mb-8">Tell us about your business and we'll return a scoped quote within 48 hours.</p>
            <Button href="/contact" variant="accent">Book Free Consultation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
