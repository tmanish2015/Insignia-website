import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'accent' | 'ghost';
type Size = 'default' | 'sm';

const base = 'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-150 cursor-pointer border border-transparent';
const sizes: Record<Size, string> = { default: 'px-6 py-3.5 text-[15px]', sm: 'px-5 py-2.5 text-sm' };
const variants: Record<Variant, string> = {
  primary: 'bg-fg text-bg2 hover:bg-white hover:shadow-md hover:-translate-y-px',
  accent: 'bg-gradient-to-br from-accent to-accent2 text-white shadow-glow hover:-translate-y-0.5 hover:shadow-[0_0_80px_-10px_oklch(60%_.18_292_/_.6)]',
  ghost: 'bg-transparent text-fg border-border hover:border-fg-muted hover:bg-surface'
};

interface Props {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', size = 'default', href, children, className = '', ...rest }: Props & AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button className={cls} {...rest}>{children}</button>;
}
