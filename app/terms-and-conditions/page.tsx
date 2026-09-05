import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions — INSIGNIA',
  description: 'Terms and conditions for using the INSIGNIA website and enquiring about TradeFlow, TransformerFlow and Order Sathi.',
  alternates: { canonical: '/terms-and-conditions' }
};

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: '1. Acceptance of terms',
    body: <p>By accessing or using this website (operated by Insignia Tech, "Insignia", "we", "us"), you agree to these Terms & Conditions. If you do not agree, please do not use this website.</p>
  },
  {
    heading: '2. Website usage',
    body: <p>This website and its content are provided for general informational purposes about Insignia's products — TradeFlow, TransformerFlow and Order Sathi — and to let visitors request demos or get in touch. You agree to use this website only for lawful purposes and not to misuse our forms, WhatsApp channel or on-site chat assistant.</p>
  },
  {
    heading: '3. Product and service information',
    body: <p>Descriptions of TradeFlow, TransformerFlow and Order Sathi on this website are for general informational purposes. Screens, dashboards and figures shown on this website (including any labeled "illustrative" or "sample data") are for demonstration purposes only and do not represent guaranteed results, actual customer data, or a specific outcome for your business.</p>
  },
  {
    heading: '4. Demos, consultations and onboarding',
    body: <p>Booking a demo or consultation through this website does not create a binding service agreement. Specific commercial terms — including pricing, implementation scope, timelines and support levels — are confirmed separately and directly with you before any paid engagement begins.</p>
  },
  {
    heading: '5. Account and service usage',
    body: <p>Where you are provided access to TradeFlow, TransformerFlow or Order Sathi as a customer, your use of that product will be governed by the specific service agreement or order form provided to you at onboarding. In case of any conflict between that agreement and this general website Terms & Conditions page, the specific service agreement will govern.</p>
  },
  {
    heading: '6. Intellectual property',
    body: <p>All content on this website — including text, graphics, logos, product names and design — is the property of Insignia Tech or its licensors and is protected by applicable intellectual property laws. You may not copy, reproduce or distribute this content without our prior written permission.</p>
  },
  {
    heading: '7. Payments and subscriptions',
    body: <p>This website does not process payments directly. Any pricing, billing cycle, subscription term or renewal terms for TradeFlow, TransformerFlow or Order Sathi will be set out separately in your commercial agreement with us at the time of purchase.</p>
  },
  {
    heading: '8. User responsibilities',
    body: <p>You are responsible for providing accurate information when submitting forms or contacting us, and for maintaining the confidentiality of any credentials issued to you if you become a customer of our products.</p>
  },
  {
    heading: '9. Availability',
    body: <p>We aim to keep this website available and up to date but do not guarantee uninterrupted access, and we may update, suspend or modify the website or its content at any time without prior notice.</p>
  },
  {
    heading: '10. Third-party services',
    body: <p>This website may link to or integrate with third-party services, including WhatsApp and analytics providers. We are not responsible for the content, policies or practices of third-party services.</p>
  },
  {
    heading: '11. Disclaimer',
    body: <p>Information on this website is provided "as is" without warranties of any kind, express or implied. We do not guarantee specific business outcomes, revenue increases, cost savings or performance results from using our products, and any figures shown for illustration should not be treated as a projection or promise for your business.</p>
  },
  {
    heading: '12. Limitation of liability',
    body: <p>To the maximum extent permitted by applicable law, Insignia Tech shall not be liable for any indirect, incidental or consequential damages arising from your use of this website. Nothing in this section limits liability that cannot be excluded under applicable Indian law.</p>
  },
  {
    heading: '13. Termination',
    body: <p>We may restrict or terminate your access to this website at our discretion, for example in cases of misuse. Termination of any paid product engagement will be governed by the specific service agreement applicable to you.</p>
  },
  {
    heading: '14. Governing law and jurisdiction',
    body: <p>These Terms & Conditions are governed by the laws of India, and any disputes arising from your use of this website shall be subject to the exclusive jurisdiction of the courts of Jaipur, Rajasthan.</p>
  },
  {
    heading: '15. Contact us',
    body: (
      <p>
        Questions about these Terms & Conditions can be sent to{' '}
        <a href="mailto:Insignia0026@gmail.com" className="text-accent-dark font-semibold hover:underline">Insignia0026@gmail.com</a> or{' '}
        <a href="tel:+916350210426" className="text-accent-dark font-semibold hover:underline">+91 6350210426</a>, or by writing to Orchid-407, Manglam Ananda, Sanganer, Jaipur – 302029, Rajasthan, India.
      </p>
    )
  }
];

export default function TermsAndConditions() {
  return (
    <>
      <header className="pt-20 pb-10 text-center">
        <div className="max-w-wrap mx-auto px-8">
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Terms & Conditions</span>
          <h1 className="text-4xl md:text-[52px] max-w-[700px] mx-auto mt-5">Terms for using this website</h1>
          <p className="text-sm text-fg-soft mt-4">Last updated: September 2026</p>
        </div>
      </header>

      <section className="pt-0 pb-8">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[820px] mx-auto p-6 md:p-7 bg-surface2 border border-border rounded-md text-[14px] text-fg-muted">
            This page is a general Terms & Conditions template for a business website. Specific commercial terms (pricing, subscription length, refunds, SLAs) are not included here and should be confirmed in your individual service agreement. We recommend having this page reviewed by a legal professional before relying on it for binding commercial terms.
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[820px] mx-auto text-[15px] leading-relaxed text-fg-muted">
            {sections.map((s, i) => (
              <div key={s.heading} className={`py-6.5 border-t border-border ${i === sections.length - 1 ? 'border-b' : ''}`}>
                <h3 className="text-[18px] text-fg mb-2.5 font-bold">{s.heading}</h3>
                {s.body}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
