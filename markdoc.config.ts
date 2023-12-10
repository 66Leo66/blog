import { defineMarkdocConfig, nodes, component } from "@astrojs/markdoc/config";
import shiki from "./src/utils/markdoc-fence";
// import { ImageSchema } from "./src/utils/markdoc-asset-config";

export default defineMarkdocConfig({
  extends: [
    shiki({
      theme: "nord",
      wrap: true,
    }),
  ],
  nodes: {
    // image: ImageSchema,
    document: {
      ...nodes.document,
      render: undefined,
    },
    
  },
  tags: {
    math: {
    },
  },
});
