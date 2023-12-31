import type { Config as MarkdocConfig, Schema } from "@markdoc/markdoc";
import Markdoc from "@markdoc/markdoc";
import { Image } from "astro:assets";
import type { Render } from "@astrojs/markdoc/config";

export const ImageSchema: Schema<MarkdocConfig, Render> = {
  attributes: {
    ...Markdoc.nodes.image.attributes,
    __optimizedSrc: { type: "Object" },
  },
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    if (node.type === "image" && "__optimizedSrc" in node.attributes) {
      const { __optimizedSrc, ...rest } = node.attributes;
      return new Markdoc.Tag(Image, { ...rest, src: __optimizedSrc }, children);
    } else {
      return new Markdoc.Tag("img", attributes, children);
    }
  },
};
