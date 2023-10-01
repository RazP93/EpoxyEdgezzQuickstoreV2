import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import react from '@astrojs/react';
import sanity from "@sanity/astro";
import { siteInfo } from './src/_data/site.json';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET
} = loadEnv(import.meta.env.MODE, process.cwd(), '');
const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;


// https://astro.build/config
export default defineConfig({
  site: siteInfo.url,
  integrations: [tailwind({
    applyBaseStyles: false
  }), sitemap(),
  sanity({
    projectId,
    dataset,
    useCdn: false,
    apiVersion: '2023-03-20',
  }),
  react()]
});