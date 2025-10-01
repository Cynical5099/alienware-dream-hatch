import { Laptop, Gamepad2, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Laptop,
    title: "💻 Work with cutting-edge Alienware gaming tech",
  },
  {
    icon: Gamepad2,
    title: "🎮 Be part of the global gamer community",
  },
  {
    icon: Rocket,
    title: "🚀 Flexible opportunities for all skill levels",
  },
];

export const Benefits = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-glow">
          What's In It For You?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-secondary/30 rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:border-secondary/60 transition-all duration-300 hover:glow-green group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="p-3 md:p-4 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-secondary" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
