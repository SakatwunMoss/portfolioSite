import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "d9rd7e11a18ii.cloudfront.net" },
      { protocol: "https", hostname: "smartphone-case-comp-site.vercel.app" },
      { protocol: "https", hostname: "earphone-comp.vercel.app" },
      { protocol: "https", hostname: "ramen-compare.com" },
    ],
  },
};

export default nextConfig;
