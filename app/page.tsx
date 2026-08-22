import { Button } from '@/components/ui/Button';
import { BrowserMockup } from '@/components/marketing/BrowserMockup';
import { ProductCard } from '@/components/marketing/ProductCard';
import { products } from '@/lib/products';
import { InteractiveERP } from '@/components/marketing/InteractiveERP';
import { IndustryShowcase } from '@/components/marketing/IndustryShowcase';
import { AIAssistant } from '@/components/marketing/AIAssistant';
import { industries as industryProfiles } from '@/lib/data/industries';

const floatingCards = [
  { label: '+32% Revenue', className: '-top-5 -left-8 [@media(min-width:768px)]:flex hidden' },
  { label: '248 Orders Today', className: 'top-1/3 -right-10 [@media(min-width:768px)]:flex hidden' },
  { label: 'Inventory Optimized', className: 'bottom-10 -left-10 [@media(min-width:768px)]:flex hidden' },
  { label: 'AI Insight', className: '-bottom-5 right-1/4 [@media(min-width:768px)]:flex hidden' }
];

const industryNames = ['Manufacturing', 'Retail', 'Distribution', 'Healthcare', 'Education', 'Hospitality', 'Real Estate', 'Automotive'];
const aiDemoCards = ['AI Agents', 'Workflow Automation', 'Document AI', 'WhatsApp & Voice AI', 'Predictive Analytics'];
const services = [
  { icon: '◧', title: 'ERP Software', desc: 'Run the business from one system of record.', items: ['CRM & Sales', 'Inventory & Warehousing', 'HRMS', 'Finance & Accounting'] },
  { icon: '◈', title: 'AI Automation', desc: 'Let agents handle the repetitive work.', items: ['Workflow Automation', 'Document AI', 'WhatsApp & Voice AI', 'Predictive Analytics'] },
  { icon: '◎', title: 'Digital Marketing', desc: 'Fill the pipeline your ERP will run on.', items: ['SEO & Performance Marketing', 'WhatsApp Automation', 'Lead Management', 'Analytics'] }
];
const msmePains = [
  { icon: '✎', title: 'Meets you where you work', desc: 'Take orders and log entries over WhatsApp — no new app for your team or your customers to learn.' },
  { icon: '₹', title: 'Know your numbers today', desc: "Real-time cash position and revenue, instead of waiting for your CA to close the books months later." },
  { icon: '▤', title: 'Compliance without the panic', desc: 'GST-ready invoices and filing-ready reports generated as you sell, not reconstructed at deadline time.' },
  { icon: '⟡', title: 'Priced for your reality', desc: "Built and priced for a business run by one owner wearing five hats — not licensed like an enterprise SAP rollout." },
  { icon: '◔', title: 'Automation, not more hiring', desc: 'AI agents absorb the repetitive data entry, so growth does not mean adding headcount just to keep up.' },
  { icon: '✓', title: 'No big-bang risk', desc: 'Bring one real order or invoice — we run it through live on your own data before you commit to anything.' }
];
const why = [
  { icon: '✦', title: 'AI First', desc: 'Every module is designed around agents and automation, not retrofitted with a chatbot.' },
  { icon: '☁', title: 'Cloud Native', desc: 'Access every dashboard from anywhere, on any device, with zero infrastructure to manage.' },
  { icon: '◒', title: 'Secure', desc: 'Role-based approvals and audit trails built into every workflow, from invoice to payout.' },
  { icon: '⚡', title: 'Fast Deployment', desc: 'Go live in weeks, not quarters, with guided onboarding and data migration.' },
  { icon: '◫', title: 'Scalable', desc: 'One data model that holds from a single warehouse to a multi-location enterprise.' },
  { icon: '◉', title: 'Dedicated Support', desc: 'A named team that knows your business, not a ticket queue.' }
];
const process = [
  { num: '01', title: 'Discover', desc: 'We map your workflows, data and revenue leaks across every department.' },
  { num: '02', title: 'Design', desc: 'A tailored ERP, AI and marketing architecture built around how you actually operate.' },
  { num: '03', title: 'Implement', desc: 'Guided rollout, data migration and team onboarding with a dedicated team.' },
  { num: '04', title: 'Scale', desc: 'Continuous automation and insight as you add locations, products and people.' }
];

export default function Home() {
  return (
    <>
      <header className="relative pt-[70px] pb-10 overflow-hidden text-center">
        <div className="wrap max-w-wrap mx-auto px-8 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">AI · ERP · Growth Platform</span>
          <h1 className="text-5xl md:text-[76px] max-w-[920px] mx-auto mt-6 mb-6">Transform Your Business with <span className="text-accent-dark">AI-Powered ERP</span></h1>
          <p className="text-xl max-w-[620px] mx-auto mb-10 text-fg-muted">One platform for ERP, AI automation, and digital marketing — built to turn operational data into revenue, whether you're running on Excel and WhatsApp today or already at enterprise scale.</p>
          <div className="flex gap-4 justify-center mb-16">
            <Button href="/contact" variant="accent">Book Free Demo</Button>
            <Button href="/solutions" variant="ghost">Explore Platform</Button>
          </div>
          <div className="max-w-[1040px] mx-auto relative">
            <BrowserMockup title="Executive Dashboard" subtitle="Cross-module KPIs for sales, purchasing, inventory, finance and CRM"
              stats={[{ label: 'Revenue (MTD)', value: '₹1,59,249' }, { label: 'Cash Position', value: '₹9,37,003' }, { label: 'Open Pipeline', value: '₹21,45,000' }, { label: 'Inventory Value', value: '₹33,84,485' }]}
              bars={[40, 55, 30, 70, 50, 85]} />
            {floatingCards.map(c => (
              <div key={c.label} className={`absolute ${c.className} items-center gap-2 bg-surface2 border border-border rounded-sm shadow-md px-4 py-3 text-[13px] font-bold text-fg animate-[float_6s_ease-in-out_infinite] z-20`}>
                <span className="w-2 h-2 rounded-full bg-accent" />{c.label}
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="border-t border-b border-border">
        <div className="max-w-wrap mx-auto px-8">
          <p className="text-center text-[13px] font-bold uppercase tracking-wide text-fg-soft mb-9">Built for growing businesses across</p>
          <div className="flex justify-between flex-wrap gap-5">
            {industryNames.map(i => <span key={i} className="text-base font-bold text-fg-soft">{i}</span>)}
          </div>
        </div>
      </section>

      <section id="products" className="bg-surface">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">ERP Products</span>
            <h2 className="text-[42px] mt-5">One Platform. Three Powerful ERPs.</h2>
            <p className="mt-4 text-lg text-fg-muted">Purpose-built business software for different stages of the business value chain.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <div className="sticky top-[76px] z-40 bg-bg2 border-b border-border-soft">
        <div className="max-w-wrap mx-auto px-8 flex gap-8 py-4 overflow-x-auto">
          <a href="#ai-demo" className="text-sm font-bold text-fg-soft hover:text-fg whitespace-nowrap">AI Demo</a>
          <a href="#interactive-erp" className="text-sm font-bold text-fg-soft hover:text-fg whitespace-nowrap">Interactive ERP</a>
          <a href="#industry-selector" className="text-sm font-bold text-fg-soft hover:text-fg whitespace-nowrap">Industries</a>
          <a href="#get-recommendation" className="text-sm font-bold text-fg-soft hover:text-fg whitespace-nowrap">Get Recommendation</a>
          <a href="#book-demo" className="text-sm font-bold text-fg-soft hover:text-fg whitespace-nowrap">Book Demo</a>
        </div>
      </div>

      <section id="ai-demo" className="bg-surface">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">AI Demo</span>
            <h2 className="text-[42px] mt-5">Agents that do the busywork</h2>
            <p className="mt-4 text-lg text-fg-muted">Insignia's AI layer reads documents, watches thresholds and talks to customers — so your team works on decisions, not data entry.</p>
          </div>
          <div className="grid grid-cols-2 [@media(min-width:900px)]:grid-cols-5 gap-4">
            {aiDemoCards.map(c => <div key={c} className="p-5 text-center bg-surface border border-border rounded-md shadow-sm text-sm font-bold text-fg">{c}</div>)}
          </div>
        </div>
      </section>

      <section id="interactive-erp">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Interactive ERP</span>
            <h2 className="text-[42px] mt-5">Click through the platform yourself</h2>
            <p className="mt-4 text-lg text-fg-muted">No login, no sales call required — this is illustrative sample data so you can see how the modules fit together.</p>
          </div>
          <InteractiveERP />
        </div>
      </section>

      <section id="industry-selector" className="bg-surface relative overflow-hidden">
        <div className="max-w-wrap mx-auto px-8 relative z-10">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Industry Selector</span>
            <h2 className="text-[42px] mt-5">Choose your industry, see it adapt</h2>
            <p className="mt-4 text-lg text-fg-muted">Every industry has unique workflows. Insignia adapts to your business instead of forcing your business to adapt to software.</p>
          </div>
          <IndustryShowcase industries={industryProfiles} />
        </div>
      </section>

      <section>
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">What We Do</span>
            <h2 className="text-[42px] mt-5">Every function, one platform</h2>
            <p className="mt-4 text-lg text-fg-muted">ERP, AI automation and digital marketing, engineered to work together instead of bolted on afterward.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {services.map(s => (
              <div key={s.title} className="p-9 bg-surface border border-border rounded-md shadow-sm">
                <div className="w-13 h-13 rounded-md bg-accent-soft flex items-center justify-center text-accent-dark mb-5">{s.icon}</div>
                <h3 className="text-[22px] mb-3">{s.title}</h3>
                <p className="text-fg-muted">{s.desc}</p>
                <ul className="flex flex-col gap-2.5 mt-5">{s.items.map(it => <li key={it} className="text-sm text-fg-muted pl-4.5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Built For MSMEs</span>
            <h2 className="text-[42px] mt-5">Built for how you actually run the business</h2>
            <p className="mt-4 text-lg text-fg-muted">Most software is built for enterprises and bent to fit everyone smaller. Insignia is built around how small and unorganised-sector businesses in India really operate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {msmePains.map(m => (
              <div key={m.title} className="p-7.5 text-left bg-surface border border-border rounded-md shadow-sm">
                <div className="w-13 h-13 rounded-md bg-accent-soft flex items-center justify-center text-accent-dark mb-5">{m.icon}</div>
                <h4 className="text-[17px] mb-2">{m.title}</h4>
                <p className="text-sm text-fg-muted">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="get-recommendation">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Not Sure Where to Start?</span>
            <h2 className="text-[42px] mt-5">Tell us about your business, get a recommendation</h2>
            <p className="mt-4 text-lg text-fg-muted">A few quick questions — industry, size, what you use today — and we'll point you to the right product and plan.</p>
          </div>
          <AIAssistant />
        </div>
      </section>

      <section className="bg-surface">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Why Insignia</span>
            <h2 className="text-[42px] mt-5">Built for scale, from day one</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {why.map(w => (
              <div key={w.title} className="p-7.5 text-left bg-surface border border-border rounded-md shadow-sm">
                <div className="w-13 h-13 rounded-md bg-accent-soft flex items-center justify-center text-accent-dark mb-5">{w.icon}</div>
                <h4 className="text-[17px] mb-2">{w.title}</h4>
                <p className="text-sm text-fg-muted">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">How We Work</span>
            <h2 className="text-[42px] mt-5">From audit to autopilot</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 [@media(min-width:1200px)]:grid-cols-4 gap-9">
            {process.map(p => (
              <div key={p.num} className="px-5">
                <div className="text-[44px] font-black text-accent-soft mb-4.5" style={{ WebkitTextStroke: '1.5px oklch(60% .18 292)' }}>{p.num}</div>
                <h4 className="text-[19px] mb-2.5">{p.title}</h4>
                <p className="text-sm text-fg-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book-demo">
        <div className="max-w-wrap mx-auto px-8">
          <div className="bg-gradient-to-br from-accent-soft to-accent2-soft border border-border shadow-glow rounded-lg p-10 md:p-20 text-center text-white">
            <h2 className="text-white text-[44px] mb-4.5">Ready to Grow with AI?</h2>
            <p className="text-fg-muted text-lg mb-9">Book a free consultation and see your business inside the platform.</p>
            <Button href="/contact" variant="accent">Book Your Free Consultation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
