import { Button } from "@/components/ui/button";
import { Rocket, Shield, Zap } from "lucide-react";
import gamingBg from "@/assets/gaming-setup-bg.jpg";

const CTA_LINK = "https://getrewarrds.com/aff_c?offer_id=2987&aff_id=21664&source=job";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 text-center">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-6 md:mb-8 animate-float">
          <div className="p-3 md:p-4 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 glow-subtle">
            <Rocket className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </div>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in-up text-glow leading-tight px-4">
          <span className="inline-block">🚀 Land Your Dream Job</span>{" "}
          <span className="inline-block">with Alienware</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-muted-foreground max-w-3xl mx-auto animate-fade-in-up px-4 leading-relaxed">
          Turn your passion for gaming into a career you'll love.
        </p>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-12 animate-fade-in-up px-2">
          <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0" />
            <span className="text-foreground font-medium">Safe & Secure</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0" />
            <span className="text-foreground font-medium">Quick Apply</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0" />
            <span className="text-foreground font-medium">No Experience Needed</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-md px-4">
          <Button 
            variant="cta" 
            size="lg" 
            className="h-14 sm:h-16 md:h-18 w-full px-4 sm:px-8 md:px-12 text-sm sm:text-base md:text-xl rounded-xl"
          >
            <span className="flex items-center justify-center gap-2 min-w-0">
              <span className="truncate">👉 Apply Now & Start Your Journey</span>
            </span>
          </Button>
        </a>
      </div>
    </div>
  );
};
