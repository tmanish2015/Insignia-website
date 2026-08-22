export interface PlatformStatus {
  name: string;
  status: 'live' | 'planned';
}

export interface Product {
  id: 'tradeflow' | 'transformerflow' | 'order-sathi';
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  color: 'tradeflow' | 'transformerflow' | 'ordersathi';
  logoSrc: string;
  logoWidth: number;
  logoHeight: number;
  features: string[];
  workflow: string[];
  heroHeadline: string;
  heroDescription: string;
  highlight?: { title: string; description: string; details: string[] };
  platforms?: PlatformStatus[];
}

export const products: Product[] = [
  {
    id: 'tradeflow',
    slug: '/tradeflow',
    name: 'TradeFlow',
    subtitle: 'ERP for Trading & Distribution',
    category: 'ERP FOR TRADING & DISTRIBUTION',
    description: 'Manage your entire trading and distribution business from sales to supply chain in one intelligent platform.',
    color: 'tradeflow',
    logoSrc: '/assets/brands/tradeflow-logo.svg',
    logoWidth: 300,
    logoHeight: 64,
    features: ['Sales Management', 'Purchase Management', 'Inventory Management', 'Customer & Supplier Management', 'Warehouse Management', 'Business Reports & Analytics'],
    workflow: ['Purchase Order', 'Warehouse Receipt', 'Inventory', 'Sales Order', 'Dispatch', 'Reports'],
    heroHeadline: 'The Intelligent ERP for Trading & Distribution',
    heroDescription: 'Manage your entire trading and distribution business from sales to supply chain in one intelligent platform.'
  },
  {
    id: 'transformerflow',
    slug: '/transformerflow',
    name: 'TransformerFlow',
    subtitle: 'ERP for Manufacturing & Transformation',
    category: 'ERP FOR MANUFACTURING & TRANSFORMATION',
    description: 'End-to-end manufacturing, production and operations management with complete visibility and control.',
    color: 'transformerflow',
    logoSrc: '/assets/brands/transformerflow-logo.svg',
    logoWidth: 460,
    logoHeight: 64,
    features: ['Production Management', 'Bill of Materials (BOM)', 'Raw Material Management', 'Inventory Management', 'Production Planning', 'Quality Control', 'Costing & Analytics', 'Business Reports'],
    workflow: ['Purchase', 'Raw Material', 'Production', 'Quality', 'Finished Goods', 'Inventory', 'Sales'],
    heroHeadline: 'From Raw Material to Finished Product — One Intelligent Manufacturing ERP',
    heroDescription: 'End-to-end manufacturing, production and operations management with complete visibility and control.',
    highlight: {
      title: 'Machinery Rental Tracking & Management',
      description: 'Track, manage and optimize your machinery rental operations with ease.',
      details: ['Machinery Rental Records', 'Equipment Availability', 'Rental Tracking & Status', 'Renter/Customer Records', 'Rental Period Management', 'Dispatch & Returns', 'Damage & Inspection Reports', 'Rental Invoicing & Reports']
    }
  },
  {
    id: 'order-sathi',
    slug: '/order-sathi',
    name: 'Order Sathi',
    subtitle: 'Smart Order & Inventory Management',
    category: 'SMART ORDER & INVENTORY MANAGEMENT',
    description: 'Manage every online order, every channel and every stock movement from one powerful system.',
    color: 'ordersathi',
    logoSrc: '/assets/brands/order-sathi-logo.svg',
    logoWidth: 320,
    logoHeight: 64,
    features: ['Online Order Management', 'Multi-Channel Order Management', 'Inventory Management', 'Order Processing', 'Packing & Dispatch', 'Barcode Scanning', 'Supplier & Purchase Management', 'Business Reports'],
    workflow: ['Order Processing', 'Inventory', 'Packing', 'Dispatch', 'Reports'],
    heroHeadline: 'One System. Every Order. Every Channel.',
    heroDescription: 'Manage every online order, every channel and every stock movement from one powerful system.',
    platforms: [
      { name: 'Amazon', status: 'live' },
      { name: 'Flipkart', status: 'planned' },
      { name: 'Meesho', status: 'planned' },
      { name: 'Website', status: 'planned' },
      { name: 'WhatsApp', status: 'planned' },
      { name: '& More', status: 'planned' }
    ]
  }
];

export function getProduct(id: Product['id']) {
  return products.find(p => p.id === id)!;
}
