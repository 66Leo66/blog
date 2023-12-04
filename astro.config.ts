import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import markdoc from "@astrojs/markdoc";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.6leo6.com",
  integrations: [UnoCSS({
    injectReset: true
  }), markdoc(), sitemap()]
});