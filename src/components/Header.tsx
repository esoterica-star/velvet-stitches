import Link from "next/link";
import OrderButton from "@/components/OrderButton";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TikTokIcon from "@/components/icons/TikTokIcon";
import { site } from "@/lib/site";

const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/custom-orders", label: "Commissions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "FAQ & Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-baseline gap-2.5"
        >
          <span className="font-serif text-xl font-semibold uppercase tracking-[0.22em] text-mist transition-colors group-hover:text-rose">
            {site.name}
          </span>
          <span
            aria-hidden
            className="hidden text-[10px] uppercase tracking-[0.4em] text-fog sm:inline"
          >
            鍵編み
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[12px] font-medium uppercase tracking-[0.18em] text-fog md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-rose"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden h-9 w-9 place-items-center rounded-full border border-line text-fog transition hover:border-rose hover:text-rose sm:grid"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a
            href={site.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hidden h-9 w-9 place-items-center rounded-full border border-line text-fog transition hover:border-rose hover:text-rose sm:grid"
          >
            <TikTokIcon className="h-4 w-4" />
          </a>
          <OrderButton size="sm">Order</OrderButton>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="flex items-center justify-center gap-7 border-t border-line/70 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-fog md:hidden">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-rose">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
