import { ProductPageLayout } from '@/components/marketing/ProductPageLayout';

const features = [
  { icon: '◈', title: 'Workflow Automation', desc: 'Approvals, alerts and follow-ups run themselves once the rules are set.' },
  { icon: '▤', title: 'Document AI', desc: 'Invoices, bills and receipts read and entered automatically — no manual typing.' },
  { icon: '✎', title: 'WhatsApp & Voice AI', desc: 'Take orders and answer routine customer questions over WhatsApp and voice.' },
  { icon: '◔', title: 'Predictive Analytics', desc: 'Spot demand, stock and cash-flow patterns before they become problems.' },
  { icon: '✦', title: 'Agents, Not Chatbots', desc: 'Every agent is built around a real workflow, not a generic Q&A layer.' },
  { icon: '✓', title: 'No Big-Bang Risk', desc: "Bring one real process — we'll automate it live before you commit to anything." }
];

const outcomes = ['Less manual data entry', 'Faster response times', 'Fewer missed follow-ups', 'Automation, not more hiring'];

export default function AIAutomation() {
  return (
    <ProductPageLayout
      eyebrow="AI Business Automation"
      title="Let agents handle the repetitive work"
      subtitle="For businesses not ready for a full ERP rollout — automate the busywork first: data entry, WhatsApp orders, document processing and routine follow-ups."
      features={features}
      outcomes={outcomes}
      ctaTitle="See what we can automate for you"
      ctaDesc="Tell us your most repetitive task — we'll show you what an agent handling it looks like."
    />
  );
}
