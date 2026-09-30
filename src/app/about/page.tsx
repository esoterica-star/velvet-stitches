import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import OrderButton from "@/components/OrderButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind the hook — how a love of anime and yarn turned into tiny crocheted friends.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="font-hand text-2xl text-rosy">✧ hi, hello, hey ✧</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-plum">
            Behind every stitch is a very caffeinated human.
          </h1>

          <div className="mt-6 space-y-4 leading-relaxed text-ink/75">
            <p>
              {site.name} started the way most obsessions do: one “I could
              totally make that” at 2am, a hook, and a skein of pink yarn. The
              first bunny looked slightly cursed. The second one? Cute. The
              third? Gone in a day — a friend claimed it before it was even
              finished.
            </p>
            <p>
              Now every piece is still made entirely by hand: counted
              stitches, embroidered faces, and just enough stuffing for maximum
              squish. Anime marathons and plushie engineering go hand in hand
              around here.
            </p>
            <p>
              Whether it’s a keychain buddy for your bag or a desk-sized
              axolotl for emotional support during finals week — each pal
              leaves with a little bit of that 2am magic. ♡
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <OrderButton size="lg" />
            <Link
              href="/custom-orders"
              className="inline-flex h-13 items-center rounded-full border-2 border-plum/25 px-8 text-base font-extrabold text-plum transition hover:border-plum/50 hover:bg-paper"
            >
              Commission a custom pal
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -right-5 -top-5 h-24 w-24 -rotate-6 rounded-3xl bg-sakura/80" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-paper shadow-xl">
            <Image
              src="/products/shiba.svg"
              alt="Crochet shiba plush made in the studio"
              width={800}
              height={800}
              className="h-auto w-full"
            />
          </div>
          <p className="absolute -bottom-5 right-8 rotate-2 rounded-full bg-paper px-4 py-1.5 font-hand text-xl text-plum shadow-md">
            the studio ✦ (it’s the couch)
          </p>
        </div>
      </div>

      <section className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          ["🧶", "Every stitch counted", "No glue guns, no shortcuts — real crochet, real time."],
          ["📐", "Tested by friends", "Each pattern gets squished, dropped, and napped on first."],
          ["🎁", "Giftable by default", "Every order ships in packaging you won’t want to throw away."],
        ].map(([emoji, title, text]) => (
          <div key={title} className="rounded-3xl bg-paper p-6 shadow-sm">
            <p className="text-2xl" aria-hidden>{emoji}</p>
            <h2 className="mt-2 font-extrabold text-ink">{title}</h2>
            <p className="mt-1 text-sm text-ink/65">{text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
