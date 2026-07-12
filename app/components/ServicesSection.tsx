
import Image from "next/image";
import Reveal from "./Reveal";
import GhostText from "./GhostText";

const menu = [
  { name: "Signature Manicure", note: "shape, cuticle care, polish" },
  { name: "Gel Manicure", note: "long-wear, high-shine finish" },
  { name: "Spa Pedicure", note: "soak, scrub, extended massage" },
  { name: "Gel Extensions", note: "sculpted length, natural taper" },
  { name: "Hand-Painted Art", note: "priced per design complexity" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-cream">
      <GhostText text="izza" position="right" align="center" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 py-16 md:flex-row md:gap-16 md:px-8 md:py-28">
        <Reveal className="flex w-full justify-center md:w-2/5">
          <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl shadow-lg ring-1 ring-forest/10 md:h-96 md:w-80 md:max-w-none">
            <Image
              src="/images/services.jpg"
              alt="Nail technician performing a manicure treatment"
              fill
              sizes="(min-width: 768px) 320px, 320px"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-clay/20"
            />
          </div>
        </Reveal>

        <Reveal
          delay={100}
          className="flex w-full flex-col items-center text-center md:w-3/5 md:items-start md:text-left"
        >
          <h2 className="font-display text-3xl italic text-forest sm:text-4xl md:text-5xl">
            What We Offer
          </h2>
          <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-forest/70 sm:mt-5 sm:text-base">
            Every appointment is paced generously — no service is rushed to
            make room for the next.
          </p>

          <ul className="mt-8 w-full max-w-md divide-y divide-clay/20 border-y border-clay/20 sm:mt-9">
            {menu.map((item, i) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-4 py-4 sm:gap-6 sm:py-5"
              >
                <span className="flex items-baseline gap-3 sm:gap-4">
                  <span className="font-display text-xs italic text-clay/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-sm font-medium tracking-wide text-forest sm:text-base">
                    {item.name}
                  </span>
                </span>
                <span className="whitespace-nowrap font-sans text-[11px] italic text-forest/50 sm:text-xs">
                  {item.note}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}