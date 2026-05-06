import { Hero } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats-section";
import { BrandsSection } from "@/components/sections/brands-section";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { WhyFymSection } from "@/components/sections/why-fym-section";
import { ExpertiseCards } from "@/components/sections/expertise-cards";
import { ImageBreakSection } from "@/components/sections/image-break-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <BrandsSection />
      <SolutionsGrid />
      <WhyFymSection />
      <ExpertiseCards />
      <ImageBreakSection overlayText="Trusted solutions for regulated industries across the United Kingdom" />
      <CtaSection />
    </>
  );
}
