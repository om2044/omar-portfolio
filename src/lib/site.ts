export const site = {
  name: "Omar Ait Bouhmad",
  title: "Omar Ait Bouhmad — Data & AI Engineering Student",
  description: "Data Science, Big Data & AI engineering student at ENSA Agadir, seeking a PFE internship in 2027. Explore projects in machine learning, computer vision, and data engineering.",
  location: "Agadir, Morocco",
  // Add verified destinations here. null renders an honest, accessible placeholder.
  links: {
    email: "omarbouhmad2004@gmail.com" as string | null,
    github: "https://github.com/om2044" as string | null,
    linkedin: "https://www.linkedin.com/in/omar-ait-bouhmad-3a2297338/" as string | null,
    resume: "/Omar-Ait-Bouhmad-Resume.pdf" as string | null,
  },
};

export function getSiteUrl(): URL | undefined {
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url : undefined;
  } catch { return undefined; }
}
