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
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sakura/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-sage/40 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-hand text-2xl text-rosy">
              ✧ stitched with love, shipped with sparkles ✧
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-plum sm:text-5xl">
              Tiny friends, <span className="font-hand text-rosy">big</span>{" "}
              main-character energy.
            </h1>
            <p className="mt-5 max-w-md text-lg text-ink/75">
              {site.name} makes handmade crochet keychains & plushies — every
              one unique, every one made to order, just for you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <OrderButton size="lg" />
              <Link
                href="/shop"
                className="inline-flex h-13 items-center rounded-full border-2 border-plum/25 px-8 text-base font-extrabold text-plum transition hover:border-plum/50 hover:bg-paper"
              >
                Browse the shop →
              </Link>
            </div>

            <p className="mt-4 text-sm text-ink/55">
              💌 DM <span className="font-bold">@{site.instagramHandle}</span> to
              order — replies within 24h
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -left-6 -top-6 h-24 w-24 rotate-12 rounded-3xl bg-butter/60" />
            <div className="absolute -bottom-6 -right-6 h-28 w-28 -rotate-6 rounded-3xl bg-sakura/80" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-paper shadow-xl">
              <Image
                src="/products/axolotl.svg"
                alt="Crochet axolotl plush on a pink background"
                width={800}
                height={800}
                priority
                className="h-auto w-full"
              />
            </div>
            <p className="absolute -bottom-5 left-8 -rotate-3 rounded-full bg-paper px-4 py-1.5 font-hand text-xl text-plum shadow-md">
              100% handmade ♡
            </p>
          </div>
        </div>
      </section>

      {/* ── Value strip ──────────────────────────────────── */}
      <section className="border-y border-sakura bg-paper/70">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-center sm:grid-cols-3 sm:px-6">
          {[
            ["🧶", "Handmade to order", "No factories. Just hooks, yarn, and patience."],
            ["✨", "One of a kind", "Slight variations make yours truly yours."],
            ["🌏", "Ships worldwide", "Tracked shipping, cozy packaging."],
          ].map(([emoji, title, text]) => (
            <div key={title}>
              <p className="text-2xl" aria-hidden>
                {emoji}
              </p>
              <p className="mt-1 font-extrabold text-ink">{title}</p>
              <p className="text-sm text-ink/65">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured products ────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-plum">Fan favorites</h2>
            <p className="mt-1 text-ink/70">
              The pals everyone keeps coming back for.
            </p>
          </div>
          <Link
            href="/shop"
            className="shrink-0 font-bold text-rosy hover:text-rosy/80"
          >
            See all →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* ── Shop by category ─────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              href: "/shop?category=keychains",
              emoji: "🔑",
              title: "Keychains",
              text: "Pocket-sized companions for your keys, bags & hearts.",
              className: "bg-sakura/50",
            },
            {
              href: "/shop?category=plushies",
              emoji: "🧸",
              title: "Plushies",
              text: "Full-size snuggle buddies for beds, desks & couches.",
              className: "bg-sage/30",
            },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className={`group rounded-3xl border border-sakura p-8 transition hover:-translate-y-1 hover:shadow-lg ${c.className}`}
            >
              <p className="text-4xl" aria-hidden>
                {c.emoji}
              </p>
              <h3 className="mt-3 text-2xl font-black text-plum group-hover:text-rosy">
                {c.title}
              </h3>
              <p className="mt-1 text-ink/70">{c.text}</p>
              <p className="mt-4 font-bold text-rosy">Shop {c.title.toLowerCase()} →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── How to order ─────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-black text-plum">
          How ordering works
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
          {[
            ["1", "Pick your pal", "Find your favorite in the shop, or dream up a custom one."],
            ["2", "DM us", `Send "${site.name}, I want this one!" — we confirm details & price.`],
            ["3", "It comes to life", `Your pal gets stitched, then ships in cozy packaging.`],
          ].map(([step, title, text]) => (
            <div key={step} className="relative rounded-3xl bg-paper p-6 text-center shadow-sm">
              <span className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-rose to-rosy font-black text-white">
                {step}
              </span>
              <h3 className="mt-3 font-extrabold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm text-ink/65">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <OrderButton size="lg" />
        </div>
      </section>

      {/* ── Custom orders teaser ─────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-plum to-rosy px-8 py-10 text-center text-white sm:px-16">
          <p className="font-hand text-2xl text-sakura">can’t find your fave?</p>
          <h2 className="mt-1 text-3xl font-black">
            We bring your original character to life 🎨
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-white/85">
            Anime faves, game buddies, inside jokes — if you can describe it, we
            can crochet it.
          </p>
          <Link
            href="/custom-orders"
            className="mt-6 inline-flex h-12 items-center rounded-full bg-paper px-8 font-extrabold text-plum transition hover:bg-sakura"
          >
            Request a custom order
          </Link>
        </div>
      </section>
    </div>
  );
}
