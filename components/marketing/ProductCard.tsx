import Link from 'next/link';
import { ArrowRight, Wrench } from 'lucide-react';
import type { Product } from '@/lib/products';
import { ProductLogo } from './ProductLogo';

const glow: Record<Product['color'], string> = {
  tradeflow: 'hover:shadow-[0_0_80px_-16px_oklch(58%_.24_293_/_.55)] hover:border-tradeflow/50',
  transformerflow: 'hover:shadow-[0_0_80px_-16px_oklch(62%_.21_259_/_.55)] hover:border-transformerflow/50',
  ordersathi: 'hover:shadow-[0_0_80px_-16px_oklch(55%_.26_296_/_.55)] hover:border-ordersathi/50'
};

const ctaColor: Record<Product['color'], string> = {
  tradeflow: 'text-tradeflow',
  transformerflow: 'text-transformerflow',
  ordersathi: 'text-ordersathi'
};

const categoryColor: Record<Product['color'], string> = {
  tradeflow: 'text-tradeflow bg-tradeflow-soft border-tradeflow/40',
  transformerflow: 'text-transformerflow bg-transformerflow-soft border-transformerflow/40',
  ordersathi: 'text-ordersathi bg-ordersathi-soft border-ordersathi/40'
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={product.slug}
      className={`group flex flex-col p-8 bg-surface border border-border rounded-md shadow-sm transition-all duration-300 hover:-translate-y-1.5 ${glow[product.color]}`}
    >
      <div className="mb-6 transition-transform duration-300 group-hover:scale-[1.03] origin-left">
        <ProductLogo product={product} />
      </div>
      <span className={`inline-flex self-start text-[11px] font-bold tracking-wide px-3 py-1 rounded-full border mb-4 ${categoryColor[product.color]}`}>{product.category}</span>
      <p className="text-sm text-fg-muted mb-6">{product.description}</p>

      <ul className="flex flex-col gap-2 mb-6">
        {product.features.slice(0, 6).map(f => (
          <li key={f} className="text-sm text-fg-muted pl-4.5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-border">
            {f}
          </li>
        ))}
      </ul>

      {product.highlight && (
        <div className={`rounded-sm border p-4 mb-6 ${categoryColor[product.color]}`}>
          <div className="flex items-center gap-2 mb-1">
            <Wrench size={14} />
            <span className="text-[13px] font-bold text-fg">{product.highlight.title}</span>
          </div>
          <p className="text-xs text-fg-muted">{product.highlight.description}</p>
        </div>
      )}

      {product.platforms && (
        <div className="rounded-sm border border-border bg-surface2 p-4 mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wide text-fg-soft block mb-2.5">Online Platforms</span>
          <div className="flex flex-wrap gap-1.5">
            {product.platforms.map(p => (
              <span key={p.name} className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${p.status === 'live' ? 'text-green border-green/40 bg-green-soft' : 'text-fg-soft border-border-soft bg-surface'}`}>
                {p.name}{p.status === 'planned' && p.name !== '& More' ? ' · Coming Soon' : ''}
              </span>
            ))}
          </div>
        </div>
      )}

      <span className={`mt-auto inline-flex items-center gap-1.5 text-sm font-bold ${ctaColor[product.color]}`}>
        Explore {product.name}
        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1.5" />
      </span>
    </Link>
  );
}
