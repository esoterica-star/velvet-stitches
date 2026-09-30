"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/**
 * Movie-studio intro: a crochet hook works a stitch, the yarn draws
 * itself in, the wordmark appears — then the whole overlay fades away.
 * Plays once per browser session; skipped for reduced-motion users.
 */
export default function IntroLoader() {
  const [phase, setPhase] = useState<"hidden" | "playing" | "fading">("hidden");

  useEffect(() => {
    const seen = sessionStorage.getItem("vs-intro");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) return;

    document.documentElement.style.overflow = "hidden";
    setPhase("playing");

    const fadeTimer = setTimeout(() => setPhase("fading"), 2200);
    const doneTimer = setTimeout(() => {
      setPhase("hidden");
      sessionStorage.setItem("vs-intro", "1");
      document.documentElement.style.overflow = "";
    }, 2950);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-ink transition-opacity duration-700 ease-out ${
        phase === "fading" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* soft rose glow behind the hook */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/10 blur-3xl" />

      {/* letterbox hairlines, movie-credits style */}
      <div className="absolute inset-x-0 top-0 h-px bg-line" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-line" />

      <div className="flex flex-col items-center px-6 text-center">
        <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none">
          {/* the yarn thread being pulled through */}
          <path
            className="vs-yarn"
            d="M18 86 C 34 108, 86 108, 102 84"
            pathLength={1}
            stroke="var(--color-rose)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* the hook at work */}
          <g className="vs-hook">
            <path
              d="M60 18 V 66"
              stroke="var(--color-silver)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M60 66 C 60 82, 76 84, 80 72"
              stroke="var(--color-silver)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <circle
              cx="60"
              cy="12"
              r="4.5"
              stroke="var(--color-silver)"
              strokeWidth="4"
            />
          </g>
        </svg>

        <p className="vs-wordmark mt-8 font-serif text-3xl font-semibold uppercase tracking-[0.35em] text-mist">
          {site.name}
        </p>
        <p className="vs-sub mt-3 text-[11px] uppercase tracking-[0.5em] text-fog">
          かぎ針編み · Jeddah
        </p>
        <span className="vs-sparkle mt-2 text-lg text-rose">✦</span>
      </div>
    </div>
  );
}
