export type Work = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  tags: string[];
};

export const works: Work[] = [
  {
    title: "スマホケース比較サイト",
    description:
      "スマートフォンケースを条件で絞り込み、比較できるWebアプリ。商品データの管理と検索UIをNext.jsで構築しました。",
    url: "https://smartphone-case-comp-site.vercel.app/",
    imageUrl:
      "https://smartphone-case-comp-site.vercel.app/images/og-image.png",
    tags: ["Next.js", "Vercel", "Supabase"],
  },
  {
    title: "イヤホン比較サイト",
    description:
      "イヤホン・ヘッドホンのスペック比較サイト。フィルタリングと一覧表示を中心に、使いやすいUIを意識して開発しました。",
    url: "https://earphone-comp.vercel.app/",
    imageUrl: "https://earphone-comp.vercel.app/images/og-image.jpg",
    tags: ["Next.js", "Vercel", "Supabase"],
  },
  {
    title: "ラーメン店比較サイト",
    description:
      "ラーメン店の情報を比較・検索できるサイト。Cloudflare Workers（OpenNext）とD1を使ったエッジ構成で運用しています。",
    url: "https://ramen-compare.com/",
    imageUrl: "https://ramen-compare.com/og-default.png",
    tags: ["Next.js", "Cloudflare Workers (OpenNext)", "D1"],
  },
];
