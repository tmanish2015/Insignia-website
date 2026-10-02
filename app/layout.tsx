import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { RecaptchaProvider } from '@/components/providers/RecaptchaProvider';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppWidget } from '@/components/chat/WhatsAppWidget';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.insigniatech.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'INSIGNIA — Transforming Businesses with AI',
    template: '%s | INSIGNIA',
  },
  description:
    'One platform for ERP, AI Automation, and Digital Marketing. INSIGNIA helps manufacturers, distributors and enterprises grow revenue with intelligent software.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: 'INSIGNIA',
    type: 'website',
    url: siteUrl,
    title: 'INSIGNIA — Transforming Businesses with AI',
    description:
      'ERP, AI Automation, and Digital Marketing solutions for growing businesses.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const body = (
    <>
      <Nav />
      {children}
      <Footer />
      <WhatsAppWidget />
    </>
  );
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-bg text-fg overflow-x-hidden">
        {recaptchaSiteKey ? (
          <RecaptchaProvider siteKey={recaptchaSiteKey}>{body}</RecaptchaProvider>
        ) : body}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}</Script>
          </>
        )}
        {pixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`}</Script>
        )}
        {clarityId && (
          <Script id="ms-clarity" strategy="afterInteractive">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${clarityId}");`}</Script>
        )}
      </body>
    </html>
  );
}
