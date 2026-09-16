export type Track = {
  id: string;
  titleJa: string;
  titleEn: string;
  /** Short Japanese blurb for indexable on-page text (not only embed chrome). */
  description: string;
  embedUrl: string;
  shareUrl: string;
  artworkUrl: string;
  platform: "nodee" | "linkcore";
};

export const tracks: Track[] = [
  {
    id: "XcVtSdqq",
    titleJa: "SAKATWUN DA",
    titleEn: "SAKATWUN DA",
    description:
      "アーティスト名そのものを冠したトラック。ガラージを軸に、Sakatwun Da M.I.C. の世界観をそのまま切り取った代表曲です。各種ストリーミングで配信中。",
    embedUrl: "https://linkco.re/embed/XcVtSdqq",
    shareUrl: "https://linkco.re/XcVtSdqq",
    artworkUrl: "/images/music/sakatwun-da.png",
    platform: "linkcore",
  },
  {
    id: "5qc0czt898va",
    titleJa: "再生すると魔除けする曲",
    titleEn: "A Song That Wards Off Evil When Played",
    description:
      "タイトルどおり、再生すること自体がモチーフになった楽曲。ビートとフックで「魔除け」のイメージを遊びながら展開しています。",
    embedUrl: "https://n0.com/embed/a/5qc0czt898va",
    shareUrl: "https://nodee.net/a/5qc0czt898va",
    artworkUrl:
      "https://d9rd7e11a18ii.cloudfront.net/albums/835/19835_20260131002210_400_400.jpg",
    platform: "nodee",
  },
  {
    id: "2qa2pcuzupad",
    titleJa: "TongFu Kusii",
    titleEn: "TongFu Kusii",
    description:
      "グルーヴ重視のトラック。リズミカルなフロウとキャッチーなフレーズで、ライブ映えする仕上がりを目指しています。",
    embedUrl: "https://n0.com/embed/a/2qa2pcuzupad",
    shareUrl: "https://nodee.net/a/2qa2pcuzupad",
    artworkUrl:
      "https://d9rd7e11a18ii.cloudfront.net/albums/354/17354_20260103084058_400_400.jpg",
    platform: "nodee",
  },
  {
    id: "z4u2db2kpufa",
    titleJa: "Gremlins' Anthem (boardgame) Remix",
    titleEn: "Gremlins' Anthem (boardgame) Remix",
    description:
      "ボードゲームをテーマにした「Gremlins' Anthem」のリミックス版。原曲の世界観を保ちつつ、ビートとアレンジを組み替えています。",
    embedUrl: "https://n0.com/embed/a/z4u2db2kpufa",
    shareUrl: "https://nodee.net/a/z4u2db2kpufa",
    artworkUrl:
      "https://d9rd7e11a18ii.cloudfront.net/albums/705/9705_20251123123947_400_400.jpg",
    platform: "nodee",
  },
  {
    id: "wxvmx9zkusm3",
    titleJa: "Gremlins' Anthem (boardgame)",
    titleEn: "Gremlins' Anthem (boardgame)",
    description:
      "ボードゲームの熱量をアンセムに落とし込んだ原曲。プレイ中のテンションやテーブル上の喧騒を、ビートとラップで表現しています。",
    embedUrl: "https://n0.com/embed/a/wxvmx9zkusm3",
    shareUrl: "https://nodee.net/a/wxvmx9zkusm3",
    artworkUrl:
      "https://d9rd7e11a18ii.cloudfront.net/albums/554/9554_20251026091947_400_400.jpg",
    platform: "nodee",
  },
  {
    id: "5x3vkx11kr2h",
    titleJa: "ダブデミ",
    titleEn: "DUB DEMI",
    description:
      "ダブ／ローファイ寄りのサウンドに、demi（半人）のペルソナを重ねたトラック。空間的な余白とリピート感を意識した制作です。",
    embedUrl: "https://n0.com/embed/a/5x3vkx11kr2h",
    shareUrl: "https://nodee.net/a/5x3vkx11kr2h",
    artworkUrl:
      "https://d9rd7e11a18ii.cloudfront.net/albums/232/9232_20250831194900_400_400.jpg",
    platform: "nodee",
  },
  {
    id: "3t4wp4yejdpr",
    titleJa: "朝霧キャンプの唄",
    titleEn: "Asagiri, the Holy Grail",
    description:
      "朝霧のキャンプ場を舞台にした楽曲。野外の空気感を、穏やかなメロディとフロウで描いています。",
    embedUrl: "https://n0.com/embed/a/3t4wp4yejdpr",
    shareUrl: "https://nodee.net/a/3t4wp4yejdpr",
    artworkUrl:
      "https://d9rd7e11a18ii.cloudfront.net/albums/956/4956_20250819090641_400_400.jpg",
    platform: "nodee",
  },
];
