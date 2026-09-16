/**
 * Canonical URL normalization for Workers Static Assets.
 * www / http / trailing-slash / index.html → https://sakatwun.com/.../ in a single 301.
 */
const CANONICAL_HOST = "sakatwun.com";

interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

/** Paths with a file extension (sitemap.xml, favicon.ico, _next/*.js, …) stay as-is. */
function hasFileExtension(pathname: string): boolean {
  const segment = pathname.split("/").pop() ?? "";
  return segment.includes(".");
}

/**
 * Normalize path to canonical form used by Next trailingSlash export:
 * /works → /works/
 * /music/index.html → /music/
 * /index.html → /
 */
function canonicalizePath(pathname: string): string {
  let path = pathname;

  if (path === "/index.html") {
    return "/";
  }

  if (path.endsWith("/index.html")) {
    path = path.slice(0, -"index.html".length);
    return path.endsWith("/") ? path : `${path}/`;
  }

  if (path !== "/" && !path.endsWith("/") && !hasFileExtension(path)) {
    return `${path}/`;
  }

  return path;
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    let redirect = false;

    if (url.hostname === `www.${CANONICAL_HOST}`) {
      url.hostname = CANONICAL_HOST;
      redirect = true;
    }

    if (url.protocol === "http:") {
      url.protocol = "https:";
      redirect = true;
    }

    const canonicalPath = canonicalizePath(url.pathname);
    if (canonicalPath !== url.pathname) {
      url.pathname = canonicalPath;
      redirect = true;
    }

    if (redirect) {
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;
