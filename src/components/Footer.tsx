import Link from "next/link";
import Logo from "@/components/Logo";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TikTokIcon from "@/components/icons/TikTokIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-panel/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <p className="font-serif text-lg font-semibold uppercase tracking-[0.22em] text-mist">
              {site.name}
            </p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">
            {site.tagline}. Handmade in a home studio in {site.city}, one
            stitch at a time.
          </p>
          <div className="mt-5 flex gap-2.5">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-fog transition hover:border-accent hover:text-accent"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={site.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-fog transition hover:border-accent hover:text-accent"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
            {site.hasWhatsapp && (
              <a
                href={site.whatsappUrl as string}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-fog transition hover:border-accent hover:text-accent"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-fog">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/shop" className="text-mist/80 transition hover:text-accent">Catalog</Link></li>
            <li><Link href="/shop?category=keychains" className="text-mist/80 transition hover:text-accent">Keychains</Link></li>
            <li><Link href="/shop?category=plushies" className="text-mist/80 transition hover:text-accent">Plushies</Link></li>
            <li><Link href="/custom-orders" className="text-mist/80 transition hover:text-accent">Commissions</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-fog">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mist/80 transition hover:text-accent"
              >
                @{site.instagramHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-mist/80 transition hover:text-accent">
                {site.email}
              </a>
            </li>
            <li className="text-fog">{site.deliveryNote}</li>
            <li className="text-xs leading-relaxed text-fog/80">{site.addressNote}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/60 py-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-fog/70">
        © {new Date().getFullYear()} {site.name} · Handmade in Jeddah
      </div>
    </footer>
  );
}
