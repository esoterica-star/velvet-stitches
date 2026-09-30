import Image from "next/image";
import Link from "next/link";
import OrderButton from "@/components/OrderButton";
import Logo from "@/components/Logo";
import Sigil from "@/components/Sigil";
import ProductCard from "@/components/ProductCard";
import { categoryLabels, products, type Category } from "@/lib/products";
import { site } from "@/lib/site";

export default function Home() {
  const collections: { key: Category; image: string; alt: string }[] = [
    { key: "keychains", image: "/products/bunny-keychain.svg", alt: "Crochet bunny keychain" },
    { key: "plushies", image: "/products/axolotl.svg", alt: "Crochet axolotl plush" },
  ];

  return (
    <div>
      {/* ── Slim hero band ───────────────────────────────── */}
      <section className="vs-grid relative overflow-hidden border-b border-line">
        <Sigil className="vs-sigil-breathe pointer-events-none absolute -right-8 top-0 hidden h-full text-silver md:block" />
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-14 text-center sm:px-6">
          <Logo className="h-16 w-16" />
          <p className="font-mono text-[11px] uppercase tracking-[0.45em] text-fog">
            Handmade crochet · Keychains & Plushies · Jeddah
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <OrderButton size="lg" />
            <Link
              href="/custom-orders"
              className="inline-flex h-12 items-center rounded-md border border-line px-8 font-mono text-[13px] font-medium uppercase tracking-[0.18em] text-mist transition hover:border-accent hover:text-accent"
            >
              Custom piece
            </Link>
          </div>
        </div>
      </section>

      {/* ── Collections: two big image tiles ─────────────── */}
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {collections.map((c) => {
            const count = products.filter((p) => p.category === c.key).length;
            return (
              <Link
                key={c.key}
                href={`/shop?category=${c.key}`}
                className="group relative block overflow-hidden rounded-lg border border-line transition duration-300 hover:border-accent/70"
              >
                <div className="relative aspect-[4/3] bg-panel-2">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-fog">
                        Collection · {String(count).padStart(2, "0")} pieces
                      </p>
                      <h2 className="mt-1.5 font-serif text-3xl font-semibold uppercase tracking-[0.12em] text-mist transition-colors group-hover:text-accent">
                        {categoryLabels[c.key]}
                      </h2>
                    </div>
                    <span aria-hidden className="font-mono text-xl text-accent">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Everything: full image mosaic ────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.4em] text-fog">
            All pieces
          </h2>
          <Link
            href="/shop"
            className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent transition hover:text-mist"
          >
            Catalog →
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* ── How to order: one strip, three words each ────── */}
      <section className="border-y border-line bg-panel/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.25em] text-fog">
            <span><span className="text-accent">01</span> Pick</span>
            <span aria-hidden className="text-line">|</span>
            <span><span className="text-accent">02</span> DM @{site.instagramHandle}</span>
            <span aria-hidden className="text-line">|</span>
            <span><span className="text-accent">03</span> Delivered in Jeddah</span>
          </div>
          <OrderButton size="lg" />
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog/70">
            {site.deliveryNote} · {site.addressNote}
          </p>
        </div>
      </section>
    </div>
  );
}
