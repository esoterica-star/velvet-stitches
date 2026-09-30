import type { ReactNode } from "react";
import { site } from "@/lib/site";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

const variants = {
  primary:
    "bg-gradient-to-r from-rose to-rosy text-white hover:brightness-105",
  /** For sitting on dark/gradient backgrounds */
  light: "bg-paper text-plum hover:bg-sakura",
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
      className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-extrabold shadow-sm transition active:scale-[0.98] ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <span aria-hidden>📩</span>
      {children ?? "Order via Instagram"}
    </a>
  );
}
