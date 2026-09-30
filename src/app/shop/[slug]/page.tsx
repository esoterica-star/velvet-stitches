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
      <nav className="text-[11px] font-medium uppercase tracking-[0.2em] text-fog">
        <Link href="/shop" className="transition hover:text-rose">
          Shop
        </Link>
        <span className="mx-2.5 text-line">/</span>
        <Link
          href={`/shop?category=${product.category}`}
          className="transition hover:text-rose"
        >
          {categoryLabels[product.category]}
        </Link>
        <span className="mx-2.5 text-line">/</span>
        <span className="text-mist/80">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        {/* Photo */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-rose/20 via-transparent to-wine/40 blur-sm" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-panel-2 shadow-2xl">
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
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-rose">
            {categoryLabels[product.category]}
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight text-mist sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-3 text-lg text-fog">{product.blurb}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="font-serif text-4xl font-semibold text-rose">
              {formatPrice(product)}
            </span>
            <span
              className={`rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                product.status === "sold"
                  ? "border border-line bg-panel-2 text-fog"
                  : product.status === "available"
                    ? "bg-blush text-ink"
                    : "bg-rose text-ink"
              }`}
            >
              {statusLabels[product.status]}
            </span>
          </div>

          <ul className="mt-7 space-y-3 rounded-2xl border border-line bg-panel p-6 text-sm text-mist/85">
            {product.details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span aria-hidden className="text-rose">
                  ✦
                </span>
                {detail}
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm text-fog">
            ⏱ {product.leadTime}
          </p>

          <div className="mt-7">
            {product.status === "sold" ? (
              <OrderButton
                size="lg"
                variant="ghost"
                message={`Hi ${site.name}! I missed out on the ${product.name} — is it coming back, or could I request something similar?`}
              >
                Ask about this one
              </OrderButton>
            ) : (
              <OrderButton
                size="lg"
                message={`Hi ${site.name}! I'd love to order the ${product.name} ✦`}
              >
                Order on Instagram
              </OrderButton>
            )}
          </div>
          <p className="mt-3 text-xs text-fog/80">
            Opens a DM to @{site.instagramHandle} with a pre-filled message —
            we’ll confirm details, payment & delivery there.
          </p>
        </div>
      </div>

      {/* Full description */}
      <section className="mt-14 max-w-2xl">
        <h2 className="font-serif text-2xl font-semibold text-mist">The story</h2>
        <p className="mt-3 leading-relaxed text-fog">{product.description}</p>
      </section>

      {/* Related */}
      <section className="mt-18">
        <h2 className="font-serif text-2xl font-semibold text-mist">
          You might also like
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
