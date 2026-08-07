import { ProductPageLayout } from '@/components/marketing/ProductPageLayout';

const features = [
  { icon: '◧', title: 'Sales & CRM', desc: 'Quotation to delivery, customer follow-ups and pipeline in one place.' },
  { icon: '◫', title: 'Multi-Location Inventory', desc: 'Stock, transfers and reorder alerts across every warehouse.' },
  { icon: '⚙', title: 'Manufacturing & HRMS', desc: 'Batch production, machine maintenance and workforce management.' },
  { icon: '₹', title: 'Finance & GST', desc: 'Accounting, GST/TDS and multi-entity consolidation, always audit-ready.' },
  { icon: '◈', title: 'AI Automation Built In', desc: 'Document AI and WhatsApp AI run inside the same platform, not bolted on.' },
  { icon: '◒', title: 'Role-Based Security', desc: 'Approvals and audit trails on every workflow, from invoice to payout.' }
];

const outcomes = ['One system of record', 'Faster month-end close', 'Zero stock blind spots', 'Audit-ready always'];

export default function TradeflowERP() {
  return (
    <ProductPageLayout
      eyebrow="Tradeflow AI ERP"
      title="The core ERP for manufacturers and distributors"
      subtitle="Sales, inventory, manufacturing, HR and finance on one data model — built for businesses that have outgrown spreadsheets and disconnected tools."
      features={features}
      outcomes={outcomes}
      ctaTitle="See Tradeflow running on your own data"
      ctaDesc="Bring one real order or invoice — we'll run it through live before you commit to anything."
    />
  );
}
