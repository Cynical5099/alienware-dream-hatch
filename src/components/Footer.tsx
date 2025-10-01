import { Shield, Lock, CheckCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        {/* Trust Icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Lock className="w-5 h-5 text-secondary" />
            <span className="text-sm">SSL Secured</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-secondary" />
            <span className="text-sm">Verified Partner</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-secondary" />
            <span className="text-sm">Trusted Platform</span>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          <p>
            This is an independent promotional page. Official opportunities provided by Alienware.
          </p>
        </div>
      </div>
    </footer>
  );
};
