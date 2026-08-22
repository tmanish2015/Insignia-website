import type { Product } from '@/lib/products';

const initials: Record<Product['id'], string> = {
  tradeflow: 'TF',
  transformerflow: 'XF',
  'order-sathi': 'OS'
};

const colorClass: Record<Product['color'], string> = {
  tradeflow: 'bg-tradeflow-soft text-tradeflow border-tradeflow/40',
  transformerflow: 'bg-transformerflow-soft text-transformerflow border-transformerflow/40',
  ordersathi: 'bg-ordersathi-soft text-ordersathi border-ordersathi/40'
};

export function ProductLogo({ product, size = 56 }: { product: Product; size?: number }) {
  if (product.logoSrc) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-md border p-2 ${colorClass[product.color]}`}
        style={{ width: size, height: size }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.logoSrc} alt={`${product.name} logo`} width={size - 16} height={size - 16} />
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center justify-center rounded-md border font-black tracking-tight ${colorClass[product.color]}`}
      style={{ width: size, height: size, fontSize: size * 0.32 }}
      aria-label={`${product.name} logo placeholder`}
    >
      {initials[product.id]}
    </span>
  );
}
