'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const links = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/solutions#industries', label: 'Industries' },
  { href: '/solutions#erp', label: 'ERP' },
  { href: '/solutions#ai', label: 'AI' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' }
];

export function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-border-soft bg-bg/[.78] backdrop-blur-2xl relative before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-accent2 before:to-accent">
      <div className="max-w-wrap mx-auto px-8 h-[76px] flex items-center justify-between">
        <div className="text-xl font-extrabold tracking-tight text-fg">INSIGNIA</div>
        <div className="hidden [@media(min-width:960px)]:flex items-center gap-9">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`text-[15px] font-semibold ${active === l.href ? 'text-fg' : 'text-fg-muted'} hover:text-fg`}>{l.label}</Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button href="/contact" variant="accent" size="sm">Book Demo</Button>
          <button aria-label="Menu" onClick={() => setOpen(o => !o)} className="[@media(min-width:960px)]:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer">
            <span className={`block w-[22px] h-0.5 bg-fg rounded transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-[22px] h-0.5 bg-fg rounded transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-[22px] h-0.5 bg-fg rounded transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="[@media(min-width:960px)]:hidden flex flex-col gap-4 px-8 py-6 border-b border-border bg-bg shadow-md">
          {links.map(l => <Link key={l.href} href={l.href} className="text-[15px] font-semibold text-fg-muted hover:text-fg" onClick={() => setOpen(false)}>{l.label}</Link>)}
        </div>
      )}
    </nav>
  );
}
