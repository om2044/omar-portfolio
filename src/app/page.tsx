import type { Metadata } from "next";
import { MaintenancePage } from "@/components/maintenance-page";
import { Navigation } from "@/components/navigation";
import { ReadingProgress } from "@/components/reading-progress";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { SelectedWork } from "@/components/selected-work";
import { Experience } from "@/components/experience";
import { Expertise } from "@/components/expertise";
import { Beyond } from "@/components/beyond";
import { Contact, Footer } from "@/components/contact";

// Maintenance is opt-in; the current portfolio is the public interim release.
const maintenanceMode = process.env.PORTFOLIO_MAINTENANCE === "true";

const maintenanceTitle = "Omar Ait Bouhmad — Portfolio en cours de mise à jour";
const maintenanceDescription = "Une nouvelle présentation de mes projets en data et intelligence artificielle est en préparation. En attendant, restons en contact.";

export const metadata: Metadata = maintenanceMode ? {
  title: maintenanceTitle,
  description: maintenanceDescription,
  openGraph: { title: maintenanceTitle, description: maintenanceDescription, locale: "fr_FR", type: "website" },
  twitter: { card: "summary", title: maintenanceTitle, description: maintenanceDescription },
} : {};

export default function Home() {
  if (maintenanceMode) return <MaintenancePage />;
  return <><ReadingProgress /><a href="#main" className="skip-link">Skip to content</a><Navigation /><main id="main"><Hero /><About /><SelectedWork /><Experience /><Expertise /><Beyond /><Contact /></main><Footer /></>;
}
