import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container max-w-5xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-primary">Now Available: S/4HANA 2023</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight animate-fade-in">
          Master SAP S/4HANA
          <br />
          <span className="text-foreground">With Real Systems</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Get hands-on experience with enterprise-grade SAP environments. 
          Practice on official Fiori UI with 24/7 remote access.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="xl" asChild className="group">
            <a href="#demo">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Start Free Demo
            </a>
          </Button>
          
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#videos">
              <Play className="w-5 h-5" />
              Training Videos
            </a>
          </Button>
          
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#plans">
              View Pricing
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">500+</span>
            <span className="text-sm">Active Users</span>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">24/7</span>
            <span className="text-sm">System Access</span>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">99.9%</span>
            <span className="text-sm">Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
