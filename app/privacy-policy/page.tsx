import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — INSIGNIA',
  description: 'How INSIGNIA TECH collects, uses and protects information submitted through this website and our WhatsApp and contact channels.',
  alternates: { canonical: '/privacy-policy' }
};

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: '1. Who we are',
    body: <p>This Privacy Policy applies to the website operated by Insignia Tech ("Insignia", "we", "us", "our"), based in Jaipur, Rajasthan, India, and covers TradeFlow, TransformerFlow, Order Sathi and any related pages, forms and WhatsApp conversations linked from this site.</p>
  },
  {
    heading: '2. Information we collect',
    body: (
      <>
        <p>We collect information you provide directly, such as:</p>
        <ul className="list-disc pl-6 space-y-1.5 mt-2">
          <li>Your name, company name, work email and mobile/WhatsApp number, submitted through our contact and demo-booking forms.</li>
          <li>Details you share about your industry, business size, current tools and requirements, where you choose to provide them.</li>
          <li>Messages you send us over WhatsApp or through the on-site chat assistant.</li>
        </ul>
        <p className="mt-2">We also collect limited technical and usage data automatically when you browse this website, such as pages visited, device/browser type and general usage patterns, through analytics tools described below.</p>
      </>
    )
  },
  {
    heading: '3. Cookies and analytics',
    body: <p>This website may use cookies and similar technologies, along with third-party analytics services (which may include tools such as Google Analytics and Microsoft Clarity), to understand how visitors use the site and to improve it. You can control or disable cookies through your browser settings; doing so may affect some site functionality.</p>
  },
  {
    heading: '4. WhatsApp and communication enquiries',
    body: <p>If you contact us via WhatsApp or submit a demo/consultation request, we use the details you provide (such as your mobile number and enquiry details) to respond to you, send requested confirmations, and follow up about the products or services you asked about. We do not use your WhatsApp number for unrelated marketing without your consent.</p>
  },
  {
    heading: '5. How we use your information',
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-1.5 mt-2">
          <li>Respond to enquiries and schedule demos or consultations.</li>
          <li>Provide, operate and improve our website and products.</li>
          <li>Send confirmations and updates directly related to your enquiry.</li>
          <li>Understand aggregate usage of our website to improve content and performance.</li>
          <li>Meet legal, security and fraud-prevention obligations.</li>
        </ul>
      </>
    )
  },
  {
    heading: '6. How we share information',
    body: <p>We do not sell your personal information. We may share information with service providers who help us operate this website, our forms, WhatsApp messaging and analytics (for example, hosting, email delivery, messaging and analytics providers), solely to help us provide our services, and only to the extent necessary for that purpose. We may also disclose information if required by law or to protect our legal rights.</p>
  },
  {
    heading: '7. Data security',
    body: <p>We take reasonable technical and organizational measures to protect the information you share with us. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
  },
  {
    heading: '8. Data retention',
    body: <p>We retain personal information for as long as reasonably necessary to respond to your enquiry, provide our services, and comply with our legal and accounting obligations, after which it is deleted or anonymized.</p>
  },
  {
    heading: '9. Your rights',
    body: <p>You may request access to, correction of, or deletion of the personal information you have shared with us by contacting us using the details below. We will respond to reasonable requests in accordance with applicable law.</p>
  },
  {
    heading: '10. Third-party links and services',
    body: <p>Our website may link to third-party services (such as WhatsApp) that have their own privacy practices. This Privacy Policy does not cover those third-party services, and we encourage you to review their respective privacy policies.</p>
  },
  {
    heading: "11. Children's privacy",
    body: <p>Our website and services are intended for business use and are not directed at children. We do not knowingly collect personal information from children.</p>
  },
  {
    heading: '12. Changes to this policy',
    body: <p>We may update this Privacy Policy from time to time to reflect changes to our practices or for legal reasons. The "Last updated" date below reflects the most recent revision.</p>
  },
  {
    heading: '13. Contact us',
    body: (
      <p>
        If you have questions about this Privacy Policy or how we handle your information, contact us at{' '}
        <a href="mailto:Insignia0026@gmail.com" className="text-accent-dark font-semibold hover:underline">Insignia0026@gmail.com</a> or{' '}
        <a href="tel:+916350210426" className="text-accent-dark font-semibold hover:underline">+91 6350210426</a>, or write to us at Orchid-407, Manglam Ananda, Sanganer, Jaipur – 302029, Rajasthan, India.
      </p>
    )
  }
];

export default function PrivacyPolicy() {
  return (
    <>
      <header className="pt-20 pb-10 text-center">
        <div className="max-w-wrap mx-auto px-8">
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Privacy Policy</span>
          <h1 className="text-4xl md:text-[52px] max-w-[700px] mx-auto mt-5">How we handle your information</h1>
          <p className="text-sm text-fg-soft mt-4">Last updated: September 2026</p>
        </div>
      </header>

      <section className="pt-0 pb-8">
        <div className="max-w-wrap mx-auto px-8">
          <div className="max-w-[820px] mx-auto p-6 md:p-7 bg-surface2 border border-border rounded-md text-[14px] text-fg-muted">
            This page is a general privacy policy template for a business website. It is not a substitute for legal advice — we recommend having it reviewed by a legal professional and updating it if Insignia Tech's data practices, tools or business structure change.
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
