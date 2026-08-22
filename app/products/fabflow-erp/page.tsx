import { ProductPageLayout } from '@/components/marketing/ProductPageLayout';

const features = [
  { icon: '◧', title: 'Dye Lot & Shade Tracking', desc: 'Every roll traced by dye lot and shade variation, from dye house to dispatch.' },
  { icon: '◫', title: 'GSM & Roll-Level Inventory', desc: 'Stock natively understood in metres, rolls and GSM — not forced into generic SKUs.' },
  { icon: '⚙', title: 'Loom & Production Scheduling', desc: 'Spinning, weaving, knitting and dyeing stages scheduled and costed together.' },
  { icon: '₹', title: 'Finance & GST', desc: 'Accounting, GST/TDS and multi-entity consolidation, always audit-ready.' },
  { icon: '◈', title: 'AI Automation Built In', desc: 'Document AI and WhatsApp AI run inside the same platform, not bolted on.' },
  { icon: '◒', title: 'Role-Based Security', desc: 'Approvals and audit trails on every workflow, from invoice to payout.' }
];

const outcomes = ['Full batch traceability', 'One system of record', 'Faster month-end close', 'Zero stock blind spots'];

export default function FabFlowERP() {
  return (
    <ProductPageLayout
      eyebrow="FabFlow ERP"
      title="ERP built for textile and fabric operations"
      subtitle="Same core Insignia platform, tuned for the terms your business actually runs on — dye lots, shade variation, GSM specs and roll-level tracking, out of the box."
      features={features}
      outcomes={outcomes}
      ctaTitle="See FabFlow running on your own data"
      ctaDesc="Bring one real order, invoice or dye lot — we'll run it through live before you commit to anything."
    />
  );
}
