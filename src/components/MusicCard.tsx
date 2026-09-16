import Image from "next/image";
import Link from "next/link";
import { NodeePlayer } from "./NodeePlayer";
import type { Track } from "@/lib/data/music";

export function MusicCard({ track }: { track: Track }) {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <Image
          src={track.artworkUrl}
          alt={`${track.titleJa}のジャケット画像`}
          width={80}
          height={80}
          className="shrink-0 rounded-xl shadow-sm ring-1 ring-sage/10"
        />
        <div className="min-w-0 pt-1">
          <h3 className="text-lg font-semibold text-ink">{track.titleJa}</h3>
          <p className="mt-0.5 text-sm text-ink-muted">{track.titleEn}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {track.description}
          </p>
          <Link
            href={track.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs text-sage-dark underline-offset-2 hover:underline"
          >
            {track.platform === "linkcore"
              ? "LinkCore で聴く →"
              : "nodee で聴く →"}
          </Link>
        </div>
      </div>
      <NodeePlayer
        embedUrl={track.embedUrl}
        title={track.titleJa}
        platform={track.platform}
      />
    </article>
  );
}
