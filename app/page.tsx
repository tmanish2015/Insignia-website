import { Button } from '@/components/ui/Button';
import { BrowserMockup } from '@/components/marketing/BrowserMockup';

const industries = ['Manufacturing', 'Retail', 'Distribution', 'Healthcare', 'Education', 'Hospitality', 'Real Estate', 'Automotive'];
const services = [
  { icon: '◧', title: 'ERP Software', desc: 'Run the business from one system of record.', items: ['CRM & Sales', 'Inventory & Warehousing', 'HRMS', 'Finance & Accounting'] },
  { icon: '◈', title: 'AI Automation', desc: 'Let agents handle the repetitive work.', items: ['Workflow Automation', 'Document AI', 'WhatsApp & Voice AI', 'Predictive Analytics'] },
  { icon: '◎', title: 'Digital Marketing', desc: 'Fill the pipeline your ERP will run on.', items: ['SEO & Performance Marketing', 'WhatsApp Automation', 'Lead Management', 'Analytics'] }
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
          <p className="text-xl max-w-[620px] mx-auto mb-10 text-fg-muted">One platform for ERP, AI automation, and digital marketing — built to turn operational data into revenue for manufacturers, distributors and enterprises.</p>
          <div className="flex gap-4 justify-center mb-16">
            <Button href="/contact" variant="accent">Book Free Demo</Button>
            <Button href="/solutions" variant="ghost">Explore Platform</Button>
          </div>
          <div className="max-w-[1040px] mx-auto relative">
            <BrowserMockup title="Executive Dashboard" subtitle="Cross-module KPIs for sales, purchasing, inventory, finance and CRM"
              stats={[{ label: 'Revenue (MTD)', value: '₹1,59,249' }, { label: 'Cash Position', value: '₹9,37,003' }, { label: 'Open Pipeline', value: '₹21,45,000' }, { label: 'Inventory Value', value: '₹33,84,485' }]}
              bars={[40, 55, 30, 70, 50, 85]} />
          </div>
        </div>
      </header>

      <section className="border-t border-b border-border">
        <div className="max-w-wrap mx-auto px-8">
          <p className="text-center text-[13px] font-bold uppercase tracking-wide text-fg-soft mb-9">Built for growing businesses across</p>
          <div className="flex justify-between flex-wrap gap-5">
            {industries.map(i => <span key={i} className="text-base font-bold text-fg-soft">{i}</span>)}
          </div>
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

      <section>
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
