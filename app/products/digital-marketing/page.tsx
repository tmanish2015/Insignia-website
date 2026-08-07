import { ProductPageLayout } from '@/components/marketing/ProductPageLayout';

const features = [
  { icon: '◎', title: 'SEO & Performance Marketing', desc: 'Search and paid campaigns built to bring in leads your ERP can act on.' },
  { icon: '✎', title: 'WhatsApp Automation', desc: 'Capture and respond to leads on the channel your customers already use.' },
  { icon: '◔', title: 'Lead Management', desc: 'Every lead lands in the same CRM your sales team already works from.' },
  { icon: '▤', title: 'Analytics', desc: 'See which channels actually convert into paying customers, not just clicks.' },
  { icon: '✦', title: 'Branding & Website', desc: 'A site and identity built to convert, not just look good.' },
  { icon: '⚡', title: 'Funnels & Email', desc: 'Structured follow-up sequences instead of one-off campaigns.' }
];

const outcomes = ['Pipeline your ERP can run on', 'Leads land in one CRM', 'Clear channel ROI', 'No more one-off campaigns'];

export default function DigitalMarketing() {
  return (
    <ProductPageLayout
      eyebrow="Digital Marketing"
      title="Fill the pipeline your ERP will run on"
      subtitle="Marketing that hands off directly into your CRM and sales process — not a separate agency relationship that never talks to your operations."
      features={features}
      outcomes={outcomes}
      ctaTitle="Get a marketing plan tied to real pipeline"
      ctaDesc="Tell us about your business and we'll map out channels, budget and how leads flow into your CRM."
    />
  );
}
