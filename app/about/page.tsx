import Image from "next/image";
import Kicker from "../components/Kicker";
import PillButton from "../components/PillButton";
import Reveal from "../components/Reveal";
import GhostText from "../components/GhostText";
import { getWhatsAppLink } from "../components/whatsapp";

const values = [
  {
    title: "Unhurried Pace",
    note: "Every appointment is timed generously — no service rushed to fit the next.",
  },
  {
    title: "Considered Detail",
    note: "From shape to finish, every step is done with care, not shortcuts.",
  },
  {
    title: "A Family Feel",
    note: "The same warmth Ilsa gives her own children, she brings to every client's visit.",
  },
];

export const metadata = {
  title: "About Us | Izza Nail Studio",
  description:
    "The story behind Izza Nail Studio — founded by Ilsa Tanzeel and named after her two children, Zaim and Izan.",
};

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Page intro banner */}
      <section className="relative w-full overflow-hidden bg-cream">
        <GhostText text="izza" position="center" align="center" />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 py-16 text-center sm:py-20 md:px-8 md:py-28">
          <Reveal className="flex flex-col items-center">
            <Kicker>Our Story</Kicker>
            <h1 className="mt-3 font-display text-4xl italic text-forest sm:text-5xl md:text-6xl">
              A Name Born From Love
            </h1>
            <p className="mt-5 max-w-lg font-sans text-sm leading-relaxed text-forest/70 sm:text-base">
              Every studio has a story. Ours begins with a mother, her two
              children, and a name that carries them both.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Origin story — narrative, image + text */}
      <section className="w-full bg-blush">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 py-16 sm:gap-12 sm:py-20 md:flex-row-reverse md:gap-16 md:px-8 md:py-28">
          <Reveal className="flex w-full justify-center md:w-2/5">
            <div className="relative h-72 w-64 overflow-hidden rounded-2xl shadow-lg sm:h-80 sm:w-72 md:h-[26rem] md:w-80">
              <Image
                src="/images/ilsa-founder.jpg"
                alt="Ilsa Tanzeel, founder of Izza Nail Studio"
                fill
                sizes="(min-width: 768px) 320px, (min-width: 640px) 288px, 256px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal
            delay={100}
            className="flex w-full flex-col items-center text-center md:w-3/5 md:items-start md:text-left"
          >
            <Kicker>The Founder</Kicker>
            <h2 className="mt-3 font-display text-3xl italic text-forest sm:text-4xl md:text-5xl">
              Meet Ilsa
            </h2>

            <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-forest/70 sm:text-base">
              Izza Nail Studio was founded by <strong className="font-medium text-forest">Ilsa Tanzeel</strong>,
              a mother of two who built this space in the same spirit she
              raises her own family — with patience, warmth, and attention to
              the smallest details.
            </p>

            <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-forest/70 sm:text-base">
              Long before it was a business, Izza was simply a name Ilsa
              loved — one that held both of her children inside it. Her son{" "}
              <strong className="font-medium text-forest">Zaim</strong> and
              her daughter <strong className="font-medium text-forest">Izan</strong> each
              gave a piece of themselves to it, and together they became{" "}
              <strong className="font-medium text-forest">Izza</strong>.
            </p>

            <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-forest/70 sm:text-base">
              When Ilsa opened the studio, there was only one name that felt
              right. Every client who walks through the door is, in a small
              way, welcomed into that same family.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Name meaning callout */}
      <section className="w-full bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20 md:px-8 md:py-24">
          <Reveal className="flex flex-col items-center">
            <span className="font-display text-5xl italic leading-none text-clay/70" aria-hidden="true">
              &ldquo;
            </span>
            <p className="-mt-3 max-w-xl font-display text-xl italic leading-snug text-forest sm:text-2xl md:text-3xl">
              Izza isn&rsquo;t just a name on the sign. It&rsquo;s Zaim and
              Izan, together — the reason I do all of this.
            </p>
            <p className="mt-5 font-sans text-xs uppercase tracking-[0.15em] text-forest/50">
              Ilsa Tanzeel, Founder
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-blush">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20 md:px-8 md:py-28">
          <Reveal className="flex flex-col items-center text-center">
            <Kicker>What We Stand For</Kicker>
            <h2 className="mt-3 font-display text-3xl italic text-forest sm:text-4xl md:text-5xl">
              Our Values
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-cream px-6 py-7 shadow-sm ring-1 ring-forest/5 sm:px-7 sm:py-8">
                  <span className="font-display text-xs italic text-clay/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-xl italic text-forest sm:text-2xl">
                    {value.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-forest/70">
                    {value.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-cream">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-16 text-center sm:py-20 md:px-8 md:py-24">
          <Reveal className="flex flex-col items-center">
            <h2 className="font-display text-3xl italic text-forest sm:text-4xl">
              Come be part of the story
            </h2>
            <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-forest/70 sm:text-base">
              Book your next appointment and experience the Izza approach for
              yourself.
            </p>
            <div className="mt-7">
              <PillButton
                href={getWhatsAppLink()}
                label="Book Now"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}