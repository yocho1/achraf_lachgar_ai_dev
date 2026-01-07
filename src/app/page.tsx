import { AiTwinWidget } from "@/components/ai-twin-widget";
import { CtaFooter } from "@/components/cta-footer";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Hero } from "@/components/hero";
import { MetricsBento } from "@/components/metrics-bento";
import { ProjectsGrid } from "@/components/projects-grid";
import { StackOrbit } from "@/components/stack-orbit";
import { getProfileData } from "@/lib/cms";

export default async function Home() {
  const profile = await getProfileData();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-950 text-slate-100">
      <Hero profile={profile} />
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24">
        <MetricsBento profile={profile} />
        <ProjectsGrid projects={profile.projects} />
        <StackOrbit stack={profile.stack} />
        <ExperienceTimeline experience={profile.experience} />
        <CtaFooter profile={profile} />
      </main>
      <AiTwinWidget profile={profile} />
    </div>
  );
}
