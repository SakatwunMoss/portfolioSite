import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCard } from "@/components/WorkCard";
import { works } from "@/lib/data/works";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Sakatwun Da M.I.C. のWeb制作実績。比較・検索サイトの開発事例を紹介しています。",
};

export default function WorksPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading
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
