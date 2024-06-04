import { defineConfig } from "unocss";
import { presetTypography, presetWebFonts, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: ["Inter", "Noto Sans SC"],
        serif: "Noto Serif SC",
        mono: "Jetbrains Mono",
      },
    }),
    presetTypography(),
  ],
});
