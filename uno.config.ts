import { defineConfig } from "unocss";
import {presetWebFonts, presetUno} from 'unocss'

export default defineConfig({
    presets: [
      presetUno(),
      presetWebFonts({
        provider: 'google',
        fonts: {
          sans: 'Noto Sans SC',
          serif: 'Noto Serif SC',
          mono: 'Jetbrains Mono'
        },
      }),
    ],
  })