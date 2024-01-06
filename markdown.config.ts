import type { AstroUserConfig } from "astro/config";

import remarkMath from "remark-math";
import "katex";
import "katex/contrib/mhchem";
import rehypeKatex from "rehype-katex";

export default ((config: AstroUserConfig["markdown"]) => config)({
    shikiConfig: {
        theme: "github-light",
        wrap: true
    },
    remarkPlugins: [
        remarkMath
    ],
    rehypePlugins: [
        rehypeKatex
    ],
})