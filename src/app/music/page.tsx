import type { Metadata } from "next";
import { MusicCard } from "@/components/MusicCard";
import { SectionHeading } from "@/components/SectionHeading";
import { tracks } from "@/lib/data/music";

export const metadata: Metadata = {
  title: "Music",
  description: "Sakatwun Da M.I.C. の配信楽曲一覧。nodee / LinkCore プレイヤーで試聴できます。",
};

export default function MusicPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading
        label="Music"
        title="配信楽曲"
        description="各曲は nodee または LinkCore の埋め込みプレイヤーで試聴できます。配信プラットフォームへのリンクもまとめて確認できます。"
      />
      <div className="grid gap-12">
        {tracks.map((track) => (
          <MusicCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
}
