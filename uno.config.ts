import { defineConfig } from "unocss";
import { presetTypography, presetWebFonts, presetUno, transformerDirectives  } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: [{
          name: "Inter",
          weights: ["400", "600", "800"]
        }, "Noto Sans SC"],
        serif: "Noto Serif SC",
        mono: "Jetbrains Mono",
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives()
  ]
});
