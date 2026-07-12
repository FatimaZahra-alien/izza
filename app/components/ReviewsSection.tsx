"use client";

import { useState } from "react";
import Reveal from "./Reveal";
// Note: Kicker import intentionally omitted — the "Testimonials" label was removed per request.

type Review = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

const reviews: Review[] = [
  {
    name: "Amelia R.",
    role: "Gel Manicure",
    quote:
      "Every detail feels considered here — from the warm welcome to the way they take their time with each hand.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Hand-Painted Art",
    quote:
      "I brought in a vague idea and they turned it into exactly what I pictured. So calm, I never want to leave.",
    rating: 5,
  },
  {
    name: "Devon L.",
    role: "Spa Pedicure",
    quote:
      "Unhurried is the right word. No one rushes you out the door, and the attention to detail shows every time.",
    rating: 5,
  },
  {
    name: "Whitney M.",
    role: "Signature Manicure",
    quote:
      "Booking on WhatsApp is so easy, and the team remembers my preferences from visit to visit.",
    rating: 5,
  },
  {
    name: "Sofia N.",
    role: "Gel Extensions",
    quote:
      "My extensions looked completely natural and lasted over a month without a single lift. Worth every minute.",
    rating: 5,
  },
  {
    name: "Grace T.",
    role: "Nail Art",
    quote:
      "The fine-line florals they painted on me got compliments for weeks. Genuinely the most talented team I've found.",
    rating: 5,
  },
  {
    name: "Maya K.",
    role: "Gel Manicure",
    quote:
      "Clean, quiet, and precise. I've tried a lot of salons and this is the first one that never disappoints.",
    rating: 5,
  },
  {
    name: "Elena B.",
    role: "Spa Pedicure",
    quote:
      "The whole experience feels like a reset. Friendly staff, spotless space, and my nails look flawless every time.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 md:gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-2.5 w-2.5 md:h-3.5 md:w-3.5 ${i < count ? "text-clay" : "text-forest/15"}`}
          fill="currentColor"
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, delay = 0 }: { review: Review; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <figure className="flex h-full flex-col justify-between rounded-xl bg-cream px-4 py-5 shadow-sm ring-1 ring-forest/5 transition-shadow duration-300 hover:shadow-md md:rounded-2xl md:px-7 md:py-8">
        <div>
          <span
            aria-hidden="true"
            className="font-display text-3xl italic leading-none text-clay/70 md:text-5xl"
          >
            &ldquo;
          </span>
          <blockquote className="-mt-1.5 font-display text-sm italic leading-snug text-forest md:-mt-3 md:text-lg lg:text-xl">
            {review.quote}
          </blockquote>
        </div>

        <figcaption className="mt-4 flex items-center justify-between border-t border-forest/10 pt-3 md:mt-8 md:pt-5">
          <div>
            <p className="font-sans text-xs font-medium text-forest md:text-sm">
              {review.name}
            </p>
            <p className="mt-0.5 font-sans text-[10px] uppercase tracking-[0.1em] text-forest/50 md:text-xs md:tracking-[0.12em]">
              {review.role}
            </p>
          </div>
          <Stars count={review.rating} />
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default function ReviewsSection() {
  const [expanded, setExpanded] = useState(false);
  const primary = reviews.slice(0, 4);
  const more = reviews.slice(4, 8);

  return (
    <section id="reviews" className="w-full bg-blush">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-28">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="font-display text-4xl italic text-forest md:text-5xl">
            Kind words from our clients
          </h2>
          <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-forest/70">
            A few notes from the guests who&rsquo;ve made Izza part of their
            routine.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-5">
          {primary.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        <div
          className={`grid grid-cols-2 gap-3 overflow-hidden transition-all duration-500 ease-out md:grid-cols-4 md:gap-5 ${
            expanded ? "mt-3 max-h-[1200px] opacity-100 md:mt-5" : "mt-0 max-h-0 opacity-0"
          }`}
          aria-hidden={!expanded}
        >
          {more.map((review, i) => (
            <ReviewCard key={review.name} review={review} delay={expanded ? i * 80 : 0} />
          ))}
        </div>

        <div className="mt-8 flex justify-center md:mt-14">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-5 py-2.5 font-sans text-xs font-medium tracking-wide text-forest transition-all duration-200 hover:border-forest hover:bg-forest hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest md:px-6 md:py-3 md:text-sm"
          >
            {expanded ? "View Less" : "View More Reviews"}
            <svg
              viewBox="0 0 20 20"
              className={`h-3 w-3 transition-transform duration-300 md:h-3.5 md:w-3.5 ${
                expanded ? "rotate-180" : ""
              }`}
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5 7l5 5 5-5H5z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}