import type { ReactNode } from "react";
import Logo from "./Logo";
import Kicker from "./Kicker";
import Divider from "./Divider";

const INSTAGRAM_URL =
  "https://www.instagram.com/itx_izza78?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const FACEBOOK_URL = "https://facebook.com/izzanailstudio"; // TODO: replace with the real page URL

const exploreLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Nail Art", href: "#nail-art" },
  { label: "About Us", href: "/about" },
];

const studioLinks = [
  { label: "Products", href: "#products" },
  { label: "Covid-19", href: "#covid-19" },
  { label: "Booking Policies", href: "#booking-policies" },
  { label: "Reviews", href: "#reviews" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col items-start gap-4 text-left">
      <Kicker className="text-cream/60">{title}</Kicker>
      <ul className="flex flex-col gap-3 font-sans text-sm text-cream/85">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="transition-colors hover:text-clay">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/25 text-cream transition-all duration-200 hover:border-clay hover:bg-clay hover:text-cream"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-sage-deep text-cream">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16 md:py-24">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:gap-8">
          {/* Brand */}
          <div className="col-span-2 flex flex-col items-center gap-5 text-center md:col-span-1 md:items-start md:text-left">
            <Logo size="sm" light />
            <p className="max-w-[15rem] font-display text-base italic leading-snug text-cream/80 sm:max-w-xs sm:text-lg">
              A considered nail studio, unhurried by design.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href={FACEBOOK_URL} label="Izza Nail Studio on Facebook">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={INSTAGRAM_URL} label="Izza Nail Studio on Instagram">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.7.5 1.4.5 2.5.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.5a5 5 0 0 1-1.2 1.8c-.6.6-1.1.9-1.8 1.2-.7.3-1.4.5-2.5.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5a5 5 0 0 1-1.8-1.2 5 5 0 0 1-1.2-1.8c-.3-.7-.5-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.7-.3 1.4-.5 2.5-.5C9 2 9.4 2 12 2Zm0 1.8c-2.6 0-3 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.7-.1 1-.1 1.4-.1 4s0 3 .1 4c0 .9.2 1.4.3 1.7.2.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.7.3 1 .1 1.4.1 4 .1s3 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.7.1-1 .1-1.4.1-4s0-3-.1-4c0-.9-.2-1.4-.3-1.7a2.7 2.7 0 0 0-.6-1 2.7 2.7 0 0 0-1-.6c-.3-.1-.8-.3-1.7-.3-1-.1-1.4-.1-4-.1Zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm4.9-2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <FooterColumn title="Explore" links={exploreLinks} />
          <FooterColumn title="Studio" links={studioLinks} />

          {/* Visit */}
          <div className="flex flex-col items-start gap-4 text-left">
            <Kicker className="text-cream/60">Visit</Kicker>
            <p className="font-sans text-sm leading-relaxed text-cream/85">
              14 Marylebone Lane
              <br />
              London W1U 2NQ, United Kingdom
            </p>
            <a
              href="mailto:hello@izzanailstudio.com"
              className="font-sans text-sm text-cream/85 underline underline-offset-4 transition-colors hover:text-clay"
            >
              hello@izzanailstudio.com
            </a>
          </div>
        </div>

        <Divider className="mt-10 sm:mt-14 md:mt-20" />

        {/* Bottom bar */}
        <div className="mt-2 flex flex-col items-center justify-between gap-3 font-sans text-xs text-cream/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Izza Nail Studio. All rights reserved.</p>
          <p>Walk-ins welcome &middot; Booking via WhatsApp</p>
        </div>
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 200 160"
        className="pointer-events-none absolute -bottom-4 -left-6 hidden h-40 w-48 text-clay/70 lg:block"
        fill="currentColor"
      >
        <path d="M20 140c30 10 70 6 90-14 16-16 20-40 10-58-10 16-28 26-48 28 18-10 30-28 30-48-22 4-38 20-42 40-2-14-12-26-26-30 0 20 8 38 22 48-20-2-38 6-50 20 4 8 10 12 14 14Z" />
      </svg>
    </footer>
  );
}