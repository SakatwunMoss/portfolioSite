/**
 * Canonical host redirect for Workers Static Assets.
 * www / http → https://sakatwun.com (301), then serve assets.
 */
const CANONICAL_HOST = "sakatwun.com";

interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

export default {
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

    if (redirect) {
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
