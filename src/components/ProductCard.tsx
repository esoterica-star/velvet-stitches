import Image from "next/image";
import Link from "next/link";
import { formatPrice, statusLabels, type Product } from "@/lib/products";

const statusBadge: Record<Product["status"], string> = {
  available: "bg-blush text-ink",
  "made-to-order": "bg-rose text-ink",
  sold: "bg-panel-2 text-fog border border-line",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className={`group overflow-hidden rounded-2xl border border-line bg-panel transition duration-300 hover:-translate-y-1 hover:border-rose/60 hover:shadow-[0_20px_50px_-20px_rgba(227,156,184,0.25)] ${
        product.status === "sold" ? "opacity-70" : ""
      }`}
    >
      <div className="relative aspect-square overflow-hidden bg-panel-2">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${statusBadge[product.status]}`}
        >
          {statusLabels[product.status]}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-lg font-semibold leading-snug text-mist transition-colors group-hover:text-rose">
            {product.name}
          </h3>
          <span className="shrink-0 font-serif text-lg font-semibold text-rose">
            {formatPrice(product)}
          </span>
        </div>
        <p className="mt-1.5 line-clamp-2 text-sm text-fog">{product.blurb}</p>
      </div>
    </Link>
  );
}
