import type { ReactNode } from "react";
import { site } from "@/lib/site";

type Size = "sm" | "md" | "lg";
type Channel = "instagram" | "whatsapp";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[11px]",
  md: "h-11 px-6 text-[12px]",
  lg: "h-12 px-8 text-[13px]",
};

const variants = {
  primary: "bg-accent text-ink hover:bg-mist",
  /** Outlined, for secondary positions */
  ghost: "border border-line text-mist hover:border-accent hover:text-accent",
  /** For sitting on accent backgrounds */
  light: "bg-ink text-mist hover:bg-panel-2",
};

function channelHref(channel: Channel, message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  if (channel === "whatsapp" && site.whatsappUrl) {
    return `${site.whatsappUrl}${text}`;
  }
  return `${site.dmUrl}${text}`;
}

const defaultLabels: Record<Channel, string> = {
  instagram: "Order on Instagram",
  whatsapp: "Order on WhatsApp",
};

/**
 * The one button to rule them all — sends customers to the ordering
 * channel. WhatsApp appears when a number is set in site.ts;
 * otherwise everything falls back to Instagram DM automatically.
 */
export default function OrderButton({
  children,
  size = "md",
  variant = "primary",
  channel = "instagram",
  className = "",
  message,
}: {
  children?: ReactNode;
  size?: Size;
  variant?: keyof typeof variants;
  channel?: Channel;
  className?: string;
  /** Pre-fills the chat with a message (URL-encoded text) */
  message?: string;
}) {
  return (
    <a
      href={channelHref(channel, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex shrink-0 items-center justify-center gap-2 font-mono font-medium uppercase tracking-[0.18em] transition active:scale-[0.98] ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <span aria-hidden>✦</span>
      {children ?? defaultLabels[channel]}
    </a>
  );
}
