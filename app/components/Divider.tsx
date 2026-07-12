type DividerProps = {
  className?: string;
};

/** Signature hand-drawn sprig — the recurring motif between sections. */
export default function Divider({ className = "" }: DividerProps) {
  return (
    <div className={`flex justify-center py-2 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 24" className="h-5 w-28 text-clay" fill="none">
        <path
          d="M2 12h40M78 12h40"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M60 12c-6-6-6-10 0-10s6 4 0 10Zm0 0c6-6 6-10 0-10s-6 4 0 10Zm0 0c-6 6-6 10 0 10s6-4 0-10Zm0 0c6 6 6 10 0 10s-6-4 0-10Z"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}