import type {
  WithContext,
  WebSite,
  WebPage,
  BreadcrumbList,
  Person,
  ProfilePage,
  Blog,
  BlogPosting,
} from "schema-dts";

export type Schema =
  | WebSite
  | WebPage
  | BreadcrumbList
  | Person
  | ProfilePage
  | Blog
  | BlogPosting;

export type SchemaWithContext = WithContext<Schema>;

export interface Metadata {
  title: string;
  description: string;
  image?: string;
  og?: { "og:type": string } & Record<string, string | string[] | undefined>;
  schemas?: Schema[];
};
