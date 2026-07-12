import Kicker from "./Kicker";
import Reveal from "./Reveal";

export default function LocationSection() {
  return (
    <section id="location" className="w-full bg-blush-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 py-14 sm:gap-12 sm:py-20 md:flex-row md:gap-16 md:px-8 md:py-28">
        <Reveal className="flex w-full flex-col items-center text-center md:w-3/5 md:items-start md:text-left">
          <Kicker>Find Us</Kicker>
          <h2 className="mt-3 font-display text-3xl italic text-forest sm:text-4xl md:text-5xl">
            Location
          </h2>
          <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-forest/70 sm:max-w-md sm:text-base">
            Tucked just off Marylebone Lane in central London, a short walk
            from Bond Street station. Walk-ins are welcome, though booking
            ahead guarantees your favorite technician.
          </p>

          <div className="mt-5 w-full overflow-hidden rounded-2xl shadow-md sm:mt-6">
            <iframe
              title="Izza Nail Studio location map"
              src="https://www.google.com/maps?q=Marylebone+Lane+London&output=embed"
              width="100%"
              height="220"
              className="sm:h-[280px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="mt-4 font-sans text-xs font-medium text-forest sm:mt-5 sm:text-sm">
            14 Marylebone Lane, London W1U 2NQ, United Kingdom
          </p>
        </Reveal>

        <Reveal delay={100} className="flex w-full flex-col items-center gap-4 md:w-2/5 md:items-end md:text-right md:gap-6">
          <svg
            aria-hidden="true"
            viewBox="0 0 120 120"
            className="h-20 w-20 text-clay sm:h-28 sm:w-28 md:h-36 md:w-36"
            fill="currentColor"
          >
            <path d="M60 8c-22 0-40 18-40 40 0 12 5 21 10 28-8-26 4-48 24-56-16 10-24 30-22 54 5 3 13 4 28 4 26 0 48-20 48-46S82 8 60 8Z" />
          </svg>
          <p className="max-w-xs font-sans text-xs text-forest/70 sm:text-sm">
            Limited on-street parking is available on Marylebone Lane after
            6:30pm, or use the NCP car park on Moxon Street, a two-minute
            walk away.
          </p>
        </Reveal>
      </div>
    </section>
  );
}