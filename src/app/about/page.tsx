import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sakatwun Da M.I.C. のプロフィール、スキルセット、お問い合わせ先を紹介しています。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading
        label="About"
        title="プロフィール"
        description="音楽制作とWeb開発を軸に活動しています。"
      />

      <div className="grid gap-10 md:grid-cols-[200px_1fr] md:items-start">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/avatar.png"
            alt={siteConfig.author.name}
            width={180}
            height={180}
            className="rounded-full ring-4 ring-pink/30 shadow-lg"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-ink">
            {siteConfig.author.name}
          </h3>
          <p className="mt-1 text-sage-dark">{siteConfig.author.role}</p>
          <p className="mt-6 leading-relaxed text-ink-muted">
            {siteConfig.author.bio}
          </p>
        </div>
      </div>

      <section className="mt-16">
        <h3 className="mb-4 text-lg font-semibold text-ink">スキルセット</h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {siteConfig.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-xl border border-sage/15 bg-white px-4 py-3 text-sm text-ink-muted"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-2xl border border-sage/15 bg-pink-soft/50 p-8 text-center">
        <h3 className="text-lg font-semibold text-ink">お問い合わせ</h3>
        <p className="mt-2 text-sm text-ink-muted">
          ご連絡は X（Twitter）のDMまたはリプライにてお願いします。
        </p>
        <Link
          href={siteConfig.xUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-sage-dark"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 fill-current"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          X で連絡する
        </Link>
      </section>
    </div>
  );
}
