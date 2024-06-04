import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.6leo6.com",
  integrations: [UnoCSS({
    injectReset: true
  }), mdx()]
});
