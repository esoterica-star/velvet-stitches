import Link from "next/link";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TikTokIcon from "@/components/icons/TikTokIcon";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-panel/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg font-semibold uppercase tracking-[0.22em] text-mist">
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-fog">
            {site.tagline}. Stitched by hand in {site.city}, one knot at a
            time.
          </p>
          <div className="mt-5 flex gap-2.5">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-fog transition hover:border-rose hover:text-rose"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={site.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-fog transition hover:border-rose hover:text-rose"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-fog">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/shop" className="text-mist/80 transition hover:text-rose">Shop all</Link></li>
            <li><Link href="/shop?category=keychains" className="text-mist/80 transition hover:text-rose">Keychains</Link></li>
            <li><Link href="/shop?category=plushies" className="text-mist/80 transition hover:text-rose">Plushies</Link></li>
            <li><Link href="/custom-orders" className="text-mist/80 transition hover:text-rose">Commissions</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-fog">
            Say hi
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mist/80 transition hover:text-rose"
              >
                @{site.instagramHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-mist/80 transition hover:text-rose">
                {site.email}
              </a>
            </li>
            <li className="text-fog">{site.deliveryNote}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/60 py-4 text-center text-[11px] uppercase tracking-[0.25em] text-fog/70">
        © {new Date().getFullYear()} {site.name} · Jeddah, Saudi Arabia
      </div>
    </footer>
  );
}
