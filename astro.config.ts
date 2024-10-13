import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.6leo6.com",
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    expressiveCode({
      plugins: [pluginLineNumbers()],
      defaultProps: {
        wrap: true,
        overridesByLang: {
          "bash,ps,sh": { preserveIndent: false },
        },
      },
    }),
    mdx(),
  ],
  markdown: {},
});
