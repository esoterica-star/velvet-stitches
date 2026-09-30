import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import OrderButton from "@/components/OrderButton";
import ProductCard from "@/components/ProductCard";
import { categoryLabels, formatPrice, getProduct, products, relatedProducts, statusLabels } from "@/lib/products";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found" };
  return {
    title: product.name,
    description: product.blurb,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = relatedProducts(product);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      {/* Breadcrumb */}
      <nav className="text-sm font-semibold text-ink/55">
        <Link href="/shop" className="hover:text-rosy">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/shop?category=${product.category}`}
          className="hover:text-rosy"
        >
          {categoryLabels[product.category]}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink/80">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        {/* Photo */}
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-20 w-20 rotate-12 rounded-3xl bg-butter/50" />
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-paper bg-sakura/40 shadow-lg">
            <Image
              src={product.image}
              alt={product.imageAlt}
              width={800}
              height={800}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <p className="font-hand text-2xl text-rosy">
            ✧ {categoryLabels[product.category]} ✧
          </p>
          <h1 className="mt-1 text-4xl font-black leading-tight text-plum">
            {product.name}
          </h1>
          <p className="mt-3 text-lg text-ink/75">{product.blurb}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="text-3xl font-black text-plum">
              {formatPrice(product)}
            </span>
            <span
              className={`rounded-full px-3.5 py-1.5 text-xs font-extrabold ${
                product.status === "sold"
                  ? "bg-ink/15 text-ink/60"
                  : product.status === "available"
                    ? "bg-sage/40 text-ink"
                    : "bg-butter/50 text-ink"
              }`}
            >
              {statusLabels[product.status]}
            </span>
          </div>

          <ul className="mt-6 space-y-2.5 rounded-3xl bg-paper p-6 text-sm text-ink/80 shadow-sm">
            {product.details.map((detail) => (
              <li key={detail} className="flex gap-2.5">
                <span aria-hidden className="text-rosy">
                  ✿
                </span>
                {detail}
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm font-semibold text-ink/60">
            ⏱ {product.leadTime}
          </p>

          <div className="mt-6">
            {product.status === "sold" ? (
              <OrderButton
                size="lg"
                className="opacity-90"
                message={`Hi ${site.name}! I missed out on the ${product.name} 😢 Is it coming back, or could I request something similar?`}
              >
                Ask about this one
              </OrderButton>
            ) : (
              <OrderButton
                size="lg"
                message={`Hi ${site.name}! I'd love to order the ${product.name} ✨`}
              >
                Order this pal on IG
              </OrderButton>
            )}
          </div>
          <p className="mt-3 text-xs text-ink/50">
            Opens a DM to @{site.instagramHandle} with a pre-filled message —
            we’ll confirm details, payment & shipping there.
          </p>
        </div>
      </div>

      {/* Full description */}
      <section className="mt-12 max-w-2xl">
        <h2 className="text-2xl font-black text-plum">The story</h2>
        <p className="mt-3 leading-relaxed text-ink/75">{product.description}</p>
      </section>

      {/* Related */}
      <section className="mt-16">
        <h2 className="text-2xl font-black text-plum">
          You might also love ♡
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
