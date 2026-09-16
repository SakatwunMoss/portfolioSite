import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-sage/15 bg-cream">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="text-sm text-ink-muted">
          © {new Date().getFullYear()} {siteConfig.author.name}
        </p>
        <nav
          aria-label="フッターナビ"
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-ink-muted"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={siteConfig.xUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-sage/25 px-4 py-2 text-sm text-ink transition hover:border-sage hover:bg-sage/10"
        >
          <XIcon />
          Follow on X
        </Link>
      </div>
    </footer>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-current"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
