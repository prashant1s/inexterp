import { Hero } from "@/components/sections/Hero";
import { TrustedLogos } from "@/components/sections/TrustedLogos";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { ModulesGrid } from "@/components/sections/ModulesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export default function MarketingPage() {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden">
      {/* Each section handles its own internal layout, padding, and responsiveness.
        We pass server-side fetched data or constants down to them if necessary.
      */}
      <Hero />
      <TrustedLogos />
      <ProblemSection />
      
      {/* Solution & Showcase combined for seamless transition */}
      <DashboardShowcase />
      
      <ModulesGrid />
      <Testimonials />
      <CTASection />
    </main>
  );
}