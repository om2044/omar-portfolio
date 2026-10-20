import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/dm-sans";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import "./studio.css";
import { site, getSiteUrl } from "@/lib/site";
import { MotionProvider } from "@/components/motion-provider";

const origin = getSiteUrl();
export const metadata: Metadata = {
  metadataBase: origin,
  title: site.title,
  description: site.description,
  applicationName: "Omar Ait Bouhmad Portfolio",
  authors: [{ name: site.name }],
  keywords: ["Omar Ait Bouhmad", "Data Engineering", "Artificial Intelligence", "ENSA Agadir", "ECODRIVE-AI"],
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  alternates: origin ? { canonical: "/" } : undefined,
  openGraph: { title: site.title, description: site.description, type: "website", locale: "en_US", siteName: site.name, ...(origin ? { url: origin } : {}) },
  twitter: { card: "summary", title: site.title, description: site.description },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#090f1b", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><MotionProvider>{children}</MotionProvider></body></html>;
}
