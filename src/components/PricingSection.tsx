import { Check, Zap, Crown, Building2, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Student Access",
    price: "$49",
    period: "/month",
    description: "Perfect for SAP learners",
    icon: Zap,
    features: [
      "S/4HANA 2023 Access",
      "FICO Module",
      "8 Hours Daily",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "For SAP consultants",
    icon: Crown,
    features: [
      "Full S/4HANA Access",
      "All Modules Included",
      "24/7 Access",
      "Priority Support",
      "Custom Configurations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "For teams & companies",
    icon: Building2,
    features: [
      "Dedicated Server",
      "Multiple Users",
      "All Modules + GRC",
      "Custom Setup",
      "Phone Support",
      "Training Included",
    ],
    popular: false,
  },
  {
    name: "Dedicated Server",
    price: "$499",
    period: "/month",
    description: "Full infrastructure",
    icon: Server,
    features: [
      "Private S/4HANA Instance",
      "Unlimited Users",
      "Full Admin Access",
      "Custom Landscape",
      "24/7 Premium Support",
      "Backup & Recovery",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="plans" className="py-16 px-4">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Choose Your Plan
          </h2>
          <p className="text-muted-foreground text-lg">
            Flexible pricing for individuals and enterprises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card text-card-foreground rounded-3xl p-6 card-shadow transition-all duration-300 hover:-translate-y-2 hover:card-shadow-hover animate-slide-up ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge-gradient text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary/10">
                  <plan.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg">{plan.name}</h3>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <p className="text-muted-foreground text-sm mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                asChild
              >
                <a href="https://wa.me/19086206699" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
