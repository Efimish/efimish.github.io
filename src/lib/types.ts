import type { UseSeoMetaInput } from "unhead/types";
import type { UseSchemaOrgInput } from "@unhead/schema-org";

export interface Metadata {
  meta?: UseSeoMetaInput & {
    schema?: UseSchemaOrgInput;
  };
}
