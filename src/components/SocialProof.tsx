import { Flame } from "lucide-react";

export const SocialProof = () => {
  return (
    <div className="py-8 bg-card/30 backdrop-blur-sm border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 text-lg md:text-xl font-semibold">
          <Flame className="w-6 h-6 text-primary animate-pulse" />
          <span className="text-foreground">
            Over <span className="text-primary text-glow">10,000</span> gamers have already applied this month
          </span>
        </div>
      </div>
    </div>
  );
};
