import Image from "next/image";
import Link from "next/link";
import { formatPrice, statusLabels, type Product } from "@/lib/products";

const statusBadge: Record<Product["status"], string> = {
  available: "bg-sage/40 text-ink",
  "made-to-order": "bg-butter/50 text-ink",
  sold: "bg-ink/15 text-ink/60",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className={`group overflow-hidden rounded-3xl border border-sakura bg-paper shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
        product.status === "sold" ? "opacity-75" : ""
      }`}
    >
      <div className="relative aspect-square overflow-hidden bg-sakura/40">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-extrabold ${statusBadge[product.status]}`}
        >
          {statusLabels[product.status]}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-extrabold leading-snug text-ink group-hover:text-rosy">
            {product.name}
          </h3>
          <span className="shrink-0 font-extrabold text-plum">
            {formatPrice(product)}
          </span>
        </div>
        <p className="mt-1.5 line-clamp-2 text-sm text-ink/70">{product.blurb}</p>
      </div>
    </Link>
  );
}
