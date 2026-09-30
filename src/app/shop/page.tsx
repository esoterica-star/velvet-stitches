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
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-fog">
            かぎ針編み · the shop
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-mist sm:text-5xl">
            Pick your next companion
          </h1>
          <p className="mt-3 max-w-lg text-fog">
            Every pal is made by hand. Ready-to-ship pieces leave within days;
            made-to-order ones are stitched fresh just for you.
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
              className={`rounded-full px-5 py-2 text-[12px] font-medium uppercase tracking-[0.14em] transition ${
                isActive
                  ? "bg-rose text-ink"
                  : "border border-line bg-panel text-fog hover:border-rose/60 hover:text-mist"
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
        <p className="mt-16 text-center text-fog">
          Nothing here yet — check back soon.
        </p>
      )}
    </div>
  );
}
