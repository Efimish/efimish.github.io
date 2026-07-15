import type { CoreHeadHooks } from "unhead/types";
import { defineHeadPlugin } from "unhead/plugins";

export const RemoveDataAttributesPlugin = defineHeadPlugin({
  key: "remove-data-attributes",
  hooks: {
    "tags:afterResolve": ({ tags }) => {
      tags.forEach(({ props }) => {
        Object.keys(props).forEach((key) => {
          if (key.startsWith("data-")) delete props[key];
        });
      });
    },
  } satisfies Partial<CoreHeadHooks>,
});
