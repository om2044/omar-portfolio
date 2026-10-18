import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages serves the static export; standard builds still support Vercel.
  ...(process.env.STATIC_EXPORT === "true" ? { output: "export" as const } : {}),
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
