import Image from "next/image";
import Kicker from "./Kicker";
import PillButton from "./PillButton";
import Reveal from "./Reveal";

export default function NailArtSection() {
  return (
    <section id="nail-art" className="w-full bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 px-5 py-20 md:flex-row md:gap-16 md:px-8 md:py-28">
        {/* Overlapping photo collage */}
        <Reveal className="relative flex w-full justify-center md:w-2/5">
          <div className="relative h-72 w-56 md:h-80 md:w-64">
            <div className="absolute left-0 top-4 h-56 w-44 overflow-hidden rounded-2xl shadow-lg md:h-64 md:w-52">
              <Image
                src="/images/Nailart-2.jpg"
                alt="Hand-painted floral nail art in soft pastel tones"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-2 bottom-0 h-44 w-36 overflow-hidden rounded-2xl border-4 border-cream shadow-lg md:h-52 md:w-44">
              <Image
                src="/images/Nailart-1.jpg"
                alt="Close-up of a fine-line geometric nail art design"
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Text block */}
        <Reveal delay={100} className="flex w-full flex-col items-center text-center md:w-3/5 md:items-start md:text-left">
          <Kicker>Our Craft</Kicker>
          <h2 className="mt-3 font-display text-4xl italic text-forest md:text-5xl">
            Nail Art
          </h2>
          <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-forest/70">
            From delicate florals to fine-line geometry, every design is
            hand-painted to order. Bring a reference or let our artists
            improvise something entirely yours.
          </p>
          <div className="mt-7">
            <PillButton href="#book" label="Nail Art" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}