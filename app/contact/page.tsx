import { ContactForm } from '@/components/marketing/ContactForm';

const info = [
  ['Email', 'hello@insignia.ai', 'For general questions and partnership enquiries.'],
  ['Phone', '+91 00000 00000', 'Mon–Sat, 9:30am–7pm IST.'],
  ['Offices', 'India · UAE · USA', 'Serving manufacturers, distributors and enterprises globally.']
];

export default function Contact() {
  return (
    <>
      <header className="pt-20 pb-14 text-center">
        <div className="max-w-wrap mx-auto px-8">
          <span className="text-xs font-bold uppercase tracking-wide text-accent-dark bg-accent-soft px-4 py-1.5 rounded-full border border-accent/40">Contact</span>
          <h1 className="text-4xl md:text-[56px] max-w-[720px] mx-auto mt-5">Let's build your growth engine</h1>
          <p className="text-lg max-w-[560px] mx-auto mt-5 text-fg-muted">Tell us about your business and we'll map out how ERP, AI and marketing fit together — no obligation, no generic sales deck.</p>
        </div>
      </header>

      <section className="pt-0">
        <div className="max-w-wrap mx-auto px-8">
          <div className="grid grid-cols-1 [@media(min-width:960px)]:grid-cols-[1fr_1.3fr] gap-14 items-start">
            <div>
              {info.map(([tag, title, desc]) => (
                <div key={tag} className="p-9 mb-5 bg-surface border border-border rounded-md shadow-sm">
                  <span className="text-accent-dark text-xs font-bold uppercase tracking-wide">{tag}</span>
                  <h4 className="text-[19px] my-1.5">{title}</h4>
                  <p className="text-[15px] text-fg-muted">{desc}</p>
                </div>
              ))}
            </div>
            <div className="p-11 bg-surface border border-border rounded-md shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
