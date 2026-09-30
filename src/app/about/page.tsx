import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import OrderButton from "@/components/OrderButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Velvet Stitch — a crochet artist in Jeddah making pieces that reflect your personality.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-fog">
            Our story
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-mist sm:text-5xl">
            Behind every stitch is a patient pair of hands.
          </h1>

          <div className="mt-7 space-y-4 leading-relaxed text-fog">
            <p>
              {site.name} began the way most obsessions do — one hook, one
              skein of yarn, and a quiet “I could make that.” The first piece
              was imperfect. The second was better. The third never made it to
              the shelf; a friend claimed it before it was finished.
            </p>
            <p>
              Everything is still made the same way today: counted stitches,
              embroidered faces, and exactly enough stuffing for the perfect
              squish. Anime nights and yarn shipments arrive together, and
              both get put to good use.
            </p>
            <p>
              Whether it’s a keychain buddy for your bag or a desk-sized
              companion for late-night study sessions, each piece leaves with
              a little of that first-night magic.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <OrderButton size="lg" />
            <Link
              href="/custom-orders"
              className="inline-flex h-12 items-center rounded-full border border-line px-8 text-[13px] font-medium uppercase tracking-[0.16em] text-mist transition hover:border-rose hover:text-rose"
            >
              Commission a piece
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-wine/40 via-transparent to-rose/20 blur-sm" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line shadow-2xl">
            <Image
              src="/products/shiba.svg"
              alt="Crochet shiba plush made in the studio"
              width={800}
              height={800}
              className="h-auto w-full"
            />
          </div>
          <p className="absolute -bottom-4 right-6 rounded-full border border-line bg-panel px-4 py-1.5 font-serif text-sm italic text-rose shadow-lg">
            the studio · Jeddah
          </p>
        </div>
      </div>

      <section className="mt-18 grid gap-6 sm:grid-cols-3">
        {[
          ["Every stitch counted", "No glue guns, no shortcuts — real crochet, real time."],
          ["Tested by friends", "Each pattern gets squished, dropped, and napped on first."],
          ["Giftable by default", "Every order is hand-packed like it matters — because it does."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-line bg-panel p-6">
            <p className="text-rose" aria-hidden>✦</p>
            <h2 className="mt-2 font-serif text-lg font-semibold text-mist">{title}</h2>
            <p className="mt-1.5 text-sm text-fog">{text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
