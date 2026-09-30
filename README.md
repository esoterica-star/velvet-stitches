# 🧶 Crochet Shop Website

Handmade crochet keychain & plushie shop — **Next.js 16 + Tailwind CSS 4 + TypeScript**.

## Run it

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # production build
```

## Make it hers (5-minute setup)

Everything brand-related lives in **two files**:

| File | What to change |
|---|---|
| [`src/lib/site.ts`](src/lib/site.ts) | Business name, Instagram handle, email, currency |
| [`src/lib/products.ts`](src/lib/products.ts) | Products: names, prices, descriptions, photos, status |

### Replace the placeholder photos
The current SVGs are cute placeholders (regenerate with `node scripts/gen-art.mjs`).
For real photos:

1. Add jpg/png/webp files to `public/products/`
2. In `products.ts`, point each product's `image` at the new file, e.g. `"/products/bunny.jpg"`
3. Delete unused `.svg` files

### Where things are
- **Theme & colors** — `src/app/globals.css` (`@theme` block)
- **Header nav / footer links** — `src/components/Header.tsx`, `src/components/Footer.tsx`
- **Pages** — `src/app/page.tsx` (home), `src/app/shop/`, `src/app/about/`, `src/app/custom-orders/`, `src/app/contact/`

## Deploy (free)

1. Push this folder to a GitHub repo
2. Sign in at [vercel.com](https://vercel.com) with GitHub → **Import** the repo
3. Deploy. Then add her custom domain in Vercel settings — HTTPS is automatic.

## Ordering flow

Customers order through **Instagram DMs**: every order button opens a DM chat
(`ig.me/m/<handle>`), product buttons pre-fill the item name, and the custom
order form pre-fills type + idea. Payments happen over DM via the payment
method of her choice — the website never handles payment info.
