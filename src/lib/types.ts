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
