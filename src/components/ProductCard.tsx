import Image from "next/image";
import Link from "next/link";
import { formatPrice, statusLabels, type Product } from "@/lib/products";

const statusBadge: Record<Product["status"], string> = {
  available: "bg-accent text-ink",
  "made-to-order": "border border-line bg-ink/80 text-mist",
  sold: "border border-line/60 bg-ink/80 text-fog",
};

/** Image-first tile: the photo IS the card. Name + price sit on the image. */
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className={`group relative block overflow-hidden rounded-lg border border-line bg-panel transition duration-300 hover:-translate-y-1 hover:border-accent/70 ${
        product.status === "sold" ? "opacity-60" : ""
      }`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-panel-2">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {/* bottom gradient so the label always reads */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-transparent" />

        <span
          className={`absolute left-3 top-3 px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.18em] ${statusBadge[product.status]}`}
        >
          {statusLabels[product.status]}
        </span>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
          <h3 className="font-serif text-lg font-semibold leading-tight text-mist transition-colors group-hover:text-accent">
            {product.name}
          </h3>
          <span className="shrink-0 font-mono text-sm font-medium text-accent">
            {formatPrice(product)}
          </span>
        </div>
      </div>
    </Link>
  );
}
