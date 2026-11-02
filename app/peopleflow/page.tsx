import type { Metadata } from 'next';
import { ProductLandingPage } from '@/components/marketing/ProductLandingPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { getProduct } from '@/lib/products';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.insigniatech.in';

export const metadata: Metadata = {
  title: 'PeopleFlow — HRMS & Payroll ERP',
  description:
    'PeopleFlow by INSIGNIA (Jaipur) is an HRMS and payroll ERP: employee records, shifts, attendance, leave management, payroll and payslips in one system. Book a free demo.',
  alternates: { canonical: '/peopleflow' },
  openGraph: {
    title: 'PeopleFlow — HRMS & Payroll ERP',
    description:
      'Employees, attendance, leave and payroll in one HRMS and Payroll ERP. One flow for your whole team.',
    url: '/peopleflow',
  },
};

export default function PeopleFlow() {
  const product = getProduct('peopleflow');

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'PeopleFlow',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'HRMS and payroll ERP covering employee records, shifts, attendance, leave management, payroll and payslips.',
      url: `${siteUrl}/peopleflow`,
      featureList: product.features,
      areaServed: 'IN',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'INSIGNIA', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'PeopleFlow', item: `${siteUrl}/peopleflow` },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((data) => (
        <JsonLd key={String(data['@type'])} data={data} />
      ))}

      <ProductLandingPage
        productId="peopleflow"
        dashboardTitle="HR Dashboard"
        dashboardSubtitle="Live view of headcount, attendance, leave and pending approvals"
        dashboardStats={[
          { label: 'Total Employees', value: '60' },
          { label: 'Present Today', value: '52' },
          { label: 'On Leave', value: '5' },
          { label: 'Pending Approvals', value: '6' },
        ]}
      />
    </>
  );
}
