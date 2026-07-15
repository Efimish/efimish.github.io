import type { HeadTag, CoreHeadHooks } from "unhead/types";
import { capoTagWeight } from "unhead/server";
import { dedupeKey, hashTag } from "unhead/utils";
import { defineHeadPlugin } from "unhead/plugins";

const dedupeKeyFix = <T extends HeadTag>(tag: T): string | undefined => {
  const dedupeKeyBroken = dedupeKey(tag);
  if (dedupeKeyBroken) return dedupeKeyBroken;
  const { props, tag: t } = tag;
  if (t === "link" && props.rel && props.href)
    return `link:${props.rel}:${props.href}`;
};

export const DeterministicSortingPlugin = defineHeadPlugin({
  key: "deterministic-sorting",
  hooks: {
    "tags:afterResolve": ({ tags }) => {
      tags.sort((a, b) => {
        // 1) Rely on Capo.js weights
        const weightDiff = capoTagWeight(a) - capoTagWeight(b);
        if (weightDiff !== 0) return weightDiff;
        // 2) Rely on dedupe keys
        const dedupeA = dedupeKeyFix(a);
        const dedupeB = dedupeKeyFix(b);
        if (dedupeA && dedupeB) return dedupeA.localeCompare(dedupeB);
        if (dedupeA) return -1;
        // 3) rely on hashes
        return hashTag(a).localeCompare(hashTag(b));
      });
    },
  } satisfies Partial<CoreHeadHooks>,
});
