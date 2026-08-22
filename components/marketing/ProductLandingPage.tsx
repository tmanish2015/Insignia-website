import Link from 'next/link';
import { Check, ArrowRight, Wrench } from 'lucide-react';
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
  'Inventory Management': 'Stock, warehouses, movements, reorder levels and product availability, live.',
  'Customer & Supplier Management': 'Complete customer and supplier records, credit terms and transaction history.',
  'Warehouse Management': 'Multi-location stock visibility and transfers.',
  'Business Reports & Analytics': 'Sales, purchase, inventory and financial reports, always current.',
  'Production Management': 'Plan and track production runs from a single workspace.',
  'Bill of Materials (BOM)': 'Bill of materials management for accurate raw material planning.',
  'Raw Material Management': 'Track raw material stock and consumption against production.',
  'Production Planning': 'Schedule production runs against demand and capacity.',
  'Quality Control': 'Quality checks built into the production workflow.',
  'Costing & Analytics': 'Multi-stage production costing tied to actual material and labor.',
  'Business Reports': 'Operational and financial reports across the business.',
  'Online Order Management': 'Capture orders from every connected channel in one queue.',
  'Multi-Channel Order Management': 'Manage orders across marketplaces, WhatsApp and your website from one screen.',
  'Order Processing': 'Process, confirm and route orders without spreadsheets.',
  'Packing & Dispatch': 'Barcode-driven packing and dispatch tracking.',
  'Barcode Scanning': 'Scan-driven picking, packing and stock counts.',
  'Supplier & Purchase Management': 'Manage supplier records and purchase history.'
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
          <div className="flex justify-center mt-8 mb-6">
            <ProductLogo product={product} heightClass="h-11 [@media(min-width:768px)]:h-14" />
          </div>
          <span className={`inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full border ${badgeClass[product.color]}`}>{product.category}</span>
          <h1 className="text-4xl md:text-[64px] max-w-[880px] mx-auto mt-6 mb-6">{product.heroHeadline}</h1>
          <p className="text-xl max-w-[620px] mx-auto mb-10 text-fg-muted">{product.heroDescription}</p>
          <div className="flex gap-4 justify-center mb-16 flex-wrap">
            <Button href="/contact" variant="accent">Book {/[aeiou]/i.test(product.name[0]) ? 'an' : 'a'} {product.name} Demo →</Button>
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

      {product.highlight && (
        <section className="bg-surface">
          <div className="max-w-wrap mx-auto px-8">
            <div className="max-w-[900px] mx-auto p-9 md:p-12 bg-surface2 border border-transformerflow/30 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-11 h-11 rounded-md bg-transformerflow-soft border border-transformerflow/40 flex items-center justify-center text-transformerflow flex-shrink-0"><Wrench size={20} /></span>
                <h3 className="text-2xl">{product.highlight.title}</h3>
              </div>
              <p className="text-fg-muted mb-6">{product.highlight.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.highlight.details.map(d => (
                  <div key={d} className="flex items-center gap-2.5 text-sm font-semibold text-fg">
                    <span className="w-5 h-5 rounded-full bg-green-soft text-green flex items-center justify-center flex-shrink-0"><Check size={12} /></span>
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {product.platforms && (
        <section className="bg-surface">
          <div className="max-w-wrap mx-auto px-8">
            <div className="max-w-[640px] mx-auto mb-12 text-center">
              <span className={`text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full border ${badgeClass[product.color]}`}>Multi-Channel Online Order Management</span>
              <h2 className="text-[38px] mt-5">One inbox for every sales channel</h2>
              <p className="mt-4 text-lg text-fg-muted">Live channels sync orders automatically. Channels marked "Coming Soon" are on the roadmap and not yet connected.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-[720px] mx-auto">
              {product.platforms.map(p => (
                <span key={p.name} className={`text-sm font-bold px-5 py-3 rounded-full border ${p.status === 'live' ? 'text-green border-green/40 bg-green-soft' : 'text-fg-soft border-border-soft bg-surface2'}`}>
                  {p.name}
                  <span className="ml-2 text-[11px] font-bold uppercase tracking-wide opacity-80">{p.status === 'live' ? 'Live' : p.name === '& More' ? 'Planned' : 'Coming Soon'}</span>
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={product.platforms ? '' : 'bg-surface'}>
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
        </div>
      </section>

      <section>
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[640px] mx-auto mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Explore Other INSIGNIA Products</span>
            <h2 className="text-[36px] mt-5">Built to work alongside {product.name}</h2>
          </div>
          <div className="flex justify-center gap-4 flex-wrap items-center">
            {others.map(o => (
              <Link key={o.id} href={o.slug} className="inline-flex items-center px-6 py-4 bg-surface border border-border rounded-md hover:border-fg-muted transition-colors">
                <ProductLogo product={o} heightClass="h-6" />
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
            <Button href="/contact" variant="accent">Book {/[aeiou]/i.test(product.name[0]) ? 'an' : 'a'} {product.name} Demo →</Button>
          </div>
        </div>
      </section>
    </>
  );
}
