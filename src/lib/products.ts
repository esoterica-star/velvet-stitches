import { site } from "./site";

export type Category = "keychains" | "plushies";

export type ProductStatus = "available" | "made-to-order" | "sold";

export type Product = {
  /** URL segment, e.g. /shop/bunny-buddy-keychain */
  slug: string;
  name: string;
  category: Category;
  price: number;
  blurb: string;
  description: string;
  /** Bullet list shown on the product page */
  details: string[];
  leadTime: string;
  /** Path under /public */
  image: string;
  imageAlt: string;
  status: ProductStatus;
};

export const categoryLabels: Record<Category, string> = {
  keychains: "Keychains",
  plushies: "Plushies",
};

/**
 * ─────────────────────────────────────────────────────────────
 *  PRODUCTS — add, edit, or remove items here.
 *  To add a product: drop a photo in /public/products and add
 *  an entry below. The shop, product pages, and home page all
 *  update automatically.
 * ─────────────────────────────────────────────────────────────
 */
export const products: Product[] = [
  {
    slug: "bunny-buddy-keychain",
    name: "Bunny Buddy Keychain",
    category: "keychains",
    price: 20,
    blurb: "A pocket-sized pal with the softest ears.",
    description:
      "This lil’ bunny hangs on your bag and judges no one. Perfectly palm-sized with floppy ears and a tiny stitched nose — the buddy that goes everywhere you do.",
    details: [
      "Approx. 8 cm tall (plus ears!)",
      "Soft acrylic yarn, polyester filling",
      "Sturdy lobster-claw clasp + keyring",
      "Safety eyes — not suitable for children under 3",
    ],
    leadTime: "Made to order · ready in 1–2 weeks",
    image: "/products/bunny-keychain.svg",
    imageAlt: "Crochet bunny keychain with floppy ears on a pink background",
    status: "available",
  },
  {
    slug: "strawberry-cow-keychain",
    name: "Strawberry Cow Keychain",
    category: "keychains",
    price: 25,
    blurb: "Moo. But make it berry cute.",
    description:
      "The internet’s favorite cow, crocheted. Strawberry-pink patches, tiny horns, and a face that says “I love you” in moo.",
    details: [
      "Approx. 8 cm tall",
      "Cotton-blend yarn, polyester filling",
      "Sturdy lobster-claw clasp + keyring",
      "Embroidered face — great for kids",
    ],
    leadTime: "Made to order · ready in 1–2 weeks",
    image: "/products/strawberry-cow.svg",
    imageAlt: "Crochet strawberry cow keychain with pink patches",
    status: "made-to-order",
  },
  {
    slug: "star-dragon-keychain",
    name: "Star Dragon Keychain",
    category: "keychains",
    price: 28,
    blurb: "A tiny guardian for your keys.",
    description:
      "Part dragon, part star, fully adorable. With little wings and chubby cheeks, this guardian watches over your keys like it’s protecting a magical kingdom.",
    details: [
      "Approx. 8 cm tall",
      "Sparkle acrylic yarn, polyester filling",
      "Sturdy lobster-claw clasp + keyring",
      "Safety eyes — not suitable for children under 3",
    ],
    leadTime: "Made to order · ready in 1–2 weeks",
    image: "/products/star-dragon.svg",
    imageAlt: "Crochet purple star dragon keychain with tiny wings",
    status: "sold",
  },
  {
    slug: "matcha-frog-keychain",
    name: "Matcha Frog Keychain",
    category: "keychains",
    price: 20,
    blurb: "Hoppy, calm, and full of matcha energy.",
    description:
      "A serene little frog with a leaf hat, for people whose personality is 50% matcha latte. Brings good vibes and small hops to any bag.",
    details: [
      "Approx. 7 cm tall",
      "Cotton yarn, polyester filling",
      "Sturdy lobster-claw clasp + keyring",
      "Embroidered face — great for kids",
    ],
    leadTime: "Ready for delivery · 2–3 days",
    image: "/products/matcha-frog.svg",
    imageAlt: "Crochet green frog keychain with a leaf on its head",
    status: "available",
  },
  {
    slug: "cloud-cat-plush",
    name: "Cloud Cat Plush",
    category: "plushies",
    price: 85,
    blurb: "A sleeping cat. On a cloud. That’s it, that’s the tweet.",
    description:
      "The softest nap you’ll ever witness. This sleepy kitty curls up on its own crochet cloud — ideal for desks, beds, and emotional support during anime marathons.",
    details: [
      "Approx. 25 cm wide",
      "Extra-soft chenille + acrylic yarn",
      "Weighted slightly at the bottom to sit nicely",
      "Embroidered face — safe for all ages",
    ],
    leadTime: "Made to order · ready in 2–3 weeks",
    image: "/products/cloud-cat.svg",
    imageAlt: "Crochet cat sleeping on a cloud plush",
    status: "made-to-order",
  },
  {
    slug: "axolotl-pal-plush",
    name: "Axolotl Pal Plush",
    category: "plushies",
    price: 95,
    blurb: "Forever smiling, always pink.",
    description:
      "Nature’s happiest creature, now in huggable form. With frilly gills and a permanent smile, this axolotl has never had a bad day and it shows.",
    details: [
      "Approx. 30 cm long",
      "Soft acrylic yarn, polyester filling",
      "Frilled gills in two pink shades",
      "Safety eyes — not suitable for children under 3",
    ],
    leadTime: "Made to order · ready in 2–3 weeks",
    image: "/products/axolotl.svg",
    imageAlt: "Crochet pink axolotl plush with frilly gills",
    status: "available",
  },
  {
    slug: "shiba-sensei-plush",
    name: "Shiba Sensei Plush",
    category: "plushies",
    price: 110,
    blurb: "Wise. Fluffy. Slightly smug.",
    description:
      "The shiba knows something you don’t. A rounded, huggable shiba with a curly tail and the confidence of someone who has never once chased their own tail.",
    details: [
      "Approx. 28 cm tall",
      "Acrylic yarn in shiba orange & cream",
      "Curly tail + embroidered muzzle",
      "Safety eyes — not suitable for children under 3",
    ],
    leadTime: "Made to order · ready in 2–3 weeks",
    image: "/products/shiba.svg",
    imageAlt: "Crochet shiba inu plush with a curly tail",
    status: "made-to-order",
  },
  {
    slug: "ghost-buddy-keychain",
    name: "Ghost Buddy Keychain",
    category: "keychains",
    price: 22,
    blurb: "Spooky? No. Adorable? Extremely.",
    description:
      "A friendly little ghost that floats behind you (on your bag). Happy eyes, wavy tail, zero jump scares — the perfect year-round pal.",
    details: [
      "Approx. 7 cm tall",
      "Soft acrylic yarn, polyester filling",
      "Sturdy lobster-claw clasp + keyring",
      "Embroidered face — great for kids",
    ],
    leadTime: "Ready for delivery · 2–3 days",
    image: "/products/ghost.svg",
    imageAlt: "Crochet white ghost keychain with a happy face",
    status: "available",
  },
];

export const statusLabels: Record<ProductStatus, string> = {
  available: "Ready to ship",
  "made-to-order": "Made to order",
  sold: "Sold",
};

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: site.currency,
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export function formatPrice(product: Product): string {
  return priceFormatter.format(product.price);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(product: Product, count = 3): Product[] {
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  );
  const others = products.filter(
    (p) => p.category !== product.category && p.slug !== product.slug,
  );
  return [...sameCategory, ...others].slice(0, count);
}
