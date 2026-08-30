type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  label,
  title,
  description,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
        {label}
      </p>
      <Heading className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-3 max-w-2xl text-ink-muted">{description}</p>
      )}
    </div>
  );
}
