import compress from "astro-compress";
import { defineConfig } from "astro/config";
import { siteUrl } from "./src/data/site.json";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: siteUrl,
  integrations: [tailwind(), sitemap(), compress()],
});
