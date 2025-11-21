import { motion } from "framer-motion";
import { Phone, GitBranch, BookOpen, Puzzle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "AI Voice & SMS Agents",
    description: "Handles inbound calls, missed calls, and outbound follow-up. Logs everything back into your CRM.",
    Icon: Phone,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-blue-600/5"
  },
  {
    title: "CRM & Workflow Automations",
    description: "Automatically creates tasks, updates lead statuses, adds notes, sends follow-up sequences, and keeps everything synced.",
    Icon: GitBranch,
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-cyan-600/5"
  },
  {
    title: "Industry-Specific Playbooks",
    description: "Pre-built flows for real estate, clinics, home services, automotive, schools, and agencies.",
    Icon: BookOpen,
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 to-yellow-600/5"
  },
  {
    title: "Custom Plugins & Integrations",
    description: "Deep integrations with CRMs, help desks, phone systems, and internal tools. Built like a real engineering partner.",
    Icon: Puzzle,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-purple-600/5"
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-[#080a10] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl mb-4"
          >
            Not a chatbot. A full-stack AI employee.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            BlackSync AI builds AI employees that plug into your existing tools. They answer calls, send texts, update your CRM, send emails, follow up on quotes, and keep your pipeline moving while your team sleeps.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="h-full border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground/80 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
