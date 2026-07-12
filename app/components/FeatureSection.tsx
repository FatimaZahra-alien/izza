import Image from "next/image";
import PillButton from "./Pillbutton";

type FeatureSectionProps = {
  id: string;
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  bgClass?: string;
};

export default function FeatureSection({
  id,
  heading,
  description,
  buttonLabel,
  buttonHref,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  bgClass = "bg-blush",
}: FeatureSectionProps) {
  const imageFirst = imagePosition === "left";

  return (
    <section id={id} className={`w-full ${bgClass}`}>
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:gap-16 md:px-6 md:py-20 ${
          imageFirst ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Circular photo */}
        <div className="flex w-full justify-center md:w-2/5">
          <div className="relative h-64 w-64 overflow-hidden rounded-full shadow-lg md:h-80 md:w-80">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 768px) 320px, 256px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Text block */}
        <div className="flex w-full flex-col items-center text-center md:w-3/5 md:items-start md:text-left">
          <h2 className="font-script text-5xl text-forest md:text-6xl">
            {heading}
          </h2>
          <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-forest/80">
            {description}
          </p>
          <div className="mt-7">
            <PillButton href={buttonHref} label={buttonLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}