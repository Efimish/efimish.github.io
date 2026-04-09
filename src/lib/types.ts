import type {
  Blog,
  BlogPosting,
  BreadcrumbList,
  Person,
  ProfilePage,
  WebPage,
  WebSite,
  WithContext,
} from "schema-dts";

export type Schema =
  | Blog
  | BlogPosting
  | BreadcrumbList
  | Person
  | ProfilePage
  | WebPage
  | WebSite;

export type SchemaWithContext = WithContext<Schema>;

export interface Metadata {
  title: string;
  description: string;
  image?: string;
  og?: { "og:type": string } & Record<string, string | string[] | undefined>;
  schemas?: Schema[];
}
