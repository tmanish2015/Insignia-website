export interface Product {
  id: 'tradeflow' | 'transformerflow' | 'order-sathi';
  slug: string;
  name: string;
  subtitle: string;
  shortDescription: string;
  color: 'tradeflow' | 'transformerflow' | 'ordersathi';
  logoSrc?: string;
  features: string[];
  workflow: string[];
  heroHeadline: string;
  heroDescription: string;
}

export const products: Product[] = [
  {
    id: 'tradeflow',
    slug: '/tradeflow',
    name: 'TradeFlow',
    subtitle: 'ERP for Trading & Distribution',
    shortDescription: 'Centralize sales, purchases, inventory, customers, suppliers and business operations in one intelligent platform.',
    color: 'tradeflow',
    logoSrc: '/logos/tradeflow-mark.svg',
    features: ['Sales Management', 'Purchase Management', 'Inventory', 'Customers', 'Suppliers', 'Warehouse', 'CRM', 'Business Reports'],
    workflow: ['Purchase Order', 'Warehouse Receipt', 'Inventory', 'Sales Order', 'Dispatch', 'Reports'],
    heroHeadline: 'The Intelligent ERP for Trading & Distribution',
    heroDescription: 'Centralize sales, purchases, inventory, customers, suppliers and business operations in one intelligent platform.'
  },
  {
    id: 'transformerflow',
    slug: '/transformerflow',
    name: 'TransformerFlow',
    subtitle: 'ERP for Manufacturing & Transformation',
    shortDescription: 'Production, BOM, raw material, inventory, purchase, sales, planning, costing and quality — unified for manufacturers.',
    color: 'transformerflow',
    logoSrc: '/logos/transformerflow-mark.svg',
    features: ['Production', 'BOM', 'Raw Material', 'Inventory', 'Purchase', 'Sales', 'Production Planning', 'Costing', 'Quality', 'Reports'],
    workflow: ['Purchase', 'Raw Material', 'Production', 'Quality', 'Finished Goods', 'Inventory', 'Sales'],
    heroHeadline: 'From Raw Material to Finished Product — One Intelligent Manufacturing ERP',
    heroDescription: 'Plan production, track BOM and raw material, control costing and quality, and manage sales — all in one connected system.'
  },
  {
    id: 'order-sathi',
    slug: '/order-sathi',
    name: 'Order Sathi',
    subtitle: 'Smart Order & Inventory Management',
    shortDescription: 'Manage orders, inventory and dispatch across every channel — built for growing MSMEs.',
    color: 'ordersathi',
    logoSrc: '/logos/order-sathi-mark.svg',
    features: ['Online Orders', 'Inventory', 'Order Processing', 'Amazon', 'Flipkart', 'Meesho', 'WhatsApp', 'Website Orders', 'Packing & Dispatch', 'Reports'],
    workflow: ['Order Processing', 'Inventory', 'Packing', 'Dispatch', 'Reports'],
    heroHeadline: 'One System to Manage Every Order, Every Channel and Every Stock Movement',
    heroDescription: 'Order management and inventory control built for MSMEs selling across marketplaces, WhatsApp and their own website.'
  }
];

export function getProduct(id: Product['id']) {
  return products.find(p => p.id === id)!;
}
