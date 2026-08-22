import { Button } from '@/components/ui/Button';
import { IndustryShowcase } from '@/components/marketing/IndustryShowcase';
import { StatCounter } from '@/components/marketing/StatCounter';
import { industries } from '@/lib/data/industries';

const aiCards = ['AI Agents', 'Workflow Automation', 'Document AI', 'WhatsApp AI', 'Chatbots', 'Voice AI', 'Predictive Analytics'];
const mkCards = ['SEO', 'Google Ads', 'Facebook & Instagram', 'Lead Generation', 'Branding', 'Website Design', 'Funnels', 'Email Marketing'];

export default function Solutions() {
  return (
    <>
      <header className="pt-20 pb-14 text-center">
        <div className="max-w-wrap mx-auto px-8">
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Solutions</span>
          <h1 className="text-4xl md:text-[56px] max-w-[760px] mx-auto mt-5">One platform for ERP, AI and growth</h1>
          <p className="text-lg max-w-[600px] mx-auto mt-5 text-fg-muted">Every module is built on the same data model — so sales, inventory, finance and marketing stay in sync without manual reconciliation.</p>
        </div>
      </header>

      <div className="sticky top-[76px] z-40 bg-bg2 border-b border-border-soft">
        <div className="max-w-wrap mx-auto px-8 flex gap-8 py-4 overflow-x-auto">
          <a href="#erp" className="text-sm font-bold text-fg-soft hover:text-fg whitespace-nowrap">ERP Platform</a>
          <a href="#ai" className="text-sm font-bold text-fg-soft hover:text-fg whitespace-nowrap">AI Automation</a>
          <a href="#marketing" className="text-sm font-bold text-fg-soft hover:text-fg whitespace-nowrap">Digital Marketing</a>
          <a href="#industries" className="text-sm font-bold text-fg-soft hover:text-fg whitespace-nowrap">Industries</a>
        </div>
      </div>

      <section id="ai" className="bg-surface">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">AI Automation</span>
            <h2 className="text-4xl mt-5">Agents that do the busywork</h2>
            <p className="mt-4 text-lg text-fg-muted">Insignia's AI layer reads documents, watches thresholds and talks to customers — so your team works on decisions, not data entry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 [@media(min-width:1100px)]:grid-cols-4 gap-6">
            {aiCards.map(c => <div key={c} className="p-7.5 bg-surface border border-border rounded-md shadow-sm flex items-center justify-center min-h-[84px]"><h4 className="text-lg text-center">{c}</h4></div>)}
          </div>
        </div>
      </section>

      <section id="marketing">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Digital Marketing</span>
            <h2 className="text-4xl mt-5">Fill the pipeline your ERP will run on</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 [@media(min-width:1100px)]:grid-cols-4 gap-6">
            {mkCards.map(c => <div key={c} className="p-7.5 bg-surface border border-border rounded-md shadow-sm flex items-center justify-center min-h-[84px]"><h4 className="text-lg text-center">{c}</h4></div>)}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-surface relative overflow-hidden">
        <div className="max-w-wrap mx-auto px-8 relative z-10">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Industries</span>
            <h2 className="text-[44px] mt-5">ERP built around the way your industry works</h2>
            <p className="mt-4 text-lg text-fg-muted">Every industry has unique workflows. Insignia adapts to your business instead of forcing your business to adapt to software.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <StatCounter target={30} label="Business Modules" />
            <StatCounter target={25} label="Industry Workflows" />
            <StatCounter target={100} label="Automation Rules" />
            <StatCounter target={99.9} suffix="%" label="Cloud Uptime" />
          </div>
          <IndustryShowcase industries={industries} />
        </div>
      </section>

      <section>
        <div className="max-w-wrap mx-auto px-8">
          <div className="bg-gradient-to-br from-accent-soft to-accent2-soft border border-border shadow-glow rounded-lg p-10 md:p-20 text-center text-white">
            <h2 className="text-white text-4xl mb-4">Ready to build your industry's digital backbone?</h2>
            <p className="text-fg-muted text-[17px] mb-8">Book a personalized ERP demonstration and discover how Insignia transforms operations with AI-powered automation.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button href="/contact" variant="accent">Book Demo</Button>
              <Button href="/contact" variant="ghost">Talk to Expert</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
