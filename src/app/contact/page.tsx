import type { Metadata } from "next";
import OrderButton from "@/components/OrderButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ & Contact",
  description:
    "Shipping times, care instructions, custom order questions — everything you need to know before ordering.",
};

const faqs: { q: string; a: string }[] = [
  {
    q: "How long does an order take?",
    a: "Ready-to-ship items leave within 2–3 days. Made-to-order pieces take 1–3 weeks depending on size — keychains are quick, big plushies need more couch time.",
  },
  {
    q: "How do I order?",
    a: `Everything runs through Instagram DM! Tap any “Order” button, or DM @${site.instagramHandle} directly with the item name. We'll confirm details, send a payment link, and get stitching.`,
  },
  {
    q: "How do I pay?",
    a: "We send a secure payment link after we confirm your order in DMs — no payment info is ever handled on this website.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes! Worldwide tracked shipping. Rates and delivery times are confirmed in DM before you pay — no surprises.",
  },
  {
    q: "Can I wash my plushie?",
    a: "Spot clean with mild soap and lukewarm water, then air dry. For deeper cleans: a mesh laundry bag, gentle cycle, cold water — but the spot method keeps them happiest.",
  },
  {
    q: "Are they safe for babies and toddlers?",
    a: "Pieces with safety eyes are marked “not suitable for children under 3.” Embroidered-face items are the kid-safe pick — ask in DMs and we'll recommend options.",
  },
  {
    q: "My keychain/car/bag friend looks a little squished after shipping — help?",
    a: "Totally normal! Yarn has travel fluff. Give it a gentle reshape with your fingers and it bounces back within a day.",
  },
  {
    q: "Can I request a character from a game/anime?",
    a: "For personal gifts, absolutely — we're careful not to copy official merchandise designs, and we'll tell you honestly if a request doesn't work.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <p className="font-hand text-2xl text-rosy">✧ good questions ✧</p>
        <h1 className="mt-2 text-4xl font-black text-plum">
          FAQ & Contact
        </h1>
      </div>

      <section className="mt-10 space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-2xl border border-sakura bg-paper px-5 py-4 shadow-sm open:bg-cream"
          >
            <summary className="flex items-center justify-between gap-4 font-extrabold text-ink">
              {faq.q}
              <span
                aria-hidden
                className="shrink-0 text-rosy transition-transform group-open:rotate-45"
              >
                ＋
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">{faq.a}</p>
          </details>
        ))}
      </section>

      <section className="mt-12 rounded-3xl bg-gradient-to-r from-plum to-rosy p-8 text-center text-white sm:p-10">
        <h2 className="text-2xl font-black">Still curious? Just ask! 💌</h2>
        <p className="mx-auto mt-2 max-w-md text-white/85">
          DMs are the fastest way to reach us — usually replied to within 24
          hours (unless we’re mid-marathon with a hook in hand).
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <OrderButton size="lg" variant="light" />
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-13 items-center rounded-full border-2 border-white/40 px-8 font-extrabold text-white transition hover:bg-white/10"
          >
            {site.email}
          </a>
        </div>
      </section>
    </div>
  );
}
