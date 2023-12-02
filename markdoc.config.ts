import { component, defineMarkdocConfig, nodes } from "@astrojs/markdoc/config";
import shiki from "@astrojs/markdoc/shiki";

export default defineMarkdocConfig({
    extends: [
        shiki({
            theme: "nord",
            wrap: true
        })
    ],
    nodes: {
        document: {
            ...nodes.document,
            render: undefined
        }
    }
})