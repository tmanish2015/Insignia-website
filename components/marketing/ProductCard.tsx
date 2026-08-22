import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={product.slug}
      className={`group block p-8 bg-surface border border-border rounded-md shadow-sm transition-all duration-300 hover:-translate-y-1.5 ${glow[product.color]}`}
    >
      <ProductLogo product={product} />
      <h3 className="text-[22px] mt-5 mb-1">{product.name}</h3>
      <p className={`text-sm font-bold mb-4 ${ctaColor[product.color]}`}>{product.subtitle}</p>
      <ul className="flex flex-col gap-2 mb-6">
        {product.features.slice(0, 6).map(f => (
          <li key={f} className="text-sm text-fg-muted pl-4.5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-border">
            {f}
          </li>
        ))}
      </ul>
      <span className={`inline-flex items-center gap-1.5 text-sm font-bold ${ctaColor[product.color]}`}>
        Explore {product.name}
        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1.5" />
      </span>
    </Link>
  );
}
