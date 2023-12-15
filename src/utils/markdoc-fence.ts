/*
    https://github.com/withastro/astro/blob/main/packages/integrations/markdoc/src/extensions/shiki.ts
*/
import { createShikiHighlighter } from "@astrojs/markdown-remark";
import Markdoc from "@markdoc/markdoc";
import type { ShikiConfig } from "astro";
import { unescapeHTML } from "astro/runtime/server/index.js";
import type { AstroMarkdocConfig } from "@astrojs/markdoc/config";
import { convertLatexToMarkup } from "mathlive";

export default async function shiki(
  config?: ShikiConfig
): Promise<AstroMarkdocConfig> {
  const highlighter = await createShikiHighlighter(config);

  return {
    nodes: {
      fence: {
        attributes: Markdoc.nodes.fence.attributes!,
        transform(treeNode) {
          const attributes = treeNode.attributes;

          const lang =
            typeof attributes.language === "string"
              ? attributes.language
              : "plaintext";

          // Redirect to custom renderer
          if (lang.startsWith("latex")) {
            const markup = convertLatexToMarkup(attributes.content as string, {
              mathstyle: "displaystyle",
            });
            return unescapeHTML(markup) as any;
          }

          const trimmedContent = (attributes.content as string).endsWith("\n")
            ? (attributes.content as string).slice(0, -1)
            : attributes.content;
          const html = highlighter.highlight(trimmedContent, lang);

          // Use `unescapeHTML` to return `HTMLString` for Astro renderer to inline as HTML
          return unescapeHTML(html) as any;
        },
      },
    },
  };
}
