import type { Metadata } from "next";
import type { Work } from "@/lib/data/works";
import { siteConfig } from "@/lib/site";

export const OG_IMAGE_PATH = "/images/ogp.jpg";

/** Apex origin without trailing slash (e.g. https://sakatwun.com). */
export function siteOrigin(): string {
  return siteConfig.url.replace(/\/+$/, "");
}

/**
 * Absolute canonical URL with trailing slash (matches next.config trailingSlash).
 * Home → https://sakatwun.com/
 * Other → https://sakatwun.com/works/
 */
export function pageUrl(path: string): string {
  const origin = siteOrigin();
  if (path === "/") {
    return `${origin}/`;
  }
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return `${origin}${normalized}`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  ogImage = OG_IMAGE_PATH,
}: PageMetadataOptions): Metadata {
  const url = pageUrl(path);
  const isHome = path === "/";

  return {
    title: isHome ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.role,
    url: siteConfig.url,
    sameAs: [siteConfig.xUrl],
    description: siteConfig.author.bio,
  };
}

export function creativeWorksJsonLd(works: Work[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Web制作実績",
    itemListElement: works.map((work, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: work.title,
        description: work.description,
        url: work.url,
        image: work.imageUrl,
        author: {
          "@type": "Person",
          name: siteConfig.author.name,
          url: siteConfig.url,
        },
      },
    })),
  };
}
