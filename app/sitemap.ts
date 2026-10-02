import type { MetadataRoute } from 'next';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.insigniatech.in';

const routes = [
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/solutions',
  '/privacy-policy',
  '/terms-and-conditions',
  '/tradeflow',
  '/transformerflow',
  '/order-sathi',
  '/products/tradeflow-erp',
  '/products/fabflow-erp',
  '/products/ai-automation',
  '/products/digital-marketing',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority:
      path === '/'
        ? 1
        : path === '/tradeflow'
          ? 0.95
          : 0.8,
  }));
}
