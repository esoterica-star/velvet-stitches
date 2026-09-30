import type { ReactNode } from "react";
import { site } from "@/lib/site";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[11px]",
  md: "h-11 px-6 text-[12px]",
  lg: "h-12 px-8 text-[13px]",
};

const variants = {
  primary: "bg-rose text-ink hover:bg-rosedeep hover:text-mist",
  /** Outlined, for secondary positions */
  ghost: "border border-line text-mist hover:border-rose hover:text-rose",
  /** For sitting on rose/gradient backgrounds */
  light: "bg-ink text-mist hover:bg-panel-2",
};

/**
 * The one button to rule them all — sends customers to Instagram DM.
 * Reads the handle from site config, so it's always up to date.
 */
export default function OrderButton({
  children,
  size = "md",
  variant = "primary",
  className = "",
  message,
}: {
  children?: ReactNode;
  size?: Size;
  variant?: keyof typeof variants;
  className?: string;
  /** Pre-fills the DM with a message (URL-encoded text) */
  message?: string;
}) {
  const href = message
    ? `${site.dmUrl}?text=${encodeURIComponent(message)}`
    : site.dmUrl;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.14em] transition active:scale-[0.98] ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <span aria-hidden>✦</span>
      {children ?? "Order on Instagram"}
    </a>
  );
}
