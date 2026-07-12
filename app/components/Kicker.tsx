type KickerProps = {
  children: string;
  className?: string;
};

/** Small uppercase tracked label used above section headings. */
export default function Kicker({ children, className = "" }: KickerProps) {
  return (
    <p
      className={`font-sans text-xs font-medium uppercase tracking-[0.3em] text-clay ${className}`}
    >
      {children}
    </p>
  );
}