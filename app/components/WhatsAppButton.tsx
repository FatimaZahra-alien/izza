"use client";

import { getWhatsAppLink } from "./whatsapp";

type WhatsAppButtonProps = {
  message?: string;
};

/**
 * Floating WhatsApp button, fixed to the bottom-right corner of the viewport.
 * Drop this once in your root layout (e.g. app/layout.tsx) so it shows on every page.
 */
export default function WhatsAppButton({ message }: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 14.997c0 2.35.678 4.6 1.96 6.552L4 29l7.646-1.913a13.02 13.02 0 0 0 4.358.746h.006C22.63 27.833 28 22.46 28 15.833 28 9.207 22.63 3.834 16.004 3zm0 22.65h-.005a10.6 10.6 0 0 1-3.916-.716l-.28-.11-3.42.855.907-3.31-.184-.294a10.628 10.628 0 0 1-1.627-5.685c0-5.878 4.784-10.66 10.664-10.66 2.85 0 5.53 1.111 7.545 3.13a10.59 10.59 0 0 1 3.117 7.535c-.001 5.878-4.785 10.655-10.801 10.655zm5.85-7.982c-.32-.16-1.892-.934-2.185-1.041-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.014 1.253-.187.213-.373.24-.694.08-.32-.16-1.351-.498-2.573-1.588-.951-.848-1.593-1.895-1.78-2.215-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.735-.987-2.376-.26-.626-.524-.541-.72-.551l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.306.16.213 2.257 3.445 5.467 4.831.764.33 1.36.527 1.826.674.767.244 1.464.21 2.016.128.615-.092 1.892-.774 2.16-1.52.267-.747.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373z" />
      </svg>
    </a>
  );
}