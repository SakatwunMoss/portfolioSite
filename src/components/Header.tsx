"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-sage/15 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/images/avatar.png"
            alt={siteConfig.author.name}
            width={40}
            height={40}
            className="rounded-full ring-2 ring-pink/40 transition group-hover:ring-sage/50"
            priority
          />
          <span className="hidden text-sm font-medium tracking-wide text-ink sm:inline">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {siteConfig.nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href.replace(/\/$/, ""));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  isActive
                    ? "bg-sage/15 font-medium text-sage-dark"
                    : "text-ink-muted hover:bg-pink/20 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
