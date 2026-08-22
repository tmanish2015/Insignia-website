'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { products } from '@/lib/products';
import { ProductLogo } from '@/components/marketing/ProductLogo';

const solutionsLinks = [
  ['ERP Software', '/solutions#erp'],
  ['AI Automation', '/solutions#ai'],
  ['Digital Marketing', '/solutions#marketing'],
  ['Business Intelligence', '/solutions#industries']
];

const industryLinks = [
  ['Manufacturing', '/solutions#industries'],
  ['Trading', '/solutions#industries'],
  ['Distribution', '/solutions#industries'],
  ['Retail', '/solutions#industries'],
  ['MSMEs', '/solutions#industries']
];

const simpleLinks = [
  ['Pricing', '/pricing'],
  ['About', '/contact'],
  ['Contact', '/contact']
];

function Dropdown({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={`text-[15px] font-semibold ${open ? 'text-fg' : 'text-fg-muted'} hover:text-fg`}>{label}</button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
          <div className="bg-surface border border-border rounded-md shadow-md p-2 min-w-[220px]">{children}</div>
        </div>
      )}
    </div>
  );
}

export function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 border-b border-border-soft bg-bg/[.78] backdrop-blur-2xl relative before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-accent2 before:to-accent">
      <div className="max-w-wrap mx-auto px-8 h-[76px] flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-fg">INSIGNIA</Link>
        <div className="hidden [@media(min-width:960px)]:flex items-center gap-9">
          <Dropdown label="Products">
            {products.map(p => (
              <Link key={p.id} href={p.slug} className="flex items-center px-3.5 py-3 rounded-sm hover:bg-surface2">
                <ProductLogo product={p} heightClass="h-4" />
              </Link>
            ))}
          </Dropdown>
          <Dropdown label="Solutions">
            {solutionsLinks.map(([label, href]) => (
              <Link key={label} href={href} className="block px-3.5 py-2.5 rounded-sm text-[14px] font-semibold text-fg-muted hover:text-fg hover:bg-surface2">{label}</Link>
            ))}
          </Dropdown>
          <Dropdown label="Industries">
            {industryLinks.map(([label, href]) => (
              <Link key={label} href={href} className="block px-3.5 py-2.5 rounded-sm text-[14px] font-semibold text-fg-muted hover:text-fg hover:bg-surface2">{label}</Link>
            ))}
          </Dropdown>
          {simpleLinks.map(([label, href]) => (
            <Link key={label} href={href} className={`text-[15px] font-semibold ${active === href ? 'text-fg' : 'text-fg-muted'} hover:text-fg`}>{label}</Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button href="/contact" variant="accent" size="sm">Book a Demo →</Button>
          <button aria-label="Menu" onClick={() => setOpen(o => !o)} className="[@media(min-width:960px)]:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer">
            <span className={`block w-[22px] h-0.5 bg-fg rounded transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-[22px] h-0.5 bg-fg rounded transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-[22px] h-0.5 bg-fg rounded transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="[@media(min-width:960px)]:hidden flex flex-col gap-1 px-8 py-6 border-b border-border bg-bg shadow-md max-h-[80vh] overflow-y-auto">
          <button onClick={() => setMobileSection(s => s === 'products' ? null : 'products')} className="flex items-center justify-between text-[15px] font-semibold text-fg-muted hover:text-fg py-2.5">
            Products <span>{mobileSection === 'products' ? '−' : '+'}</span>
          </button>
          {mobileSection === 'products' && (
            <div className="flex flex-col gap-1 pl-3 mb-1">
              {products.map(p => (
                <Link key={p.id} href={p.slug} className="py-2.5" onClick={() => setOpen(false)}>
                  <ProductLogo product={p} heightClass="h-4" />
                </Link>
              ))}
            </div>
          )}
          <button onClick={() => setMobileSection(s => s === 'solutions' ? null : 'solutions')} className="flex items-center justify-between text-[15px] font-semibold text-fg-muted hover:text-fg py-2.5">
            Solutions <span>{mobileSection === 'solutions' ? '−' : '+'}</span>
          </button>
          {mobileSection === 'solutions' && (
            <div className="flex flex-col gap-1 pl-3 mb-1">
              {solutionsLinks.map(([label, href]) => (
                <Link key={label} href={href} className="text-sm font-semibold text-fg-muted hover:text-fg py-2" onClick={() => setOpen(false)}>{label}</Link>
              ))}
            </div>
          )}
          <button onClick={() => setMobileSection(s => s === 'industries' ? null : 'industries')} className="flex items-center justify-between text-[15px] font-semibold text-fg-muted hover:text-fg py-2.5">
            Industries <span>{mobileSection === 'industries' ? '−' : '+'}</span>
          </button>
          {mobileSection === 'industries' && (
            <div className="flex flex-col gap-1 pl-3 mb-1">
              {industryLinks.map(([label, href]) => (
                <Link key={label} href={href} className="text-sm font-semibold text-fg-muted hover:text-fg py-2" onClick={() => setOpen(false)}>{label}</Link>
              ))}
            </div>
          )}
          {simpleLinks.map(([label, href]) => (
            <Link key={label} href={href} className="text-[15px] font-semibold text-fg-muted hover:text-fg py-2.5" onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
