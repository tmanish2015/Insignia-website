import { Button } from '@/components/ui/Button';

export interface ProductFeature {
  icon: string;
  title: string;
  desc: string;
}

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  features: ProductFeature[];
  outcomes: string[];
  ctaTitle: string;
  ctaDesc: string;
}

export function ProductPageLayout({ eyebrow, title, subtitle, features, outcomes, ctaTitle, ctaDesc }: Props) {
  return (
    <>
      <header className="pt-20 pb-14 text-center">
        <div className="max-w-wrap mx-auto px-8">
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">{eyebrow}</span>
          <h1 className="text-4xl md:text-[56px] max-w-[760px] mx-auto mt-5">{title}</h1>
          <p className="text-lg max-w-[600px] mx-auto mt-5 text-fg-muted">{subtitle}</p>
          <div className="flex gap-4 justify-center mt-8">
            <Button href="/contact" variant="accent">Book Demo</Button>
            <Button href="/pricing" variant="ghost">See Pricing</Button>
          </div>
        </div>
      </header>

      <section className="bg-surface">
        <div className="max-w-wrap mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {features.map(f => (
              <div key={f.title} className="p-7.5 text-left bg-surface border border-border rounded-md shadow-sm">
                <div className="w-13 h-13 rounded-md bg-accent-soft flex items-center justify-center text-accent-dark mb-5">{f.icon}</div>
                <h4 className="text-[17px] mb-2">{f.title}</h4>
                <p className="text-sm text-fg-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-10 text-center">
            <h2 className="text-3xl">What changes once you're live</h2>
          </div>
          <div className="flex gap-2.5 flex-wrap justify-center">
            {outcomes.map(o => <span key={o} className="text-xs font-bold text-accent-dark bg-accent-soft border border-accent/40 rounded-full px-3.5 py-1.5">{o}</span>)}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-wrap mx-auto px-8">
          <div className="bg-gradient-to-br from-accent-soft to-accent2-soft border border-border shadow-glow rounded-lg p-10 md:p-20 text-center text-white">
            <h2 className="text-white text-4xl mb-4">{ctaTitle}</h2>
            <p className="text-fg-muted text-[17px] mb-8">{ctaDesc}</p>
            <Button href="/contact" variant="accent">Book Free Consultation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
