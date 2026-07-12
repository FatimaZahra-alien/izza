type PillButtonProps = {
  href: string;
  label: string;
  variant?: "solid" | "outline";
  className?: string;
};

export default function PillButton({
  href,
  label,
  variant = "solid",
  className = "",
}: PillButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest";
  const solid =
    "bg-sage text-white shadow-sm hover:bg-sage-deep hover:shadow-md hover:-translate-y-0.5";
  const outline =
    "border border-forest/30 text-forest hover:border-forest hover:bg-forest hover:text-cream";

  return (
    <a href={href} className={`${base} ${variant === "solid" ? solid : outline} ${className}`}>
      {label}
      <span aria-hidden="true">›</span>
    </a>
  );
}