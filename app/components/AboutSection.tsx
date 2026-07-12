import Image from "next/image";
import Kicker from "./Kicker";
import PillButton from "./PillButton";
import Reveal from "./Reveal";

const stats = [
  { value: "8+", label: "Years Crafting" },
  { value: "3", label: "Resident Artists" },
  { value: "5.0", label: "Average Rating" },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-blush">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 py-14 sm:gap-12 sm:py-20 md:flex-row-reverse md:gap-16 md:px-8 md:py-28">
        <Reveal className="flex w-full justify-center md:w-2/5">
          <div className="relative h-64 w-56 overflow-hidden rounded-full shadow-lg sm:h-80 sm:w-64 md:h-96 md:w-80">
            <Image
              src="/images/about.jpg"
              alt="Interior of the Izza Nail Studio salon with plants and natural light"
              fill
              sizes="(min-width: 768px) 320px, (min-width: 640px) 256px, 224px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="flex w-full flex-col items-center text-center md:w-3/5 md:items-start md:text-left">
          <Kicker>The Studio</Kicker>
          <h2 className="mt-3 font-display text-3xl italic text-forest sm:text-4xl md:text-5xl">
            About Us
          </h2>
          <p className="mt-4 max-w-xs font-display text-lg italic leading-snug text-forest/80 sm:mt-5 sm:max-w-md sm:text-xl">
            &ldquo;Self-care shouldn&rsquo;t feel rushed.&rdquo;
          </p>
          <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-forest/70 sm:max-w-md sm:text-base">
            That belief shaped every corner of our plant-filled space —
            unhurried appointments, natural light, and a team that treats each
            visit like the reset it&rsquo;s meant to be.
          </p>

          <div className="mt-7 flex w-full max-w-xs items-center justify-center gap-4 border-t border-forest/15 pt-5 sm:mt-8 sm:max-w-md sm:gap-8 sm:pt-6 md:justify-start">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-display text-xl italic text-clay sm:text-2xl">{stat.value}</p>
                <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.12em] text-forest/60 sm:text-[11px] sm:tracking-[0.15em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 sm:mt-8">
            <PillButton href="/about" label="About Us" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}