import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-sakura bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold text-plum">
            <span aria-hidden className="mr-1.5">
              🧶
            </span>
            {site.name}
          </p>
          <p className="mt-2 max-w-xs text-sm text-ink/70">{site.tagline}. Every piece is stitched by hand, one knot at a time. (ﾉ´ヮ`)ﾉ*: ･ﾟ</p>
        </div>

        <div>
          <p className="text-sm font-extrabold uppercase tracking-wider text-ink/50">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm font-semibold">
            <li><Link href="/shop" className="text-ink/80 hover:text-rosy">Shop all</Link></li>
            <li><Link href="/shop?category=keychains" className="text-ink/80 hover:text-rosy">Keychains</Link></li>
            <li><Link href="/shop?category=plushies" className="text-ink/80 hover:text-rosy">Plushies</Link></li>
            <li><Link href="/custom-orders" className="text-ink/80 hover:text-rosy">Custom orders</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-extrabold uppercase tracking-wider text-ink/50">
            Say hi
          </p>
          <ul className="mt-3 space-y-2 text-sm font-semibold">
            <li>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-ink/80 hover:text-rosy">
                Instagram · @{site.instagramHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-ink/80 hover:text-rosy">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sakura/70 py-4 text-center text-xs text-ink/50">
        © {new Date().getFullYear()} {site.name}. Made with 🧶 and too much anime.
      </div>
    </footer>
  );
}
