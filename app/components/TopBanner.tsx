import Logo from "./Logo";

export default function TopBanner() {
  return (
    <div id="top" className="w-full bg-blush py-8">
      <div className="mx-auto flex max-w-6xl justify-center px-4">
        <Logo size="lg" />
      </div>
    </div>
  );
}