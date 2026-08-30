type NodeePlayerProps = {
  embedUrl: string;
  title: string;
  platform?: "nodee" | "linkcore";
};

export function NodeePlayer({
  embedUrl,
  title,
  platform = "nodee",
}: NodeePlayerProps) {
  const heightClass =
    platform === "linkcore"
      ? "h-[600px] sm:h-[640px]"
      : "h-[420px] sm:h-[480px]";

  return (
    <div className="overflow-hidden rounded-2xl border border-sage/15 bg-white shadow-sm">
      <iframe
        src={embedUrl}
        title={`${platform} player: ${title}`}
        className={`w-full border-0 ${heightClass}`}
        loading="lazy"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
}
