import Link from "next/link";
import OrderButton from "@/components/OrderButton";
import { site } from "@/lib/site";

const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/custom-orders", label: "Custom Orders" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "FAQ & Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sakura bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-extrabold text-plum transition-opacity hover:opacity-75"
        >
          <span aria-hidden className="text-2xl">
            🧶
          </span>
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold text-ink/80 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-rosy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <OrderButton size="sm">Order on IG</OrderButton>
      </div>

      {/* Mobile nav */}
      <nav className="flex items-center justify-center gap-6 border-t border-sakura/70 bg-paper px-4 py-2.5 text-sm font-bold text-ink/80 md:hidden">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-rosy">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
