import Link from 'next/link';
import { products } from '@/lib/products';

const cols = [
  { title: 'Products', links: products.map(p => [p.name, p.slug] as [string, string]) },
  { title: 'Solutions', links: [['ERP Software', '/solutions#erp'], ['AI Automation', '/solutions#ai'], ['Digital Marketing', '/solutions#marketing'], ['Business Intelligence', '/solutions#industries']] as [string, string][] },
  { title: 'Industries', links: [['Manufacturing', '/solutions#industries'], ['Trading', '/solutions#industries'], ['Distribution', '/solutions#industries'], ['Retail', '/solutions#industries'], ['MSMEs', '/solutions#industries']] as [string, string][] },
  { title: 'Company', links: [['About', '/about'], ['Contact', '/contact'], ['Privacy Policy', '/privacy-policy'], ['Terms', '/terms-and-conditions']] as [string, string][] }
];

export function Footer() {
  return (
    <footer className="bg-bg2 text-fg-muted pt-20 pb-10 border-t border-border-soft">
      <div className="max-w-wrap mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/brand/insignia-lockup-full.webp" alt="INSIGNIA logo" width={960} height={918} className="h-24 w-auto object-contain" />
            <p className="text-sm mt-4 max-w-[260px] text-[oklch(65%_.008_260)]">AI-powered ERP and business automation for manufacturers, distributors, traders and growing enterprises.</p>
            <p className="text-sm mt-4 max-w-[260px] text-[oklch(65%_.008_260)]">Orchid-407, Manglam Ananda, Sanganer, Jaipur - 302029, Rajasthan, India</p>
            <p className="text-sm mt-2 max-w-[260px] text-[oklch(65%_.008_260)]">Insignia0026@gmail.com · +91 6350210426</p>
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
