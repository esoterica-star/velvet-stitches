"use client";

import { useState } from "react";
import OrderButton from "@/components/OrderButton";
import { site } from "@/lib/site";

const typePrices = {
  keychain: "SAR 20–30",
  plushie: "SAR 85–140",
  unsure: "Depends on size!",
} as const;

type OrderType = keyof typeof typePrices;

export default function CustomOrderForm() {
  const [type, setType] = useState<OrderType>("keychain");
  const [idea, setIdea] = useState("");

  const dmText = [
    `Hi ${site.name}! I'd love a custom order ✦`,
    type !== "unsure" ? `Type: custom ${type}` : "Type: not sure yet",
    idea ? `Idea: ${idea}` : "",
    "(sent from your website's commission form)",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <section className="mt-14 rounded-2xl border border-line bg-panel p-6 sm:p-10">
      <h2 className="font-serif text-2xl font-semibold text-mist">
        Start your request
      </h2>
      <p className="mt-1.5 text-sm text-fog">
        Fill this in and Instagram opens with your message ready to send.
      </p>

      <fieldset className="mt-7">
        <legend className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fog">
          What do you have in mind?
        </legend>
        <div className="mt-3.5 flex flex-wrap gap-2.5">
          {(Object.keys(typePrices) as OrderType[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setType(key)}
              className={`rounded-full px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.12em] transition ${
                type === key
                  ? "bg-rose text-ink"
                  : "border border-line text-fog hover:border-rose/60 hover:text-mist"
              }`}
            >
              {key === "keychain"
                ? "Keychain"
                : key === "plushie"
                  ? "Plushie"
                  : "Not sure yet"}
            </button>
          ))}
        </div>
        <p className="mt-2.5 text-sm text-fog">
          Typical range:{" "}
          <span className="font-serif text-base font-semibold text-rose">
            {typePrices[type]}
          </span>
        </p>
      </fieldset>

      <label className="mt-7 block">
        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fog">
          Tell us the idea
        </span>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          rows={4}
          placeholder="e.g. A sleeping black cat with a tiny witch hat, keychain size, pastel purple accents…"
          className="mt-2.5 w-full resize-y rounded-xl border border-line bg-ink px-4 py-3 text-mist outline-none transition placeholder:text-fog/50 focus:border-rose"
        />
      </label>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <OrderButton size="lg" message={dmText}>
          Send my idea on IG
        </OrderButton>
        <p className="text-xs text-fog">
          Prefer email?{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-rose underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}
