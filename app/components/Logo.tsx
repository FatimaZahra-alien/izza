type LogoProps = {
  size?: "sm" | "lg";
  light?: boolean;
};

export default function Logo({ size = "lg", light = false }: LogoProps) {
  const scriptSize = size === "lg" ? "text-5xl md:text-6xl" : "text-2xl md:text-[26px]";
  const capsSize = size === "lg" ? "text-xs md:text-sm" : "text-[9px] md:text-[10px]";
  const color = light ? "text-cream" : "text-forest";

  return (
    <a
      href="#top"
      className={`inline-flex flex-col leading-none select-none ${color}`}
      aria-label="Izza Nail Studio home"
    >
      <span className={`font-display italic ${scriptSize}`}>Izza</span>
      <span className={`font-sans ${capsSize} tracking-[0.4em] mt-1.5`}>
        NAIL STUDIO
      </span>
    </a>
  );
}