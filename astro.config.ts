import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";

// import sentry from "@sentry/astro";
// import spotlightjs from "@spotlightjs/astro";
// import lighthouse from "astro-lighthouse";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.6leo6.com",
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    markdoc(),
    sitemap(),
    // sentry(),
    // spotlightjs(),
    // lighthouse(),
  ],
});
