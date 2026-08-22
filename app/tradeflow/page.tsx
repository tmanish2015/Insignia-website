import type { Metadata } from 'next';
import { ProductLandingPage } from '@/components/marketing/ProductLandingPage';

export const metadata: Metadata = {
  title: 'TradeFlow — ERP for Trading & Distribution',
  description: 'TradeFlow centralizes sales, purchases, inventory, customers, suppliers and business operations in one intelligent ERP for trading and distribution businesses.',
  alternates: { canonical: '/tradeflow' },
  openGraph: {
    title: 'TradeFlow — ERP for Trading & Distribution',
    description: 'Centralize sales, purchases, inventory, customers, suppliers and business operations in one intelligent platform.',
    url: '/tradeflow'
  }
};

export default function TradeFlow() {
  return (
    <ProductLandingPage
      productId="tradeflow"
      dashboardTitle="Sales & Inventory Dashboard"
      dashboardSubtitle="Live view of sales, purchases, stock and warehouse activity"
      dashboardStats={[{ label: 'Sales (MTD)', value: '₹18,42,500' }, { label: 'Open Purchase Orders', value: '12' }, { label: 'Stock Value', value: '₹52,10,300' }, { label: 'Active Suppliers', value: '34' }]}
    />
  );
}
