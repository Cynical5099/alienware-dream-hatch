import { MousePointerClick, FileText, CheckCircle2, Briefcase } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    number: "1️⃣",
    title: "Click Apply Now",
  },
  {
    icon: FileText,
    number: "2️⃣",
    title: "Submit your basic info",
  },
  {
    icon: CheckCircle2,
    number: "3️⃣",
    title: "Complete your application",
  },
  {
    icon: Briefcase,
    number: "4️⃣",
    title: "Browse and choose the Alienware job you want",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 text-glow">
          ➡️ How It Works
        </h2>
        <p className="text-lg md:text-xl text-center text-muted-foreground mb-10 md:mb-16">
          (So Simple!)
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:border-primary/60 transition-all duration-300 hover:glow-subtle h-full">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="p-3 md:p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">{step.number}</div>
                <h3 className="text-base md:text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
