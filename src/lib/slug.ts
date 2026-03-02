import path from "path";
import { slug as githubSlug } from "github-slugger";

export const getFileSlug = (value: string) => value
  .replace(new RegExp(path.extname(value) + "$"), "")
  .split(path.sep)
  .map((segment) => githubSlug(segment))
  .join("/")
  .replace(/\/index$/, "");
