import { Flame } from "lucide-react";

export const SocialProof = () => {
  return (
    <div className="py-6 md:py-8 bg-card/30 backdrop-blur-sm border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-3 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center">
          <Flame className="w-5 h-5 md:w-6 md:h-6 text-primary animate-pulse flex-shrink-0" />
          <span className="text-foreground">
            Over <span className="text-primary text-glow">10,000</span> gamers applied this month
          </span>
        </div>
      </div>
    </div>
  );
};
