import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import OrderButton from "@/components/OrderButton";
import { categoryLabels, products, type Category } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse handmade crochet keychains and plushies — ready to ship or made to order.",
};

const filters: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "Everything" },
  { key: "keychains", label: categoryLabels.keychains },
  { key: "plushies", label: categoryLabels.plushies },
];

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active: Category | "all" =
    category === "keychains" || category === "plushies" ? category : "all";

  const visible =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-hand text-2xl text-rosy">✧ the shop ✧</p>
          <h1 className="text-4xl font-black text-plum">
            Pick your next companion
          </h1>
          <p className="mt-2 max-w-lg text-ink/70">
            Every pal is made by hand. Ready-to-ship items leave within days;
            made-to-order pieces are stitched fresh just for you.
          </p>
        </div>
        <OrderButton />
      </div>

      {/* Category filter */}
      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = f.key === active;
          const href = f.key === "all" ? "/shop" : `/shop?category=${f.key}`;
          return (
            <Link
              key={f.key}
              href={href}
              className={`rounded-full px-5 py-2 text-sm font-extrabold transition ${
                isActive
                  ? "bg-plum text-white shadow-sm"
                  : "bg-paper text-ink/70 hover:bg-sakura/60 hover:text-plum"
              }`}
            >
              {f.label}
            </Link>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-16 text-center text-ink/60">
          Nothing here yet — check back soon! ♡
        </p>
      )}
    </div>
  );
}
