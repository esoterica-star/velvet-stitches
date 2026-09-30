import type { Metadata } from "next";
import OrderButton from "@/components/OrderButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ & Contact",
  description:
    "Delivery times, care instructions, commission questions — everything you need to know before ordering from Velvet Stitch.",
};

const faqs: { q: string; a: string }[] = [
  {
    q: "How long does an order take?",
    a: "Ready-to-ship pieces leave within 2–3 days. Made-to-order pieces take 1–3 weeks depending on size — keychains are quick, big plushies need more couch time.",
  },
  {
    q: "How do I order?",
    a: `Everything runs through Instagram DM! Tap any “Order” button, or message @${site.instagramHandle} directly with the item name. We confirm details, send a payment link, and start stitching.`,
  },
  {
    q: "How does delivery work?",
    a: `Delivery is within ${site.city} only — ${site.deliveryNote}. We confirm the exact cost for your area in DMs before payment.`,
  },
  {
    q: "How do I pay?",
    a: "We send a secure payment link after confirming your order in DMs — no payment info is ever handled on this website.",
  },
  {
    q: "Can I wash my plushie?",
    a: "Spot clean with mild soap and lukewarm water, then air dry. For deeper cleans: mesh laundry bag, gentle cycle, cold water — but the spot method keeps them happiest.",
  },
  {
    q: "Are they safe for babies and toddlers?",
    a: "Pieces with safety eyes are marked “not suitable for children under 3.” Embroidered-face pieces are the kid-safe pick — ask in DMs and we'll recommend options.",
  },
  {
    q: "My keychain looks a little squished after delivery — help?",
    a: "Totally normal! Yarn has travel fluff. Gently reshape it with your fingers and it bounces back within a day.",
  },
  {
    q: "Can I request a character from a game or anime?",
    a: "For personal gifts, absolutely — we're careful not to copy official merchandise designs, and we'll tell you honestly if a request doesn't work.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <div className="text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-fog">
          Good questions
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-mist sm:text-5xl">
          FAQ & Contact
        </h1>
      </div>

      <section className="mt-10 space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-xl border border-line bg-panel px-5 py-4 transition open:border-rose/40"
          >
            <summary className="flex items-center justify-between gap-4 font-serif text-lg font-semibold text-mist">
              {faq.q}
              <span
                aria-hidden
                className="shrink-0 text-rose transition-transform group-open:rotate-45"
              >
                ＋
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-fog">{faq.a}</p>
          </details>
        ))}
      </section>

      <section className="mt-14 rounded-2xl border border-rose/30 bg-gradient-to-br from-wine/60 via-panel to-panel p-8 text-center sm:p-10">
        <h2 className="font-serif text-3xl font-semibold text-mist">
          Still curious? Just ask.
        </h2>
        <p className="mx-auto mt-2.5 max-w-md text-fog">
          DMs are the fastest way to reach us — usually replied to within 24
          hours (unless we’re mid-marathon with a hook in hand).
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <OrderButton size="lg" />
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-12 items-center rounded-full border border-line px-8 text-[13px] font-medium uppercase tracking-[0.16em] text-mist transition hover:border-rose hover:text-rose"
          >
            {site.email}
          </a>
        </div>
      </section>
    </div>
  );
}
