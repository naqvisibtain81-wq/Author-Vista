import type { APIRoute } from "astro";
export const prerender = true;
export const GET: APIRoute = ({ site }) => {
  const production = import.meta.env.PUBLIC_SITE_STATUS === "production";
  const body = production ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", site)}` : "User-agent: *\nDisallow: /\n";
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
