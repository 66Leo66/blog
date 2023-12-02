import { defineConfig, presetUno, presetAttributify, presetTypography  } from "unocss";

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetTypography({
            cssExtend: {
                'blockquote': {
                    'border-left': '5px solid #777',
                    'background-color': '#eee',
                    'padding': '0 1rem',
                    'margin-left': '0',
                    'margin-right': '0',
                },
                'blockquote p': {
                    'display': 'block',
                    'margin-block-start': '1em',
                    'margin-block-end': '1em',
                    'margin-inline-start': '0px',
                    'margin-inline-end': '0px',
                }
            }
        })
    ],
    theme: {
        fontFamily: {
            sans: 'MiSans VF'
        }
    }
})