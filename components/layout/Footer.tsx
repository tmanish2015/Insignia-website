import Link from 'next/link';

const cols = [
  { title: 'Company', links: [['About', '/contact'], ['Contact', '/contact'], ['Careers', '/contact']] },
  { title: 'Solutions', links: [['ERP Platform', '/solutions#erp'], ['AI Automation', '/solutions#ai'], ['Digital Marketing', '/solutions#marketing']] },
  { title: 'Resources', links: [['Pricing', '/pricing'], ['Industries', '/solutions#industries']] },
  { title: 'Legal', links: [['Privacy', '/contact'], ['Terms', '/contact']] }
];

export function Footer() {
  return (
    <footer className="bg-bg2 text-fg-muted pt-20 pb-10 border-t border-border-soft">
      <div className="max-w-wrap mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div>
            <div className="text-xl font-extrabold text-white">INSIGNIA</div>
            <p className="text-sm mt-4 max-w-[260px] text-[oklch(65%_.008_260)]">Transforming businesses with AI, ERP and automation.</p>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <h4 className="text-white text-sm font-bold mb-4">{c.title}</h4>
              <ul className="flex flex-col gap-3 text-sm">
                {c.links.map(([label, href]) => <li key={label}><Link href={href} className="hover:text-white">{label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-7 border-t border-border-soft flex justify-between text-[13px] text-fg-soft">
          <span>© 2026 Insignia. All rights reserved.</span>
          <span>LinkedIn · X · YouTube</span>
        </div>
      </div>
    </footer>
  );
}
