import type { Metadata } from 'next';
import { ProductLandingPage } from '@/components/marketing/ProductLandingPage';

export const metadata: Metadata = {
  title: 'Order Sathi — Order & Inventory Management ERP',
  description: 'Order Sathi manages orders, inventory, packing and dispatch across every channel — built for growing MSMEs.',
  alternates: { canonical: '/order-sathi' },
  openGraph: {
    title: 'Order Sathi — Order & Inventory Management ERP',
    description: 'One system to manage every order, every channel and every stock movement.',
    url: '/order-sathi'
  }
};

export default function OrderSathi() {
  return (
    <ProductLandingPage
      productId="order-sathi"
      dashboardTitle="Order Dashboard"
      dashboardSubtitle="Orders, inventory and dispatch across every channel"
      dashboardStats={[{ label: 'Orders Today', value: '248' }, { label: 'Pending Dispatch', value: '19' }, { label: 'Stock Alerts', value: '4' }, { label: 'Channels Connected', value: '5' }]}
    />
  );
}
