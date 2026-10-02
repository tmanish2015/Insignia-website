import type { Metadata } from 'next';
import { ProductLandingPage } from '@/components/marketing/ProductLandingPage';
import { JsonLd } from '@/components/seo/JsonLd';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.insigniatech.in';

export const metadata: Metadata = {
  title: 'TradeFlow — ERP for Trading & Distribution',
  description:
    'TradeFlow centralizes sales, purchases, inventory, customers, suppliers and business operations in one intelligent ERP for trading and distribution businesses.',
  alternates: { canonical: '/tradeflow' },
  openGraph: {
    title: 'TradeFlow — ERP for Trading & Distribution',
    description:
      'Centralize sales, purchases, inventory, customers, suppliers and business operations in one intelligent platform.',
    url: '/tradeflow',
  },
};

export default function TradeFlow() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'TradeFlow',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'ERP software for trading and distribution businesses covering sales, purchases, inventory, customers, suppliers and warehouse operations.',
      url: `${siteUrl}/tradeflow`,
      publisher: {
        '@type': 'Organization',
        name: 'INSIGNIA',
        url: siteUrl,
      },
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
      <JsonLd data={jsonLd} />

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
      />
    </>
  );
}
