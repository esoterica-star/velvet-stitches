/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIG — edit THIS file to rebrand the whole website.
 *  Business name, Instagram, email… everything reads from here.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  /** Business name shown in the header, footer, and page titles */
  name: "Velvet Stitch",

  /** From her Instagram bio */
  tagline: "Handmade creations that reflect your personality",

  /** Used for SEO / social link previews */
  description:
    "Velvet Stitch — handmade crochet keychains & plushies in Jeddah, KSA. Creations that reflect your personality, stitched with love and made to order.",

  /** Based in Jeddah, Saudi Arabia — local delivery 5–20 SAR */
  city: "Jeddah, KSA",
  deliveryNote: "Delivery within Jeddah · 5–20 SAR by area",

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
