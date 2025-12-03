import { motion } from "framer-motion";
import { Mic, Cog, Code, Brain, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#050509] text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              BlackSync:{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                The Autonomous Operations Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We engineer and deploy <strong className="text-white">AI Operational Systems</strong>—the high-performance, autonomous backbone that runs your entire business front-office and back-office.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-b from-[#050509] to-[#0B0D12]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/20 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                We are not a chatbot company; we build <strong className="text-white">mission-critical infrastructure</strong>. Our multi-agent architecture replaces resource-heavy, repetitive human workflows with self-governing AI systems that achieve unmatched speed, accuracy, and seamless integration into your entire data ecosystem.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Defines Autonomous Operations */}
      <section className="py-20 bg-[#0B0D12]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              What Defines Autonomous Operations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* AI Operators */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Mic className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">AI Operators (Voice, Chat, Multi-Channel)</h3>
              </div>
              <p className="text-gray-400 mb-6">
                These are integrated, business-aware agents—not scripts—that handle high-volume communication with human-level nuance and system-level efficiency.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Real-time Voice Handling:</strong> Missed inbound calls are instantly picked up by a dedicated AI employee for real-time handling, qualification, and routing.</span>
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Intake & Qualification:</strong> Autonomous lead qualification, deep-context routing, and dynamic scoring.</span>
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Transaction Logic:</strong> Instantaneous quote generation based on internal pricing rules and full calendar control.</span>
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Persistent Follow-up:</strong> Multi-channel communication across SMS, email, and WhatsApp.</span>
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">CRM Action:</strong> Real-time data updates, workflow triggers, and schema enforcement.</span>
                </li>
              </ul>
            </motion.div>

            {/* Workflow Engines */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Cog className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Workflow Engines & System Automation</h3>
              </div>
              <p className="text-gray-400 mb-6">
                The internal logic that guarantees your operation is predictable, consistent, and fast:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Advanced lead revival and pipeline management systems.</span>
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Autonomous payment, invoicing, and collections flows.</strong></span>
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Routing, compliance, and SLA logic governance.</span>
                </li>
                <li className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span className="text-gray-300">High-volume data enrichment, pipeline cleanup, and multi-system syncing.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-Stack Engineering */}
      <section className="py-20 bg-[#050509]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                <Code className="h-6 w-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                Full-Stack Engineering & System Architecture
              </h2>
            </div>
            <p className="text-lg text-gray-400 mb-8">
              Beyond the AI agents, BlackSync handles the entire technology stack to ensure zero-downtime integration and complete control:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Custom CRMs, client portals, and internal BI dashboards",
                "Web & mobile application development",
                "Payment infrastructure (Stripe, Qliq, QuickBooks)",
                "Deep API integration (Zoho, ServiceMonster, Odoo, Airtable, Supabase)"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-purple-400" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology & Team */}
      <section className="py-20 bg-[#0B0D12]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                Technology & The Elite Team
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Technology */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Technology Backbone</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-primary font-semibold mb-2">NVIDIA AI Foundry Stack</h4>
                  <p className="text-gray-400">The technological foundation for enterprise scale: NeMo (industry-tuned models), NIM (high-performance microservices), and DGX Cloud (enterprise training).</p>
                </div>
                <div>
                  <h4 className="text-primary font-semibold mb-2">BlackSync Orchestration Engine</h4>
                  <p className="text-gray-400">Our proprietary router that transforms AI from "assistant" to "autonomous workforce" by deciding <strong className="text-white">who acts, what logic to apply, and which system to trigger.</strong></p>
                </div>
              </div>
            </motion.div>

            {/* Team */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-5 w-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">The Elite Crew</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Hamza Basal & Rook</h4>
                  <p className="text-gray-400">Founder / Systems Architect & Chief Systems Architect / Head of AI Infrastructure lead model engineering and multi-agent deployment.</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Vex</h4>
                  <p className="text-gray-400">Lead Voice Pipeline Engineer ensures cutting-edge telephony logic, real-time voice routing, and orchestration.</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Alpha Pro Consulting Partnership</h4>
                  <p className="text-gray-400">Delivers enterprise data infrastructure (governance, security, compliance) for scale across MENA, Europe, and Africa.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[#050509]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Our Philosophy: Operational Leverage
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              We don't automate tasks. <strong className="text-white">We rebuild operations.</strong>
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { highlight: "Systems", text: "over Staff" },
                { highlight: "Intelligence", text: "over Scripts" },
                { highlight: "Data", text: "over Opinions" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <span className="text-2xl font-bold text-primary">{item.highlight}</span>
                  <span className="text-gray-400 ml-2">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-xl text-gray-300 mb-8">
              BlackSync creates the <strong className="text-white">unfair operational leverage</strong> that sets industry leaders apart. This is the new backbone of modern business.
            </p>

            <a href="https://cal.com/blacksync.ai/discovery-call1" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12 rounded-full">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
