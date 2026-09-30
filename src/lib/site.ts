/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIG — edit THIS file to rebrand the whole website.
 *  Business name, Instagram, email… everything reads from here.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  /** Business name shown in the header, footer, and page titles */
  name: "Hook & Hime",

  /** Short line used under the logo and in meta descriptions */
  tagline: "Handmade crochet keychains & plushies",

  /** Used for SEO / social link previews */
  description:
    "Handmade crochet keychains and plushies with anime energy. Every piece stitched with love, made to order, and ready to become your new favorite buddy.",

  /**
   * Instagram handle WITHOUT the @. Customers order through Instagram DM,
   * so this is the most important line in the file.
   */
  instagramHandle: "yourshopname",
  get instagramUrl() {
    return `https://instagram.com/${this.instagramHandle}`;
  },
  /** Opens a DM chat directly (works on web + app) */
  get dmUrl() {
    return `https://ig.me/m/${this.instagramHandle}`;
  },

  /** Contact email — used by the custom order form */
  email: "hello@yourshop.com",

  /** Currency code for prices (USD, EUR, PHP, JPY, …) */
  currency: "USD",
} as const;

export type Site = typeof site;
