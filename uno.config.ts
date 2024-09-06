import { defineConfig } from "unocss";
import {
  presetTypography,
  presetWebFonts,
  presetUno,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: [
          {
            name: "Inter",
            weights: ["400", "600", "800"],
          },
          {
            name: "Noto Sans SC",
            weights: ["400", "800"],
          },
        ],
        serif: "Noto Serif SC",
        mono: "Jetbrains Mono",
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives()],
  rules: [["prose", { "max-width": "70ch" }]],
  shortcuts: [
  ],
});
