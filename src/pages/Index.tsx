import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { EngagementPoll } from "@/components/EngagementPoll";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Benefits />
      <EngagementPoll />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
