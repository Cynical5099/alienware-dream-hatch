import { Button } from "@/components/ui/button";
import { Rocket, Shield, Zap } from "lucide-react";
import gamingBg from "@/assets/gaming-setup-bg.jpg";

const CTA_LINK = "https://getrewarrds.com/aff_c?offer_id=2987&aff_id=21664&source=job";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: `url(${gamingBg})`,
          filter: 'blur(8px)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-8 animate-float">
          <div className="p-4 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 glow-subtle">
            <Rocket className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-glow">
          🚀 Land Your Dream Job with Alienware
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
          Turn your passion for gaming into a career you'll love.
        </p>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up">
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Shield className="w-5 h-5 text-secondary" />
            <span className="text-foreground font-medium">Safe & Secure</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Zap className="w-5 h-5 text-secondary" />
            <span className="text-foreground font-medium">Quick Apply</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Shield className="w-5 h-5 text-secondary" />
            <span className="text-foreground font-medium">No Experience Needed</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
          <Button 
            variant="cta" 
            size="lg" 
            className="h-14 px-12 text-xl rounded-xl"
          >
            👉 Apply Now & Start Your Alienware Journey
          </Button>
        </a>
      </div>
    </div>
  );
};
