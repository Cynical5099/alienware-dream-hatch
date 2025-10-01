import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA_LINK = "https://getrewarrds.com/aff_c?offer_id=2987&aff_id=21664&source=job";

export const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-gradient-to-br from-primary/20 via-card/50 to-secondary/20 backdrop-blur-sm border border-primary/40 rounded-3xl p-12 md:p-16 glow-cyan">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of gamers who've already taken the first step towards their dream career at Alienware
          </p>
          
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta" 
              size="lg" 
              className="h-16 px-16 text-2xl rounded-2xl group"
            >
              👉 Apply Now & Start Your Alienware Journey
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </a>
          
          <p className="mt-8 text-sm text-muted-foreground">
            Application takes less than 5 minutes ⚡
          </p>
        </div>
      </div>
    </section>
  );
};
