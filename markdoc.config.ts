import { defineMarkdocConfig, nodes, component } from "@astrojs/markdoc/config";
import shiki from "@astrojs/markdoc/shiki";

export default defineMarkdocConfig({
    extends: [
        shiki({
            theme: "nord",
            wrap: true
        })
    ],
    nodes: {
        image: {
            ...nodes.image,
            render: component("./src/components/MarkdocImageNode.astro")
        },
        document: {
            ...nodes.document,
            render: undefined
        },
        
    }
})