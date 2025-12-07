import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const plans = [
  {
    name: "🌶️ Starter",
    desc: "For small teams starting with AI calling.",
    credits: "100 included credits",
    features: ["Inbound AI call handling", "CRM note logging", "SMS follow-up summaries", "Standard business hours support"],
    cta: "Talk to us"
  },
  {
    name: "💠 Growth",
    desc: "For teams running AI calling every day.",
    credits: "1,000 included credits",
    highlight: true,
    features: ["Inbound & outbound AI agents", "Full CRM 2-way sync", "SMS & WhatsApp automation", "Priority support & routing"],
    cta: "Book Strategy Call"
  },
  {
    name: "🧠 Custom",
    desc: "For operators with high call volume.",
    credits: "3,000 included credits",
    features: ["Multi-location routing", "Custom CRM integrations", "Dedicated engineer", "SLA options & white-label"],
    cta: "Contact Sales"
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-[#050509]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Pick a plan and pay only for what you use
          </h2>
          <p className="text-muted-foreground text-lg">
            Start small and add more credits anytime
          </p>
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
                <div className="mt-3 text-primary font-semibold text-lg">{plan.credits}</div>
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
                <a href="https://cal.com/blacksync.ai/discovery-call1" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className={`w-full ${plan.highlight ? 'bg-primary hover:bg-primary/90' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
