import type { Profile, Project } from "@/lib/profile";

export function buildPersonSchema(profile: Profile) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.bio,
    url: "https://achraflachgar.ai",
    image: "https://achraflachgar.ai/og-image.png",
    email: profile.contact.email,
    telephone: profile.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    sameAs: [profile.contact.linkedin, profile.contact.github],
    knowsAbout: profile.specialties,
  };
}

export function buildSoftwareSchema(projects: Project[]) {
  return {
    "@context": "https://schema.org",
    "@graph": projects.map((project) => ({
      "@type": "SoftwareSourceCode",
      name: project.title,
      description: project.solution,
      codeRepository: project.links.source,
      url: project.links.demo,
      programmingLanguage: project.tech,
      keywords: project.metrics,
    })),
  };
}
