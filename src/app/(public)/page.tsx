import { Hero } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats-section";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { BrandsSection } from "@/components/sections/brands-section";
import { ImageBreakSection } from "@/components/sections/image-break-section";
import { ExpertiseCards } from "@/components/sections/expertise-cards";
import { WhyFymSection } from "@/components/sections/why-fym-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <SolutionsGrid />
      <BrandsSection />
      <ImageBreakSection />
      <ExpertiseCards />
      <WhyFymSection />
      <CtaSection />
    </>
  );
}
