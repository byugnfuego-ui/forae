// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/site-map";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build
export default defineConfig({
  site: "https://forae.net",
  integrations: [mdx(), sitemap()],
  
  // Cloudflare-ийн хуудас чиглүүлэлтийг автомат (static+dynamic) болгох тохиргоо
  output: "hybrid", 
  
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
