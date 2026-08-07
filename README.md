# Insignia Website — Production (Next.js)

Production rebuild of the Insignia marketing site: Next.js 15 (App Router) + TypeScript + Tailwind CSS + Supabase, deployable to Vercel.

## Setup

1. `cd production && npm install`
2. Create a Supabase project, run `supabase/schema.sql` in its SQL editor.
3. Copy `.env.example` to `.env.local` and fill in all values (Supabase keys, Resend, reCAPTCHA, WhatsApp Business API, analytics IDs).
4. `npm run dev` to run locally at http://localhost:3000.

## Deploy to Vercel

1. Push this `production/` folder's contents to the root of a GitHub repo (or set it as the Vercel project's root directory if kept as a subfolder).
2. In Vercel: Add New → Project → Import the repo.
3. Add all env vars from `.env.example` in Vercel → Project Settings → Environment Variables.
4. Deploy. Every push to `main` redeploys automatically.
5. Once live, register `https://<your-domain>/api/whatsapp/webhook` in the Meta App dashboard (WhatsApp Business API webhook), using `WHATSAPP_WEBHOOK_VERIFY_TOKEN`.

## What's implemented

- All 4 pages (Home, Solutions, Pricing, Contact) rebuilt as React/Tailwind components matching the original design tokens (colors, radii, shadows, type scale) from the reference HTML.
- Interactive Industries tab showcase, animated stat counters, WhatsApp-style chat widget — all as client components.
- `/api/contact`, `/api/demo-booking`: validate + reCAPTCHA-verify + insert into Supabase + send confirmation/admin emails via Resend.
- `/api/whatsapp/webhook`: Meta WhatsApp Business API verification + inbound message handling, using the same `lib/chatReplyEngine.ts` as the web widget (swap this one function for an LLM later, no other changes needed).
- Supabase schema with RLS: `enquiries`, `demo_bookings`, `newsletter_subscribers`, `whatsapp_conversations`, `admin_users` — structured for a future customer portal/admin dashboard without migration.
- GA4 / Meta Pixel / Microsoft Clarity loaded conditionally via `next/script` when their env vars are set.

## Not yet wired (needs your credentials/accounts)

- Actual Supabase project + credentials.
- Actual Resend account + verified sending domain.
- Actual Meta WhatsApp Business API app + phone number.
- Actual Google reCAPTCHA v3 site/secret keys.
- Google Search Console verification, OG share images per page, structured data (FAQPage/Organization schema) — see the handoff README's Section 12 (SEO Specification) for the full list.

## Design fidelity

Visual styling is translated from the original `reference/styles.css` design tokens into `tailwind.config.ts`. Some fine layout details (exact icon-tile glyphs, founder photo section) are simplified — swap in real photography and a full icon library (`lucide-react`, already a dependency) as assets become available.
