import Link from "next/link";
import { MusicCard } from "@/components/MusicCard";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCard } from "@/components/WorkCard";
import { tracks } from "@/lib/data/music";
import { works } from "@/lib/data/works";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-soft/60 to-cream" />
        <div className="relative mx-auto max-w-5xl px-5 py-16 md:py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-sage">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            {siteConfig.author.name}
          </h1>
          <p className="mt-3 text-lg text-sage-dark">
            {siteConfig.author.role}
          </p>
          <p className="mt-6 max-w-md leading-relaxed text-ink-muted">
            音楽とWeb開発の両方で活動しています。配信楽曲の制作から、Next.jsを使った比較・検索サイトの開発まで。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/music/"
              className="rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sage-dark"
            >
              Music
            </Link>
            <Link
              href="/works/"
              className="rounded-full border border-sage/30 bg-white px-5 py-2.5 text-sm font-medium text-sage-dark transition hover:border-sage hover:bg-sage/5"
            >
              Works
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <SectionHeading
          label="Music"
          title="配信楽曲"
          description="nodee / LinkCore 経由で配信中の楽曲です。"
        />
        <div className="grid gap-10 md:grid-cols-2">
          {tracks.slice(0, 2).map((track) => (
            <MusicCard key={track.id} track={track} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/music/"
            className="text-sm font-medium text-sage-dark underline-offset-4 hover:underline"
          >
            すべての楽曲を見る →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <SectionHeading
          label="Works"
          title="Web制作実績"
          description="Next.js を中心に構築した比較・検索サイトです。"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {works.map((work) => (
            <WorkCard key={work.url} work={work} />
          ))}
        </div>
      </section>
    </>
  );
}
