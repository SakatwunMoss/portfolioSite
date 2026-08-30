import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCard } from "@/components/WorkCard";
import { works } from "@/lib/data/works";
import { createPageMetadata, creativeWorksJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Works",
  description:
    "Sakatwun Da M.I.C. のWeb制作実績一覧。Next.js・TypeScript・Supabase・Cloudflare Workersを活用した比較・検索サイトの開発事例を紹介。スマホケース・イヤホン・ラーメン店の比較サイトなどを掲載しています。",
  path: "/works/",
});

export default function WorksPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <JsonLd data={creativeWorksJsonLd(works)} />
      <SectionHeading
        as="h1"
        label="Works"
        title="Web制作実績"
        description="Next.js を使った比較・検索サイトの開発事例です。"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <WorkCard key={work.url} work={work} />
        ))}
      </div>
    </div>
  );
}
