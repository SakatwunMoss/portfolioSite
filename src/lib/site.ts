export const siteConfig = {
  name: "Sakatwun Da Portfolio",
  title: "Sakatwun Da Portfolio",
  description:
    "Sakatwun Da M.I.C.（Musician / Web Developer）の公式ポートフォリオサイトです。nodee・LinkCoreで配信中の楽曲制作作品と、Next.js・TypeScriptを活用したWeb制作・比較検索サイトの開発実績を掲載しています。",
  // Canonical origin (no trailing slash). Prefer apex https without www.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://sakatwun.com").replace(
    /\/+$/,
    "",
  ),
  themeColor: "#6b8f71",
  xUrl: process.env.NEXT_PUBLIC_X_URL ?? "https://x.com/sakatwun",
  author: {
    name: "Sakatwun Da M.I.C.",
    alsoKnownAs: ["Gahji","SAKATWUN DA GARAGE","F-ranked Demi Human","f-demi"],
    role: "Musician / Web Developer",
    bio: "音楽制作とWeb開発の両方で活動しています。配信楽曲の制作から、Next.jsを使った比較・検索サイトの開発まで、クリエイティブとテクノロジーを横断して取り組んでいます。",
    bioEn:
      "I work across both music production and web development. From producing and releasing original tracks to building comparison and search sites with Next.js, I bridge creativity and technology in everything I do.",
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
