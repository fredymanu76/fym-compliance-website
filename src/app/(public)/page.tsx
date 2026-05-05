import { Hero } from "@/components/sections/hero";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { ExpertiseCards } from "@/components/sections/expertise-cards";
import { StatsSection } from "@/components/sections/stats-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <SolutionsGrid />
      <ExpertiseCards />
      <CtaSection />
    </>
  );
}
