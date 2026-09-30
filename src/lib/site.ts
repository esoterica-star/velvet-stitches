/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIG — edit THIS file to rebrand the whole website.
 *  Business name, Instagram, WhatsApp, email… everything reads
 *  from here.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  /** Business name shown in the header, footer, and page titles */
  name: "Velvet Stitch",

  /** From her Instagram bio */
  tagline: "Handmade creations that reflect your personality",

  /** Used for SEO / social link previews */
  description:
    "Velvet Stitch — home-based crochet studio in Jeddah, KSA. Handmade keychains & plushies that reflect your personality, stitched with love and made to order.",

  /** Home-based studio, not a storefront — address shared in DMs */
  city: "Jeddah, KSA",
  deliveryNote: "Delivery within Jeddah · 5–20 SAR by area",
  addressNote: "Home-based studio — address details are shared in DM after your order is confirmed.",

  /**
   * Instagram handle WITHOUT the @. Customers order through Instagram DM,
   * so this is the most important line in the file.
   */
  instagramHandle: "velvet_stitch_store",
  get instagramUrl() {
    return `https://instagram.com/${this.instagramHandle}`;
  },
  /** Opens a DM chat directly (works on web + app) */
  get dmUrl() {
    return `https://ig.me/m/${this.instagramHandle}`;
  },

  /**
   * WhatsApp number in international format, DIGITS ONLY
   * (e.g. "9665XXXXXXXX" for a Saudi number). Ask her for the
   * number, paste it here, and every WhatsApp button appears
   * automatically. Leave "" to hide WhatsApp everywhere.
   */
  whatsappNumber: "",
  get whatsappDigits() {
    return this.whatsappNumber.replace(/\D/g, "");
  },
  get whatsappUrl(): string | null {
    return this.whatsappDigits
      ? `https://wa.me/${this.whatsappDigits}`
      : null;
  },
  get hasWhatsapp() {
    return this.whatsappDigits.length > 0;
  },

  /** TikTok handle WITHOUT the @ */
  tiktokHandle: "velvetstitch.store",
  get tiktokUrl() {
    return `https://www.tiktok.com/@${this.tiktokHandle}`;
  },

  /** Contact email — used by the custom order form */
  email: "hello@velvetstitch.store",

  /** Currency code for prices (SAR, USD, EUR, …) */
  currency: "SAR",
} as const;

export type Site = typeof site;
