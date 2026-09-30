import Image from "next/image";
import Link from "next/link";
import OrderButton from "@/components/OrderButton";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function Home() {
  const featured = [
    products.find((p) => p.slug === "bunny-buddy-keychain"),
    products.find((p) => p.slug === "axolotl-pal-plush"),
    products.find((p) => p.slug === "ghost-buddy-keychain"),
  ].filter((p) => p !== undefined);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-rose/8 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-wine/30 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-fog">
              かぎ針編み · Handmade crochet · Jeddah
            </p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] text-mist sm:text-6xl">
              Handmade creations that{" "}
              <span className="italic text-rose">reflect you</span>.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-fog">
              {site.name} stitches keychains & plushies with personality —
              every piece made by hand, made to order, and one of a kind.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <OrderButton size="lg" />
              <Link
                href="/shop"
                className="inline-flex h-12 items-center rounded-full border border-line px-8 text-[13px] font-medium uppercase tracking-[0.16em] text-mist transition hover:border-rose hover:text-rose"
              >
                Browse the shop
              </Link>
            </div>

            <p className="mt-5 text-sm text-fog">
              ✦ {site.deliveryNote}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-rose/25 via-transparent to-wine/40 blur-sm" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line shadow-2xl">
              <Image
                src="/products/axolotl.svg"
                alt="Crochet axolotl plush on a pink background"
                width={800}
                height={800}
                priority
                className="h-auto w-full"
              />
            </div>
            <p className="absolute -bottom-4 right-6 rounded-full border border-line bg-panel px-4 py-1.5 font-serif text-sm italic text-rose shadow-lg">
              100% handmade
            </p>
          </div>
        </div>
      </section>

      {/* ── Value strip ──────────────────────────────────── */}
      <section className="border-y border-line bg-panel/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-center sm:grid-cols-3 sm:px-6">
          {[
            ["Made to order", "No factories. Just hook, yarn, and patience."],
            ["One of a kind", "Slight variations make yours truly yours."],
            ["Jeddah delivery", "5–20 SAR by area, hand-packed with care."],
          ].map(([title, text]) => (
            <div key={title}>
              <p className="text-rose" aria-hidden>
                ✦
              </p>
              <p className="mt-1.5 font-serif text-lg font-semibold text-mist">
                {title}
              </p>
              <p className="text-sm text-fog">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured products ────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-fog">
              Selected works
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-mist">
              Fan favorites
            </h2>
          </div>
          <Link
            href="/shop"
            className="shrink-0 text-[12px] font-medium uppercase tracking-[0.18em] text-rose transition hover:text-rosedeep"
          >
            See all →
          </Link>
        </div>

        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* ── Shop by category ─────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              href: "/shop?category=keychains",
              kicker: "かぎ針 · 01",
              title: "Keychains",
              text: "Pocket-sized companions for keys, bags & hearts.",
            },
            {
              href: "/shop?category=plushies",
              kicker: "かぎ針 · 02",
              title: "Plushies",
              text: "Full-size snuggle buddies for beds, desks & couches.",
            },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group rounded-2xl border border-line bg-panel p-8 transition duration-300 hover:-translate-y-1 hover:border-rose/60 hover:shadow-[0_20px_50px_-20px_rgba(227,156,184,0.25)]"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-fog">
                {c.kicker}
              </p>
              <h3 className="mt-3 font-serif text-3xl font-semibold text-mist transition-colors group-hover:text-rose">
                {c.title}
              </h3>
              <p className="mt-2 text-fog">{c.text}</p>
              <p className="mt-6 text-[12px] font-medium uppercase tracking-[0.18em] text-rose">
                Shop {c.title.toLowerCase()} →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── How to order ─────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center font-serif text-3xl font-semibold text-mist">
          How ordering works
        </h2>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
          {[
            ["01", "Pick your pal", "Find your favorite in the shop, or dream up a custom one."],
            ["02", "DM us", `Message @${site.instagramHandle} — we confirm details & price.`],
            ["03", "It comes to life", "Your pal gets stitched, then delivered in Jeddah."],
          ].map(([step, title, text]) => (
            <div
              key={step}
              className="relative rounded-2xl border border-line bg-panel p-6 text-center"
            >
              <span className="font-serif text-2xl font-semibold italic text-rose">
                {step}
              </span>
              <h3 className="mt-2 font-serif text-lg font-semibold text-mist">
                {title}
              </h3>
              <p className="mt-1.5 text-sm text-fog">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <OrderButton size="lg" />
        </div>
      </section>

      {/* ── Custom orders teaser ─────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="rounded-2xl border border-rose/30 bg-gradient-to-br from-wine/60 via-panel to-panel px-8 py-14 text-center sm:px-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-rose">
            Commissions
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-mist">
            Your idea, stitched into existence
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-fog">
            Anime favorites, game buddies, inside jokes — describe it, and we
            bring it to life one stitch at a time.
          </p>
          <Link
            href="/custom-orders"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-rose px-8 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-rosedeep hover:text-mist"
          >
            Request a commission
          </Link>
        </div>
      </section>
    </div>
  );
}
