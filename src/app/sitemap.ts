import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl();
  return origin ? [{ url: origin.href, changeFrequency: "monthly", priority: 1 }] : [];
}
