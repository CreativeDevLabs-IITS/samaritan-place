import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Required for `output: "export"`: emit this file at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/residents/", "/about/", "/get-involved/", "/contact/"];
  return pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly", priority: p === "/" ? 1 : 0.7 }));
}
