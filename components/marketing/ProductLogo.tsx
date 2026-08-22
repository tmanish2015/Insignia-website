import type { Product } from '@/lib/products';

export function ProductLogo({ product, heightClass = 'h-8 [@media(min-width:768px)]:h-11' }: { product: Product; heightClass?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={product.logoSrc}
      alt={`${product.name} ERP logo`}
      width={product.logoWidth}
      height={product.logoHeight}
      className={`${heightClass} w-auto object-contain`}
    />
  );
}
