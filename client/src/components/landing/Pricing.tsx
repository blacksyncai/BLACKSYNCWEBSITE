import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    desc: "For small teams ready to stop missing calls.",
    features: ["Voice Agent for Inbound Calls", "Basic CRM Logging", "Email Summaries", "Standard Business Hours Support"],
    cta: "Talk to us"
  },
  {
    name: "Growth",
    desc: "For teams that want AI handling serious volume.",
    highlight: true,
    features: ["Inbound & Outbound Agents", "Full CRM 2-Way Sync", "SMS & WhatsApp Capabilities", "Priority Support", "Custom Workflows"],
    cta: "Book Strategy Call"
  },
  {
    name: "Custom",
    desc: "For operators with complex workflows.",
    features: ["Multi-Location Routing", "Custom API Integrations", "Dedicated Engineer", "SLA Guarantees", "White-Label Options"],
    cta: "Contact Sales"
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-[#050509]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Simple: we build, launch, and run your AI employees.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-white/10 bg-white/5 backdrop-blur-sm flex flex-col ${plan.highlight ? 'border-primary/50 shadow-[0_0_30px_-10px_rgba(37,99,235,0.3)] scale-105 z-10' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.highlight ? 'bg-primary hover:bg-primary/90' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
