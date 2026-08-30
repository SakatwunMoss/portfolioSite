import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/lib/data/works";

export function WorkCard({ work }: { work: Work }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-sage/15 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden bg-pink/20">
        <Image
          src={work.imageUrl}
          alt={work.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-ink">{work.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {work.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-sage/10 px-2.5 py-1 text-xs font-medium text-sage-dark"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center text-sm font-medium text-sage-dark underline-offset-4 hover:underline"
        >
          サイトを見る →
        </Link>
      </div>
    </article>
  );
}
