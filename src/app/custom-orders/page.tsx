import type { Metadata } from "next";
import OrderButton from "@/components/OrderButton";
import CustomOrderForm from "@/components/CustomOrderForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Orders",
  description:
    "Commission a one-of-a-kind crochet keychain or plushie — your favorite character, pet, or inside joke, stitched by hand.",
};

export default function CustomOrdersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <p className="font-hand text-2xl text-rosy">✧ commissions open ✧</p>
        <h1 className="mt-2 text-4xl font-black text-plum">
          Dream it, we’ll crochet it
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">
          Your favorite character, your pet as a plushie, the group chat’s
          inside joke — describe it and it becomes real, one stitch at a time.
        </p>
      </div>

      {/* How commissions work */}
      <section className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          ["💌", "1. Describe it", "Send reference photos, colors, and size. The more detail, the better."],
          ["✍️", "2. Get a quote", "We reply within 48h with price, timeline & a sketch-level plan."],
          ["🧶", "3. Watch it live", "You get progress pics mid-stitch so you can squeal early."],
        ].map(([emoji, title, text]) => (
          <div key={title} className="rounded-3xl bg-paper p-6 shadow-sm">
            <p className="text-2xl" aria-hidden>
              {emoji}
            </p>
            <h2 className="mt-2 font-extrabold text-ink">{title}</h2>
            <p className="mt-1 text-sm text-ink/65">{text}</p>
          </div>
        ))}
      </section>

      <CustomOrderForm />

      <p className="mt-8 text-center text-sm text-ink/60">
        💡 Slots are limited each month — custom orders close when the queue is
        full. Follow @{site.instagramHandle} for slot announcements.
      </p>

      <div className="mt-10 text-center">
        <OrderButton size="lg" />
      </div>
    </div>
  );
}
