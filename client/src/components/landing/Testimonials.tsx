import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "We used to miss 30% of our inbound calls. BlackSync caught all of them and booked 15 extra appointments in the first week.",
    author: "Sarah J.",
    role: "Clinic Owner",
    metric: "+15 Appts/Week"
  },
  {
    quote: "It actually sounds like a human. My team was skeptical, but now they love that the grunt work is done before they even log in.",
    author: "Mike T.",
    role: "Real Estate Broker",
    metric: "Zero Missed Leads"
  },
  {
    quote: "The CRM integration is flawless. It updates statuses and adds notes exactly how we would do it manually.",
    author: "David R.",
    role: "HVAC Operations",
    metric: "100% Auto-Logged"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#080a10] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Teams stay because the AI actually does the work.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">{t.author}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                    {t.metric}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
