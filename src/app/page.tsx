import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { SelectedWork } from "@/components/selected-work";
import { Experience } from "@/components/experience";
import { Expertise } from "@/components/expertise";
import { Beyond } from "@/components/beyond";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return <><a href="#main" className="skip-link">Skip to content</a><Navigation /><main id="main"><Hero /><About /><SelectedWork /><Experience /><Expertise /><Beyond /><Contact /></main><Footer /></>;
}
