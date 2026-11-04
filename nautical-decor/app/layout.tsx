import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { metadataBase: new URL('https://nautical.insigniatech.in'), title: { default: 'Insignia Nautical & Heritage Décor | Maritime Collectibles', template: '%s | Insignia Nautical Décor' }, description: 'Explore maritime-inspired décor, vintage nautical instruments and heritage statement pieces for retailers, hospitality spaces and collectors. Wholesale and export enquiries welcome.', openGraph: { title: 'Insignia Nautical & Heritage Décor', description: 'A considered collection of maritime-inspired décor and heritage pieces.', type: 'website' } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
