import type { APIRoute } from "astro";
import type { WebAppManifest } from "web-app-manifest";
import { site, person } from "@/consts";

const manifest = {
  name: site.name,
  description: site.description,
  short_name: person.username,
  start_url: "/",
  display: "standalone",
  theme_color: "#161616",
  background_color: "#161616",
  icons: [
    {
      src: "/favicon-192.png",
      type: "image/png",
      sizes: "192x192",
      purpose: "maskable",
    },
    {
      src: "/favicon-512.png",
      type: "image/png",
      sizes: "512x512",
      purpose: "maskable",
    },
  ],
} as const satisfies WebAppManifest;

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(manifest), {
    headers: { "Content-Type": "application/manifest+json" },
  });
};
