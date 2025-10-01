import { Button } from "@/components/ui/button";
import { Monitor, Megaphone, Gamepad, Sparkles } from "lucide-react";
import { useState } from "react";

const CTA_LINK = "https://getrewarrds.com/aff_c?offer_id=2987&aff_id=21664&source=job";

const options = [
  { icon: Monitor, label: "Tech 🖥️", value: "tech" },
  { icon: Megaphone, label: "Marketing 📢", value: "marketing" },
  { icon: Gamepad, label: "Gaming 🎮", value: "gaming" },
  { icon: Sparkles, label: "Other 🚀", value: "other" },
];

export const EngagementPoll = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    // After selection, redirect to CTA after a brief moment
    setTimeout(() => {
      window.open(CTA_LINK, '_blank');
    }, 500);
  };

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl md:rounded-3xl p-6 md:p-12 glow-subtle">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-glow">
            What kind of role excites you most?
          </h2>
          
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`p-4 md:p-6 rounded-lg md:rounded-xl border-2 transition-all duration-300 active:scale-95 md:hover:scale-105 min-h-[100px] md:min-h-0 ${
                  selected === option.value
                    ? 'border-primary bg-primary/20 glow-cyan'
                    : 'border-border bg-background/50 hover:border-primary/50'
                }`}
              >
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <option.icon className={`w-6 h-6 md:w-8 md:h-8 ${
                    selected === option.value ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <span className={`font-semibold text-xs sm:text-sm md:text-base ${
                    selected === option.value ? 'text-primary' : 'text-foreground'
                  }`}>
                    {option.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
          
          {selected && (
            <div className="mt-6 md:mt-8 text-center animate-fade-in-up">
              <p className="text-secondary text-base md:text-lg font-semibold mb-4">
                Great choice! Let's get you started 🚀
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
