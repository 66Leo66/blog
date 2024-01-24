import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetTypography,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography({
      cssExtend: {
        blockquote: {
          "border-left": "5px solid #777",
          "background-color": "#eee",
          padding: "0 1rem",
          "margin-left": "0",
          "margin-right": "0",
        },
        "blockquote p": {
          display: "block",
          "margin-block-start": "1em",
          "margin-block-end": "1em",
          "margin-inline-start": "0px",
          "margin-inline-end": "0px",
        },
        "code pre": {
          "text-wrap": "wrap"
        }
      },
    }),
  ],
  theme: {
    fontFamily: {
      zh: 'system-ui, "Seoge UI", "Noto Sans", Roboto, Oxygen, Cantarell, "Fira Sans", "Liberation Sans", "Droid Sans", Ubuntu, "PingFang SC", "HarmonyOS Sans SC", MiSans, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Noto Sans CJK SC", "Noto Sans SC", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      en: 'system-ui, "Seoge UI", "Noto Sans", Roboto, Oxygen, Cantarell, "Fira Sans", "Liberation Sans", "Droid Sans", Ubuntu, "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
  },
});
