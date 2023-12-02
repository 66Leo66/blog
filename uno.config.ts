import { defineConfig, presetUno, presetAttributify, presetTypography  } from "unocss";

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetTypography()
    ]
})