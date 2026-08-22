import type { Metadata } from 'next';
import { ProductLandingPage } from '@/components/marketing/ProductLandingPage';

export const metadata: Metadata = {
  title: 'TransformerFlow — Manufacturing ERP',
  description: 'TransformerFlow connects production, BOM, raw material, inventory, purchase, sales, planning, costing and quality in one manufacturing ERP.',
  alternates: { canonical: '/transformerflow' },
  openGraph: {
    title: 'TransformerFlow — Manufacturing ERP',
    description: 'From raw material to finished product — one intelligent manufacturing ERP.',
    url: '/transformerflow'
  }
};

export default function TransformerFlow() {
  return (
    <ProductLandingPage
      productId="transformerflow"
      dashboardTitle="Production Dashboard"
      dashboardSubtitle="Live view of production runs, raw material and costing"
      dashboardStats={[{ label: 'Production Runs (MTD)', value: '86' }, { label: 'Raw Material Value', value: '₹41,20,000' }, { label: 'Finished Goods', value: '₹27,65,000' }, { label: 'Quality Pass Rate', value: '98.2%' }]}
    />
  );
}
