// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// GitHub Pages-д зориулсан цэвэр статик тохиргоо
export default defineConfig({
  site: "https://forae.net",
  integrations: [mdx(), sitemap()],
  // Хуудас бүрийг бие даасан .html файл болгож үүсгэх тохиргоо
  build: {
    format: 'file'
  }
});
