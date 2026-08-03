import type { CoreHeadHooks } from "unhead/types";
import { capoTagWeight } from "unhead/server";
import { dedupeKey, hashTag } from "unhead/utils";
import { defineHeadPlugin } from "unhead/plugins";

export const DeterministicSortingPlugin = defineHeadPlugin({
  key: "deterministic-sorting",
  hooks: {
    "tags:afterResolve": ({ tags }) => {
      tags.sort((a, b) => {
        // 1) Rely on Capo.js weights
        const weightDiff = capoTagWeight(a) - capoTagWeight(b);
        if (weightDiff !== 0) return weightDiff;
        // 2) Rely on dedupe keys
        const dedupeA = dedupeKey(a);
        const dedupeB = dedupeKey(b);
        if (dedupeA && dedupeB) return dedupeA.localeCompare(dedupeB);
        if (dedupeA) return -1;
        // 3) rely on hashes
        return hashTag(a).localeCompare(hashTag(b));
      });
    },
  } satisfies Partial<CoreHeadHooks>,
});
