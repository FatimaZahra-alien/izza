import Image from "next/image";
import PillButton from "./PillButton";
import Kicker from "./Kicker";
import Logo from "./Logo";
import GhostText from "./GhostText";
import { getWhatsAppLink } from "./whatsapp";

export default function Hero() {
  return (
    <section className="relative w-full overflow-x-hidden bg-blush">
      <GhostText text="izza" position="left" align="top" />
      <GhostText
        text="Beauty"
        position="right"
        align="bottom"
        sizeClamp="clamp(2.5rem, 10vw, 8rem)"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl justify-start px-5 pt-6 sm:pt-8 md:px-8 md:pt-14">
        <Logo size="sm" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 pb-12 pt-8 sm:gap-12 sm:pb-16 md:flex-row md:gap-10 md:px-8 md:pb-28 md:pt-8">
        {/* Left: copy */}
        <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
          <Kicker>Est. London, UK</Kicker>
          <h1 className="mt-4 font-display text-4xl italic leading-[1.1] text-forest sm:text-5xl md:text-[4.2rem] md:leading-[1.05]">
            Give yourself&rsquo;a little&rsquo;pampering.
          </h1>
          <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-forest/70 sm:max-w-md sm:text-base">
            Relax, sit back, Get your nails done__ We Got You!
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:mt-8 sm:gap-5 md:justify-start">
            <PillButton
              href={getWhatsAppLink()}
              label="Book Now"
              target="_blank"
              rel="noopener noreferrer"
            />
            <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay sm:text-sm">
              Now Open
            </span>
          </div>
        </div>

        {/* Right: layered arch image */}
        <div className="relative flex w-full justify-center md:w-1/2">
          {/* Offset outline frame — signature layered-frame treatment */}
          <div
            aria-hidden="true"
            className="arch-mask absolute left-1/2 top-4 h-64 w-48 -translate-x-1/2 border border-clay/60 sm:top-6 sm:h-80 sm:w-60 md:h-[27rem] md:w-72"
          />
          <div
            aria-hidden="true"
            className="absolute -right-1 top-10 h-40 w-40 rounded-full bg-clay/25 sm:-right-2 sm:top-16 sm:h-56 sm:w-56 md:h-64 md:w-64"
          />
          <div className="arch-mask relative h-64 w-52 shadow-xl sm:h-80 sm:w-64 md:h-[26rem] md:w-[19rem]">
            <Image
              src="/images/Nail-hero.jpg"
              alt="Close-up of a fresh manicure with soft pink nail polish"
              fill
              sizes="(min-width: 768px) 320px, (min-width: 640px) 256px, 208px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}