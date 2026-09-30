import Link from "next/link";
import OrderButton from "@/components/OrderButton";
import Logo from "@/components/Logo";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TikTokIcon from "@/components/icons/TikTokIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { site } from "@/lib/site";

const nav = [
  { href: "/shop", label: "Catalog" },
  { href: "/custom-orders", label: "Commissions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "FAQ & Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <Logo className="h-10 w-10 shrink-0 transition-transform group-hover:scale-105" />
          <span className="hidden font-serif text-xl font-semibold uppercase tracking-[0.22em] text-mist transition-colors group-hover:text-accent sm:inline">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-fog md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
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
            className="hidden h-9 w-9 place-items-center rounded-full border border-line text-fog transition hover:border-accent hover:text-accent sm:grid"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a
            href={site.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hidden h-9 w-9 place-items-center rounded-full border border-line text-fog transition hover:border-accent hover:text-accent sm:grid"
          >
            <TikTokIcon className="h-4 w-4" />
          </a>
          {site.hasWhatsapp && (
            <a
              href={site.whatsappUrl as string}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hidden h-9 w-9 place-items-center rounded-full border border-line text-fog transition hover:border-accent hover:text-accent sm:grid"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          )}
          <OrderButton size="sm">Order</OrderButton>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="flex items-center justify-center gap-7 border-t border-line/70 px-4 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-fog md:hidden">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-accent">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
