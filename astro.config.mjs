import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { siteInfo } from "./src/_data/site.json";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: siteInfo.url,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    react(),
  ],
});
