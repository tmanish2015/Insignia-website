import { Button } from '@/components/ui/Button';
import { IndustryShowcase, type Industry } from '@/components/marketing/IndustryShowcase';
import { StatCounter } from '@/components/marketing/StatCounter';

const aiCards = ['AI Agents', 'Workflow Automation', 'Document AI', 'WhatsApp AI', 'Chatbots', 'Voice AI', 'Predictive Analytics'];
const mkCards = ['SEO', 'Google Ads', 'Facebook & Instagram', 'Lead Generation', 'Branding', 'Website Design', 'Funnels', 'Email Marketing'];

const industries: Industry[] = [
  { id: 'manufacturing', icon: 'Factory', label: 'Manufacturing', sublabel: 'Production & batch control', tagNumber: '01 · Manufacturing', title: 'Raw material to finished goods, fully visible', description: 'Production, quality and cost tracked in one system, so nothing slips between the factory floor and the ledger.', checklist: ['AI Production Planning', 'Batch & Expiry Tracking', 'Multi-Stage Production Costing', 'Machine Maintenance Alerts', 'Automated Purchase Workflow'], outcomes: ['Compliance ready', 'Full batch traceability'], mockupTitle: 'Expiry Register', mockupSubtitle: 'Track batches nearing or past expiry across all warehouses', stats: [{ label: 'Expiring Soon', value: '3' }, { label: 'Active Batches', value: '7' }], floatingNote: 'AI flagged 3 expiring batches' },
  { id: 'distribution', icon: 'Truck', label: 'Distribution', sublabel: 'Multi-location stock', tagNumber: '02 · Distribution', title: 'Every warehouse, dealer and unit in transit — visible', description: 'Multi-location stock and dealer networks managed without losing a single unit or a single reconciliation.', checklist: ['Multi-Warehouse Stock Visibility', 'Dealer Credit & Rating', 'Transfer & Damage Tracking', 'Real-Time Stock Heat Maps', 'Automated Reorder Alerts'], outcomes: ['Zero stock blind spots', 'Faster dealer settlements'], mockupTitle: 'Warehouse Dashboard', mockupSubtitle: 'Locations, transfers, counts and fulfillment across all warehouses', stats: [{ label: 'Warehouses', value: '2' }, { label: 'Pending Transfers', value: '1' }], floatingNote: 'Stock heat map updated live' },
  { id: 'retail', icon: 'ShoppingBag', label: 'Retail', sublabel: 'Store to head office', tagNumber: '03 · Retail Chains', title: 'Every outlet, one source of truth', description: 'Run every store on the same data, from POS to head-office reporting, with loyalty and CRM built in.', checklist: ['Store-Level Sales Rollups', 'Centralized GST & TDS', 'Customer Loyalty & CRM', 'Multi-Outlet Reporting', 'Automated Reconciliation'], outcomes: ['One view, every outlet', 'Faster month-end close'], mockupTitle: 'CRM Dashboard', mockupSubtitle: 'Customer health, pipeline, tickets and follow-ups at a glance', stats: [{ label: 'Active Customers', value: '5' }, { label: 'Avg Rating', value: '3.7/5' }], floatingNote: 'Loyalty synced across outlets' },
  { id: 'healthcare', icon: 'HeartPulse', label: 'Healthcare', sublabel: 'Regulated compliance', tagNumber: '04 · Healthcare', title: 'Regulated stock, always compliant', description: 'Automated expiry and batch controls keep regulated inventory audit-ready, without manual spreadsheets.', checklist: ['Expiry Compliance Alerts', 'Batch-Level Traceability', 'Vendor & Purchase Management', 'Regulatory Reporting', 'Automated Stock Audits'], outcomes: ['Audit-ready always', 'Zero compliance surprises'], mockupTitle: 'Expiry Register', mockupSubtitle: 'Track batches nearing or past expiry across all warehouses', stats: [{ label: 'Expired', value: '1' }, { label: 'Expiring Soon', value: '2' }], floatingNote: 'Batch traced in one click' },
  { id: 'hospitality', icon: 'Hotel', label: 'Hospitality', sublabel: 'F&B & supply cost', tagNumber: '05 · Hospitality', title: 'F&B costs, under control', description: 'Perishable stock and multi-outlet purchasing reconciled daily, so margins stay predictable.', checklist: ['Perishable Stock Management', 'Multi-Outlet Purchase Consolidation', 'Daily Cash Reconciliation', 'Vendor Bill Automation', 'F&B Cost Control'], outcomes: ['Predictable margins', 'Same-day reconciliation'], mockupTitle: 'Financial Dashboard', mockupSubtitle: 'Cash position, receivables, payables and profitability at a glance', stats: [{ label: 'Cash Balance', value: '₹69,500' }, { label: 'Payables', value: '₹66,937' }], floatingNote: 'Cash reconciled overnight' },
  { id: 'automobile', icon: 'Car', label: 'Automobile', sublabel: 'Parts & dealer finance', tagNumber: '06 · Automobile', title: 'Parts, service and dealer finance, unified', description: 'Manage parts inventory across service centers and dealer receivables in a single system.', checklist: ['Parts Inventory Across Centers', 'Dealer Credit & Receivables', 'Automated Reconciliation', 'Service Billing Automation', 'Warranty Claim Tracking'], outcomes: ['Faster service billing', 'Dealer finance in sync'], mockupTitle: 'Customers', mockupSubtitle: 'Manage dealer accounts, credit limits and service profile', stats: [{ label: 'Active Dealers', value: '5' }, { label: 'Credit Limit', value: '₹10L' }], floatingNote: 'Warranty claim auto-filed' },
  { id: 'education', icon: 'GraduationCap', label: 'Education', sublabel: 'Fees & procurement', tagNumber: '07 · Education', title: 'Institutional finance, enterprise rigor', description: 'Run fee collection, procurement and reporting with the same discipline as any large enterprise.', checklist: ['Fee & Receivables Tracking', 'Vendor & Procurement Management', 'Consolidated Financial Reporting', 'Multi-Campus Visibility', 'Automated Approvals'], outcomes: ['One ledger, every campus', 'Faster fee collection'], mockupTitle: 'Financial Dashboard', mockupSubtitle: 'Cash position, receivables, payables and profitability at a glance', stats: [{ label: 'Receivables', value: '₹1,15,321' }, { label: 'Pending Approvals', value: '2' }], floatingNote: 'Fee approval auto-routed' },
  { id: 'construction', icon: 'HardHat', label: 'Construction', sublabel: 'Project & site finance', tagNumber: '08 · Construction', title: 'Every project, vendor and site — one dashboard', description: 'Track project-wise expense, vendor bills and cash flow across sites without switching systems.', checklist: ['Project-Wise Expense Tracking', 'Vendor Bills & Approvals', 'Cash Position Across Sites', 'Purchase-to-Payables Automation', 'Multi-Site Reporting'], outcomes: ['Cost overruns caught early', 'One view, every site'], mockupTitle: 'Executive Dashboard', mockupSubtitle: 'Cross-module KPIs for sales, purchasing, inventory and finance', stats: [{ label: 'Cash Position', value: '₹9,37,003' }, { label: 'Payables', value: '₹71,337' }], floatingNote: 'Site expense flagged over budget' }
];

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
            {aiCards.map(c => <div key={c} className="p-7.5 bg-surface border border-border rounded-md shadow-sm"><h4 className="text-lg mt-4 mb-2">{c}</h4></div>)}
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
            {mkCards.map(c => <div key={c} className="p-7.5 bg-surface border border-border rounded-md shadow-sm"><h4 className="text-lg mt-4 mb-2">{c}</h4></div>)}
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
