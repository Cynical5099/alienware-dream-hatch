import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA_LINK = "https://getrewarrds.com/aff_c?offer_id=2987&aff_id=21664&source=job";

export const CTASection = () => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-gradient-to-br from-primary/20 via-card/50 to-secondary/20 backdrop-blur-sm border border-primary/40 rounded-2xl md:rounded-3xl p-8 md:p-16 glow-cyan">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-glow leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto px-2 leading-relaxed">
            Join thousands of gamers who've already taken the first step towards their dream career at Alienware
          </p>
          
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-lg px-4">
            <Button 
              variant="cta" 
              size="lg" 
              className="h-14 sm:h-16 md:h-18 w-full px-4 sm:px-10 md:px-16 text-sm sm:text-base md:text-lg lg:text-xl rounded-xl md:rounded-2xl group"
            >
              <span className="flex items-center justify-center gap-1 sm:gap-2 min-w-0">
                <span className="truncate">👉 Apply Now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
          </a>
          
          <p className="mt-6 md:mt-8 text-xs sm:text-sm text-muted-foreground">
            Application takes less than 5 minutes ⚡
          </p>
        </div>
      </div>
    </section>
  );
};
