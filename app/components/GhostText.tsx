type GhostTextProps = {
  text?: string;
  className?: string;
  position?: "left" | "right" | "center";
  align?: "top" | "center" | "bottom";
  sizeClamp?: string;
};

/**
 * Large, low-opacity background watermark text.
 * Sits behind foreground content (image, headline, etc.) to add
 * texture without competing for attention.
 *
 * Usage (single watermark):
 *   <section className="relative overflow-hidden">
 *     <GhostText text="izza" position="left" />
 *     <div className="relative z-10"> ...actual content... </div>
 *   </section>
 *
 * Usage (two watermarks, no overlap):
 *   <section className="relative overflow-hidden">
 *     <GhostText text="izza" position="left" align="top" />
 *     <GhostText text="Beauty" position="right" align="bottom" sizeClamp="clamp(2.5rem, 10vw, 8rem)" />
 *     <div className="relative z-10"> ...actual content... </div>
 *   </section>
 */
export default function GhostText({
  text = "izza",
  className = "",
  position = "left",
  align = "center",
  sizeClamp = "clamp(4rem, 18vw, 14rem)",
}: GhostTextProps) {
  const positionClasses = {
    left: "left-[-2%] items-start text-left",
    center: "left-1/2 -translate-x-1/2 items-center text-center",
    right: "right-[-2%] items-end text-right",
  };

  const alignClasses = {
    top: "justify-start pt-6 sm:pt-10",
    center: "justify-center",
    bottom: "justify-end pb-6 sm:pb-10",
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-0 flex h-full w-full select-none flex-col ${alignClasses[align]} ${positionClasses[position]} ${className}`}
    >
      <span
        className="font-display italic leading-none text-forest/[0.06] whitespace-nowrap"
        style={{ fontSize: sizeClamp }}
      >
        {text}
      </span>
    </div>
  );
}