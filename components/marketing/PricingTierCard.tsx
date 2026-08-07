import { Button } from '@/components/ui/Button';

interface Props {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaVariant: 'accent' | 'ghost';
  featured?: boolean;
}

export function PricingTierCard({ name, price, description, features, ctaLabel, ctaVariant, featured }: Props) {
  return (
    <div className={`relative flex flex-col p-10 rounded-md bg-surface border shadow-sm ${featured ? 'border-2 border-accent shadow-glow' : 'border-border'}`}>
      {featured && <div className="absolute -top-3.5 left-8 bg-accent text-white text-xs font-bold px-3.5 py-1.5 rounded-full">Most Popular</div>}
      <div className="text-xs font-bold uppercase tracking-wide text-fg-soft">{name}</div>
      <div className="text-3xl font-extrabold mt-4 mb-1.5">{price}</div>
      <p className="text-sm text-fg-muted mb-6.5">{description}</p>
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {features.map(f => (
          <li key={f} className="text-sm text-fg-muted pl-5.5 relative before:content-['✓'] before:absolute before:left-0 before:top-0 before:text-accent-dark before:font-bold before:text-[13px]">{f}</li>
        ))}
      </ul>
      <Button href="/contact" variant={ctaVariant}>{ctaLabel}</Button>
    </div>
  );
}
