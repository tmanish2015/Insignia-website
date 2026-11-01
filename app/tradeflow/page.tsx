import type { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';
import { ProductLandingPage } from '@/components/marketing/ProductLandingPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { getProduct } from '@/lib/products';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.insigniatech.in';

export const metadata: Metadata = {
  title: 'TradeFlow ERP — Billing, Inventory & Distribution Software for Traders',
  description:
    "TradeFlow by INSIGNIA (Jaipur) is a cloud ERP for traders, wholesalers and distributors in India: sales, purchases, multi-location stock, customer credit and reports in one system. Book a free demo.",
  alternates: { canonical: '/tradeflow' },
  openGraph: {
    title: 'TradeFlow — ERP for Trading & Distribution',
    description:
      'Centralize sales, purchases, inventory, customers, suppliers and business operations in one intelligent platform.',
    url: '/tradeflow',
  },
};

const badge = 'text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full border text-tradeflow bg-tradeflow-soft border-tradeflow/40';

const audiences = [
  'FMCG & grocery distributors',
  'Hardware, sanitary & electrical wholesalers',
  'Building material & tile dealers',
  'Textile, garment & general traders',
];

const problems = [
  {
    pain: 'Stock register says one number, the godown shows another',
    fix: 'One live stock record across every location, updated by each purchase, sale and transfer.',
  },
  {
    pain: 'Udhaari (customer credit) kept in notebooks',
    fix: 'Credit terms and transaction history sit with each customer, so you can see who owes what.',
  },
  {
    pain: 'Orders missed on calls and WhatsApp',
    fix: 'Every order is recorded in the system, from sales order to dispatch, instead of on scraps of paper.',
  },
  {
    pain: 'Owner sees the numbers only at month-end',
    fix: 'Sales, purchase, stock and financial reports stay current, so you can check them any day.',
  },
];

const steps = [
  { title: 'Free demo at your shop', desc: 'We show TradeFlow around your own way of trading.' },
  { title: 'Setup and data import', desc: 'We configure TradeFlow and bring in your existing records.' },
  { title: 'Staff training in Hindi / English', desc: 'Your team learns the system in the language they work in.' },
  { title: 'Go live', desc: 'You start billing and tracking stock in TradeFlow.' },
];

const faqs = [
  {
    q: 'What is TradeFlow ERP?',
    a: 'TradeFlow ERP is cloud software from INSIGNIA, Jaipur, for traders, wholesalers and distributors in India. It brings sales, purchases, multi-location stock, customer and supplier records, credit and business reports into one system.',
  },
  {
    q: 'Who should use TradeFlow?',
    a: 'Trading and distribution businesses: FMCG and grocery distributors; hardware, sanitary and electrical wholesalers; building material and tile dealers; and textile, garment and general traders.',
  },
  {
    q: 'Can I keep using Tally?',
    a: 'You do not have to change everything at once. In the demo we will go through which of your current records and reports you want in TradeFlow, and how that fits with the way you use Tally today.',
  },
  {
    q: 'Does TradeFlow work on mobile?',
    a: 'TradeFlow is cloud-based and opens in a web browser, so there is nothing to install on your computer. Ask us to show it on your phone during the free demo.',
  },
  {
    q: 'Can I manage multiple godowns?',
    a: 'Yes. Warehouse management gives you multi-location stock visibility and transfers between locations, so you can see what is held where.',
  },
  {
    q: 'Do you provide support in Jaipur?',
    a: 'INSIGNIA is based in Sanganer, Jaipur. We do the demo, setup and data import with you, and train your staff in Hindi or English. You can reach us on +91 6350210426.',
  },
  {
    q: 'How do I book a demo?',
    a: 'Message us on WhatsApp at +91 6350210426, or use the contact page. The demo is free.',
  },
];

export default function TradeFlow() {
  const product = getProduct('tradeflow');

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'TradeFlow ERP',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Cloud ERP for traders, wholesalers and distributors in India covering sales, purchases, multi-location inventory, customers, suppliers and reports.',
      url: `${siteUrl}/tradeflow`,
      featureList: product.features,
      areaServed: 'IN',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'INSIGNIA',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'TradeFlow',
          item: `${siteUrl}/tradeflow`,
        },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((data) => (
        <JsonLd key={String(data['@type'])} data={data} />
      ))}

      <ProductLandingPage
        productId="tradeflow"
        dashboardTitle="Sales & Inventory Dashboard"
        dashboardSubtitle="Live view of sales, purchases, stock and warehouse activity"
        dashboardStats={[
          { label: 'Sales (MTD)', value: '₹18,42,500' },
          { label: 'Open Purchase Orders', value: '12' },
          { label: 'Stock Value', value: '₹52,10,300' },
          { label: 'Active Suppliers', value: '34' },
        ]}
      >
        <section>
          <div className="max-w-wrap mx-auto px-8">
            <div className="max-w-[640px] mx-auto mb-16 text-center">
              <span className={badge}>Who it&apos;s for</span>
              <h2 className="text-[42px] mt-5">Built for traders and distributors</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
              {audiences.map((a) => (
                <div key={a} className="p-7 bg-surface border border-border rounded-md shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full mb-4 bg-tradeflow" />
                  <h3 className="text-[17px]">{a}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-wrap mx-auto px-8">
            <div className="max-w-[640px] mx-auto mb-16 text-center">
              <span className={badge}>Problems it fixes</span>
              <h2 className="text-[42px] mt-5">Everyday trading headaches, sorted</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
              {problems.map((p) => (
                <div key={p.pain} className="p-7 bg-surface border border-border rounded-md shadow-sm">
                  <p className="text-sm text-fg-soft line-through mb-3">{p.pain}</p>
                  <p className="text-[15px] text-fg">{p.fix}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-wrap mx-auto px-8">
            <div className="max-w-[640px] mx-auto mb-16 text-center">
              <span className={badge}>Getting started</span>
              <h2 className="text-[42px] mt-5">From demo to go-live in four steps</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 [@media(min-width:1100px)]:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={s.title} className="p-7 bg-surface border border-border rounded-md shadow-sm">
                  <div className="w-9 h-9 rounded-full mb-4 flex items-center justify-center text-sm font-bold text-tradeflow bg-tradeflow-soft border border-tradeflow/40">{i + 1}</div>
                  <h3 className="text-[17px] mb-2">{s.title}</h3>
                  <p className="text-sm text-fg-muted">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-wrap mx-auto px-8">
            <div className="max-w-[640px] mx-auto mb-16 text-center">
              <span className={badge}>FAQ</span>
              <h2 className="text-[42px] mt-5">TradeFlow ERP, answered</h2>
            </div>
            <div className="max-w-[760px] mx-auto flex flex-col gap-4">
              {faqs.map((f) => (
                <details key={f.q} className="group p-6 bg-surface border border-border rounded-md shadow-sm">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-[17px] [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDown size={18} className="flex-shrink-0 text-fg-soft transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm text-fg-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </ProductLandingPage>
    </>
  );
}
