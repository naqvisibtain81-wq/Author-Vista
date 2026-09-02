import { readdir, readFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const root = new URL("../dist/", import.meta.url).pathname.replace(/^\/(.:)/, "$1");

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (entry.name.endsWith(".html")) files.push(path);
  }
  return files;
}

const files = await walk(root);
const pages = [];
const allLinks = new Set();
const routeFor = (file) => {
  const path = relative(root, file).split(sep).join("/");
  if (path === "index.html") return "/";
  if (path.endsWith("/index.html")) return `/${path.slice(0, -"index.html".length)}`;
  return `/${path}`;
};
const routes = new Set(files.map(routeFor));

for (const file of files) {
  const html = await readFile(file, "utf8");
  const route = routeFor(file);
  const h1 = [...html.matchAll(/<h1\b/gi)].length;
  const title = html.match(/<title>(.*?)<\/title>/is)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  const images = [...html.matchAll(/<img\b([^>]*)>/gi)];
  const missingAlt = images.filter(([, attrs]) => !/\balt="[^"]*"/i.test(attrs)).length;
  const prose = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ");
  const dashCount = (prose.match(/[—–]/g) || []).length;
  for (const match of html.matchAll(/href="(\/[^"]*)"/gi)) {
    const href = match[1].split(/[?#]/)[0];
    if (href && !href.includes(".")) allLinks.add(href.endsWith("/") ? href : `${href}/`);
  }
  pages.push({ route, h1, title, description: Boolean(description), canonical: Boolean(canonical), missingAlt, dashCount });
}

const duplicates = [...new Set(pages.map((page) => page.title).filter((title, index, values) => values.indexOf(title) !== index))];
const brokenLinks = [...allLinks].filter((href) => !routes.has(href));
console.log(JSON.stringify({
  pages: pages.length,
  oneH1: pages.filter((page) => page.h1 === 1).length,
  missingDescriptions: pages.filter((page) => !page.description).map((page) => page.route),
  missingCanonicals: pages.filter((page) => !page.canonical).map((page) => page.route),
  missingAlt: pages.reduce((sum, page) => sum + page.missingAlt, 0),
  visibleDashes: pages.reduce((sum, page) => sum + page.dashCount, 0),
  duplicateTitles: duplicates,
  internalLinks: allLinks.size,
  brokenLinks,
}, null, 2));
