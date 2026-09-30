import type { Metadata } from "next";
import OrderButton from "@/components/OrderButton";
import CustomOrderForm from "@/components/CustomOrderForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commissions",
  description:
    "Commission a one-of-a-kind crochet keychain or plushie — your favorite character, pet, or inside joke, stitched by hand in Jeddah.",
};

export default function CustomOrdersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <div className="text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-rose">
          Commissions · open
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-mist sm:text-5xl">
          Dream it, we’ll stitch it
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-fog">
          Your favorite character, your pet as a plushie, the group chat’s
          inside joke — describe it and it becomes real, one stitch at a time.
        </p>
      </div>

      {/* How commissions work */}
      <section className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          ["01", "Describe it", "Send reference photos, colors, and size. The more detail, the better."],
          ["02", "Get a quote", "We reply within 48h with price, timeline & a plan."],
          ["03", "Watch it live", "Progress photos arrive mid-stitch, so you can squeal early."],
        ].map(([step, title, text]) => (
          <div key={step} className="rounded-2xl border border-line bg-panel p-6">
            <span className="font-serif text-2xl font-semibold italic text-rose">
              {step}
            </span>
            <h2 className="mt-2 font-serif text-lg font-semibold text-mist">
              {title}
            </h2>
            <p className="mt-1.5 text-sm text-fog">{text}</p>
          </div>
        ))}
      </section>

      <CustomOrderForm />

      <p className="mt-9 text-center text-sm text-fog">
        Slots are limited each month — commissions close when the queue is
        full. Follow{" "}
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-rose hover:underline"
        >
          @{site.instagramHandle}
        </a>{" "}
        for slot announcements.
      </p>

      <div className="mt-10 text-center">
        <OrderButton size="lg" />
      </div>
    </div>
  );
}
