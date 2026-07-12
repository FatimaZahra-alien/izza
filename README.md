# Izza Nail Studio — Landing Page

A single-page marketing site built with Next.js 15 (App Router), TypeScript, and Tailwind CSS 4.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> Note: `next/font/google` downloads Caveat and Poppins from Google Fonts at build time, so an internet
> connection is required for `npm run dev` / `npm run build` to succeed.

## Project structure

```
app/
  layout.tsx            Root layout, loads Caveat (script) + Poppins (sans) fonts
  globals.css           Tailwind 4 `@theme` tokens for brand colors, fonts, arch-mask utility
  page.tsx              Assembles all sections
  components/
    Logo.tsx             Script "izza" wordmark + "NAIL STUDIO" caps
    PillButton.tsx        Reusable rounded sage-green CTA button with chevron
    TopBanner.tsx          Full-width blush strip with centered logo
    Navbar.tsx              Sticky nav with links + mobile menu
    Hero.tsx                 Two-column hero with arch-masked photo
    FeatureSection.tsx        Reusable circular-photo + text block (Nail Art / About Us / Services)
    LocationSection.tsx        Map + address + parking note on deep pink background
    Footer.tsx                  Sage-green footer with nav, contact, address, socials
```

## Customizing

- **Colors & fonts**: edit the `@theme` block in `app/globals.css`.
- **Images**: every photo currently points to `picsum.photos` placeholders (configured in
  `next.config.ts` under `images.remotePatterns`). Swap the `src` props in `app/page.tsx` and
  `Hero.tsx` for real salon photography, and add your real domain to `remotePatterns`.
- **Map**: `LocationSection.tsx` embeds a generic Google Maps search query. Replace the `src` on
  the `<iframe>` with your salon's actual Google Maps embed URL and update the address text.
- **Copy**: all section copy lives inline in `page.tsx` and the component files — update freely.