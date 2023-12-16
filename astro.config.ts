import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.6leo6.com",
  integrations: [
    UnoCSS({
      injectReset: '@unocss/reset/eric-meyer.css',
    }),
    markdoc(),
    sitemap(),
    sentry(),
    spotlightjs(),
  ],
});
