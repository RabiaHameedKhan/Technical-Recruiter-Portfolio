import { CTABanner } from "@/components/home/CTABanner";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksPreview } from "@/components/home/HowItWorksPreview";
import { RolesPreview } from "@/components/home/RolesPreview";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { TrustBar } from "@/components/home/TrustBar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StatsSection />
      <HowItWorksPreview />
      <RolesPreview />
      <TestimonialsPreview />
      <CTABanner />
    </>
  );
}
