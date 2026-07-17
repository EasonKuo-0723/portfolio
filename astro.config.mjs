import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://easonkuo-0723.github.io',
  integrations: [mdx(), sitemap(), tailwind()]
});