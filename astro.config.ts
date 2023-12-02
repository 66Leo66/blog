import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true
  }), markdoc()]
});