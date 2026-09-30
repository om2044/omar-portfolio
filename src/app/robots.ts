import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteUrl();
  return { rules: { userAgent: "*", allow: "/" }, ...(origin ? { sitemap: new URL("/sitemap.xml", origin).href } : {}) };
}
