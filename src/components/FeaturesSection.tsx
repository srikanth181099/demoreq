import { Server, Users, Clock, Shield, BookOpen, Headphones } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Enterprise S/4HANA",
    description: "Access real SAP S/4HANA 2023 systems with full Fiori UI experience",
  },
  {
    icon: Users,
    title: "Multi-User Access",
    description: "Dedicated login credentials with personalized learning environment",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Practice anytime with round-the-clock system availability",
  },
  {
    icon: Shield,
    title: "Secure Environment",
    description: "Enterprise-grade security for your practice sessions",
  },
  {
    icon: BookOpen,
    title: "Training Materials",
    description: "Comprehensive video tutorials and documentation included",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Get help from SAP professionals via WhatsApp",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Everything You Need to Master SAP
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get hands-on experience with real SAP systems and accelerate your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
