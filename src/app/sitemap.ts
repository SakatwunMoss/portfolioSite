import type { MetadataRoute } from "next";
import { pageUrl } from "@/lib/seo";

export const dynamic = "force-static";

const routes = ["/", "/music/", "/works/", "/about/"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: pageUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
