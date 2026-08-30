export const siteConfig = {
  name: "Sakatwun Da Portfolio",
  title: "Sakatwun Da Portfolio",
  description:
    "Sakatwun Da M.I.C. のポートフォリオ。楽曲配信とWeb制作実績を紹介しています。",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sakatwun.com",
  xUrl: process.env.NEXT_PUBLIC_X_URL ?? "https://x.com/sakatwun",
  author: {
    name: "Sakatwun Da M.I.C.",
    role: "Musician / Web Developer",
    bio: "音楽制作とWeb開発の両方で活動しています。配信楽曲の制作から、Next.jsを使った比較・検索サイトの開発まで、クリエイティブとテクノロジーを横断して取り組んでいます。",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/music/", label: "Music" },
    { href: "/works/", label: "Works" },
    { href: "/about/", label: "About" },
  ],
  skills: [
    "Next.js / React / TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Cloudflare Workers / D1",
    "Vercel / Cloudflare Workers",
    "Music Production",
  ],
} as const;
