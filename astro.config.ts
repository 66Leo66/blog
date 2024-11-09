import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';

import pagefind from "astro-pagefind";

import solidJs from "@astrojs/solid-js";

import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  site: "https://blog.6leo6.com",
  integrations: [
    solidJs(),
    UnoCSS({
      injectReset: true,
    }),
    expressiveCode({
      plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
      defaultProps: {
        wrap: true,
        overridesByLang: {
          "bash,ps,sh": { preserveIndent: false },
        },
      },
    }),
    mdx(),
    pagefind(),
  ],
  markdown: {
    remarkPlugins: [ [remarkToc, {
      heading: '(table[ -]of[ -])?contents?|toc|TOC|目录'
    }] ],
  },
});
