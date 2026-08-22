import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BrowserMockup } from '@/components/marketing/BrowserMockup';
import { ProductLogo } from '@/components/marketing/ProductLogo';
import { products, type Product } from '@/lib/products';

const badgeClass: Record<Product['color'], string> = {
  tradeflow: 'text-tradeflow bg-tradeflow-soft border-tradeflow/40',
  transformerflow: 'text-transformerflow bg-transformerflow-soft border-transformerflow/40',
  ordersathi: 'text-ordersathi bg-ordersathi-soft border-ordersathi/40'
};

const dotClass: Record<Product['color'], string> = {
  tradeflow: 'bg-tradeflow',
  transformerflow: 'bg-transformerflow',
  ordersathi: 'bg-ordersathi'
};

const featureDescriptions: Record<string, string> = {
  'Sales Management': 'Quotations, sales orders, invoices and customer transactions in one flow.',
  'Purchase Management': 'Suppliers, purchase orders, receipts and purchasing workflows, automated.',
  'Inventory': 'Stock, warehouses, movements, reorder levels and product availability, live.',
  'Customers': 'Complete customer records, credit terms and transaction history.',
  'Suppliers': 'Supplier profiles, terms and purchase history in one place.',
  'Warehouse': 'Multi-location stock visibility and transfers.',
  'CRM': 'Track leads, follow-ups and customer relationships alongside transactions.',
  'Business Reports': 'Sales, purchase, inventory and financial reports, always current.',
  'Production': 'Plan and track production runs from a single workspace.',
  'BOM': 'Bill of materials management for accurate raw material planning.',
  'Raw Material': 'Track raw material stock and consumption against production.',
  'Purchase': 'Manage supplier purchase orders and receipts.',
  'Sales': 'Sales orders and invoicing for finished goods.',
  'Production Planning': 'Schedule production runs against demand and capacity.',
  'Costing': 'Multi-stage production costing tied to actual material and labor.',
  'Quality': 'Quality checks built into the production workflow.',
  'Reports': 'Operational and financial reports across the manufacturing cycle.',
  'Online Orders': 'Capture orders from every channel in one queue.',
  'Order Processing': 'Process, confirm and route orders without spreadsheets.',
  'Amazon': 'Manage Amazon orders alongside every other channel.',
  'Flipkart': 'Manage Flipkart orders alongside every other channel.',
  'Meesho': 'Manage Meesho orders alongside every other channel.',
  'WhatsApp': 'Process orders and updates sent over WhatsApp.',
  'Website Orders': 'Sync orders placed directly on your own website.',
  'Packing & Dispatch': 'Barcode-driven packing and dispatch tracking.',
  'Product Management': 'Maintain your product catalog in one place.',
  'Customer Management': 'Track customer orders and history across channels.',
  'Supplier Management': 'Manage supplier records and purchase history.',
  'Barcode Scanning': 'Scan-driven picking, packing and stock counts.'
};

export function ProductLandingPage({ productId, dashboardTitle, dashboardSubtitle, dashboardStats }: {
  productId: Product['id'];
  dashboardTitle: string;
  dashboardSubtitle: string;
  dashboardStats: { label: string; value: string }[];
}) {
  const product = products.find(p => p.id === productId)!;
  const others = products.filter(p => p.id !== productId);

  return (
    <>
      <header className="relative pt-20 pb-10 overflow-hidden text-center">
        <div className="max-w-wrap mx-auto px-8 relative z-10">
          <Link href="/" className="text-xs font-bold text-fg-soft hover:text-fg">← Back to INSIGNIA</Link>
          <div className="flex justify-center mt-6 mb-5">
            <ProductLogo product={product} size={72} />
          </div>
          <span className={`inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full border ${badgeClass[product.color]}`}>{product.subtitle}</span>
          <h1 className="text-4xl md:text-[64px] max-w-[880px] mx-auto mt-6 mb-6">{product.heroHeadline}</h1>
          <p className="text-xl max-w-[620px] mx-auto mb-10 text-fg-muted">{product.heroDescription}</p>
          <div className="flex gap-4 justify-center mb-16 flex-wrap">
            <Button href="/contact" variant="accent">Book a {product.name} Demo →</Button>
            <Button href="#features" variant="ghost">See Features</Button>
          </div>
          <div className="max-w-[1040px] mx-auto relative">
            <BrowserMockup title={dashboardTitle} subtitle={dashboardSubtitle} stats={dashboardStats} bars={[45, 60, 35, 75, 55, 90]} />
          </div>
        </div>
      </header>

      <section id="features">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className={`text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full border ${badgeClass[product.color]}`}>Features</span>
            <h2 className="text-[42px] mt-5">Everything {product.name} runs on</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 [@media(min-width:1100px)]:grid-cols-3 gap-6">
            {product.features.map(f => (
              <div key={f} className="p-7 bg-surface border border-border rounded-md shadow-sm">
                <div className={`w-2.5 h-2.5 rounded-full mb-4 ${dotClass[product.color]}`} />
                <h4 className="text-[17px] mb-2">{f}</h4>
                <p className="text-sm text-fg-muted">{featureDescriptions[f] ?? `Manage ${f.toLowerCase()} as part of the connected ${product.name} workflow.`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className={`text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full border ${badgeClass[product.color]}`}>Workflow</span>
            <h2 className="text-[42px] mt-5">One connected flow, start to finish</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {product.workflow.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="px-5 py-3 bg-surface2 border border-border rounded-sm text-sm font-bold text-fg">{step}</div>
                {i < product.workflow.length - 1 && <ArrowRight size={18} className="text-fg-soft flex-shrink-0" />}
              </div>
            ))}
          </div>
          {productId === 'order-sathi' && (
            <p className="text-center text-xs text-fg-soft mt-6 max-w-[560px] mx-auto">Marketplace and channel integrations shown above reflect Order Sathi's intended order sources. Availability of a specific channel integration may vary — confirm current coverage during your demo.</p>
          )}
        </div>
      </section>

      <section>
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Explore Other INSIGNIA Products</span>
            <h2 className="text-[36px] mt-5">Built to work alongside {product.name}</h2>
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            {others.map(o => (
              <Link key={o.id} href={o.slug} className={`inline-flex items-center gap-2.5 px-6 py-3.5 bg-surface border border-border rounded-full text-sm font-bold text-fg hover:border-fg-muted transition-colors`}>
                <ProductLogo product={o} size={28} />
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-wrap mx-auto px-8">
          <div className="bg-gradient-to-br from-accent-soft to-accent2-soft border border-border shadow-glow rounded-lg p-10 md:p-20 text-center text-white">
            <h2 className="text-white text-[40px] mb-4.5">Ready to simplify your business with {product.name}?</h2>
            <p className="text-fg-muted text-lg mb-9">See {product.name} configured around how your business actually operates.</p>
            <Button href="/contact" variant="accent">Book a {product.name} Demo →</Button>
          </div>
        </div>
      </section>
    </>
  );
}
