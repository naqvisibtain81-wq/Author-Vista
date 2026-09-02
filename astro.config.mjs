import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // The reserved .invalid domain prevents preview canonicals being mistaken for production URLs.
  site: process.env.SITE_URL ?? "https://preview.authorvista.invalid",
  output: "static",
  redirects: {
    "/work": "/portfolio/",
  },
  integrations: [sitemap({
    filter: (page) => ![
      "/404/", "/contact/", "/schedule-a-call/", "/request-a-quote/",
      "/privacy-policy/", "/terms-and-conditions/", "/cancellation-policy/",
    ].some((path) => new URL(page).pathname === path),
  })],
  security: {
    checkOrigin: true,
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
