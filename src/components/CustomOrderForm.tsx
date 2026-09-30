"use client";

import { useState } from "react";
import OrderButton from "@/components/OrderButton";
import { site } from "@/lib/site";

const typePrices = {
  keychain: "$14–20",
  plushie: "$42–70",
  unsure: "Depends on size!",
} as const;

type OrderType = keyof typeof typePrices;

export default function CustomOrderForm() {
  const [type, setType] = useState<OrderType>("keychain");
  const [idea, setIdea] = useState("");

  const dmText = [
    `Hi ${site.name}! I'd love a custom order ✨`,
    type !== "unsure" ? `Type: custom ${type}` : "Type: not sure yet",
    idea ? `Idea: ${idea}` : "",
    "(sent from your website's custom order form)",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <section className="mt-12 rounded-3xl border border-sakura bg-paper p-6 shadow-sm sm:p-10">
      <h2 className="text-2xl font-black text-plum">Start your request</h2>
      <p className="mt-1 text-sm text-ink/60">
        Fill this in and we’ll open Instagram with your message ready to send.
      </p>

      <fieldset className="mt-6">
        <legend className="text-sm font-extrabold uppercase tracking-wider text-ink/50">
          What do you have in mind?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {(Object.keys(typePrices) as OrderType[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setType(key)}
              className={`rounded-full px-5 py-2.5 text-sm font-extrabold transition ${
                type === key
                  ? "bg-plum text-white shadow-sm"
                  : "bg-cream text-ink/70 hover:bg-sakura/60 hover:text-plum"
              }`}
            >
              {key === "keychain"
                ? "🔑 Keychain"
                : key === "plushie"
                  ? "🧸 Plushie"
                  : "💭 Not sure yet"}
            </button>
          ))}
        </div>
        <p className="mt-2 text-sm text-ink/55">
          Typical range: <span className="font-bold text-plum">{typePrices[type]}</span>
        </p>
      </fieldset>

      <label className="mt-6 block">
        <span className="text-sm font-extrabold uppercase tracking-wider text-ink/50">
          Tell us the idea
        </span>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          rows={4}
          placeholder="e.g. A sleeping black cat with a tiny witch hat, keychain size, pastel purple accents…"
          className="mt-2 w-full resize-y rounded-2xl border-2 border-sakura bg-cream px-4 py-3 text-ink outline-none transition placeholder:text-ink/35 focus:border-rose"
        />
      </label>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <OrderButton size="lg" message={dmText}>
          Send my idea on IG
        </OrderButton>
        <p className="text-xs text-ink/50">
          No account yet? Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-bold underline hover:text-rosy"
          >
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}
