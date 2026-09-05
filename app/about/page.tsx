import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { products } from '@/lib/products';
import { ProductLogo } from '@/components/marketing/ProductLogo';

export const metadata: Metadata = {
  title: 'About INSIGNIA — AI-Powered ERP & Business Automation',
  description: 'INSIGNIA builds AI-powered ERP and business automation software — TradeFlow, TransformerFlow and Order Sathi — for manufacturers, distributors and growing enterprises.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About INSIGNIA',
    description: 'AI-powered ERP and business automation software for manufacturers, distributors and growing enterprises.',
    url: '/about'
  }
};

const focusAreas = [
  { title: 'AI-Powered Business Automation', desc: 'AI agents and workflow automation that take on repetitive, manual work across sales, purchasing and operations.' },
  { title: 'ERP Software', desc: 'Purpose-built ERP systems for trading, manufacturing and order management, run from one connected platform.' },
  { title: 'Business Operations', desc: 'Inventory, sales, purchasing, finance and CRM handled in one system of record instead of scattered spreadsheets.' },
  { title: 'Digital Transformation', desc: 'Helping businesses that run on Excel and WhatsApp today move to a connected, data-driven platform, at their own pace.' }
];

export default function About() {
  return (
    <>
      <header className="pt-20 pb-14 text-center">
        <div className="max-w-wrap mx-auto px-8">
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">About</span>
          <h1 className="text-4xl md:text-[56px] max-w-[760px] mx-auto mt-5">AI-powered ERP for growing businesses</h1>
          <p className="text-lg max-w-[640px] mx-auto mt-5 text-fg-muted">INSIGNIA TECH is a technology company building AI-powered ERP and business automation software for manufacturers, distributors and growing enterprises — based in Jaipur, Rajasthan, India.</p>
        </div>
      </header>

      <section className="pt-0">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[780px] mx-auto text-[15px] leading-relaxed text-fg-muted space-y-5">
            <p>We focus on AI-powered business automation, ERP software, day-to-day business operations and digital transformation — built for businesses that are running on spreadsheets and WhatsApp today, as well as those already operating at scale.</p>
            <p>Our products are designed around how Indian MSMEs and growing enterprises actually operate: one connected system for sales, purchasing, inventory, finance and customer management, with AI automation layered on top instead of bolted on afterward.</p>
          </div>
        </div>
      </section>

      <section className="bg-surface mt-16">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-14 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">What We Do</span>
            <h2 className="text-[38px] mt-5">Where we focus</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {focusAreas.map(f => (
              <div key={f.title} className="p-7 bg-surface2 border border-border rounded-md shadow-sm">
                <h4 className="text-[17px] mb-2">{f.title}</h4>
                <p className="text-sm text-fg-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-14 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Our Products</span>
            <h2 className="text-[38px] mt-5">Three ERPs, one platform</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map(p => (
              <Link key={p.id} href={p.slug} className="p-7 bg-surface border border-border rounded-md shadow-sm hover:border-fg-muted transition-colors">
                <ProductLogo product={p} heightClass="h-6 mb-4" />
                <p className="text-sm text-fg-muted">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface mt-16">
        <div className="max-w-wrap mx-auto px-8 py-4">
          <div className="max-w-[640px] mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Based In</span>
            <h2 className="text-[32px] mt-5 mb-3">Jaipur, Rajasthan, India</h2>
            <p className="text-[15px] text-fg-muted">Orchid-407, Manglam Ananda, Sanganer, Jaipur – 302029, Rajasthan</p>
            <p className="text-[15px] text-fg-muted mt-1">Insignia0026@gmail.com · +91 6350210426</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="max-w-wrap mx-auto px-8">
          <div className="bg-gradient-to-br from-accent-soft to-accent2-soft border border-border shadow-glow rounded-lg p-10 md:p-16 text-center text-white">
            <h2 className="text-white text-[34px] mb-4">Want to see it on your own data?</h2>
            <p className="text-fg-muted text-lg mb-8">Bring one real order or invoice — we'll run it through live before you commit to anything.</p>
            <Button href="/contact" variant="accent">Book Your Free Consultation →</Button>
          </div>
        </div>
      </section>
    </>
  );
}
