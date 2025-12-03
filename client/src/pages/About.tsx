import { motion } from "framer-motion";
import { Mic, Cog, Code, Brain, Users, ArrowRight, Phone, MessageSquare, Calendar, FileText, CreditCard, Database, Globe, Shield, Zap, Cpu, Cloud, Server, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MorphingCardStack } from "@/components/ui/morphing-card-stack";
import { WarpBackground } from "@/components/ui/warp-background";
import { LampContainer } from "@/components/ui/lamp";
import { GridBackground } from "@/components/ui/glowing-card";
import DisplayCards from "@/components/ui/display-cards";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function About() {
  const team = [
    { name: "Hamza Basal", role: "Founder / Systems Architect", desc: "Product direction, system architecture, enterprise deployment strategy." },
    { name: "Rook", role: "Chief Systems Architect / Head of AI Infrastructure", desc: "NVIDIA stack, model engineering, microservices, multi-agent architecture." },
    { name: "Arya", role: "Software Engineer (Automation & Systems)", desc: "Automation engines, API layers, internal tooling, multi-agent workflows." },
    { name: "Danny", role: "Director of Sales & Partnerships", desc: "Revenue leadership, partnerships, enterprise acquisition." },
    { name: "Dominic", role: "Account Executive", desc: "Outbound, demos, qualification, client onboarding." },
    { name: "Vex", role: "Lead Voice Pipeline Engineer", desc: "Telephony logic, real-time voice routing, agent orchestration." },
    { name: "Luna", role: "UX & Flow Designer", desc: "Conversation architecture, objection handling, decision-tree design." },
  ];

  const industries = [
    "Healthcare (clinics, rehab, patient intake operations)",
    "Real Estate (teams, brokerages, ISA operations)",
    "Automotive Services (repair shops, service networks)",
    "Field Operations & Exterior Services",
    "Education & Academies (inquiries, scheduling, enrollment)",
    "Enterprise Teams needing custom AI + data infrastructure"
  ];

  return (
    <div className="min-h-screen bg-[#050509] text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <GridBackground
              title="About BlackSync"
              description="BlackSync builds AI operational systems — the automation backbone that runs intake, scheduling, quoting, follow-up, payments, CRM workflows, and customer communication."
              showAvailability={true}
              className="rounded-2xl"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-lg mt-8">
                <div className="bg-white/5 border border-white/10 rounded-full px-6 py-3">
                  <span className="text-gray-400">We don't build chatbots.</span>
                </div>
                <div className="bg-primary/20 border border-primary/30 rounded-full px-6 py-3">
                  <span className="text-primary font-semibold">We build infrastructure.</span>
                </div>
              </div>
            </GridBackground>
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
                Our multi-agent architecture replaces repetitive human workflows with autonomous AI systems that operate with speed, accuracy, and full integration into your data stack.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Power */}
      <section className="py-20 bg-[#0B0D12] relative overflow-hidden">
        {/* Cyan glow effect at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent mb-4">
              What We Power
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* AI Operators */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Mic className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">AI Operators (Voice + Chat)</h3>
              </div>
              <p className="text-primary font-medium mb-6">Autonomous, integrated, business-aware.</p>
              <ul className="space-y-3">
                {[
                  { icon: Phone, text: "Real-time call handling" },
                  { icon: Users, text: "Lead qualification & routing" },
                  { icon: Calendar, text: "Scheduling logic & calendar control" },
                  { icon: FileText, text: "Quote generation with pricing rules" },
                  { icon: MessageSquare, text: "Multi-channel follow-up (SMS, email, WhatsApp)" },
                  { icon: Database, text: "CRM updates & workflow triggers" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <item.icon className="h-4 w-4 text-primary" />
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 italic">These aren't scripts.<br /><span className="text-white font-semibold">These are operational agents.</span></p>
              </div>
            </motion.div>

            {/* Workflow Engines */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Cog className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Workflow Engines & System Automation</h3>
              </div>
              <p className="text-cyan-400 font-medium mb-6">We build the internal engines that run daily operations:</p>
              <ul className="space-y-3">
                {[
                  "Lead revival systems",
                  "Missed calls? Doesn't happen. AI re-routes so you never miss a call or use voicemail again",
                  "Automated payment & invoice flows",
                  "Data enrichment & pipeline cleanup",
                  "Routing, compliance, SLA logic",
                  "Multi-system syncing & reporting",
                  "Embedded business logic",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white font-semibold">Your operation becomes predictable, consistent, and fast.</p>
              </div>
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
                Full-Stack Engineering
              </h2>
            </div>
            <p className="text-lg text-gray-400 mb-8">
              Beyond AI, we build:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Web & mobile applications",
                "Custom CRMs & client portals",
                "Scheduling & dispatch platforms",
                "Payment infrastructures (Stripe, Qliq, QuickBooks)",
                "Internal admin tools + BI dashboards",
                "Deep API integrations (Zoho, Sierra, ServiceMonster, Odoo, Airtable, Supabase, etc.)"
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
            <p className="text-center text-lg">
              <span className="text-gray-400">From idea → architecture → deployment.</span><br />
              <span className="text-white font-semibold">BlackSync handles the entire stack.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Backbone */}
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
                Technology Backbone
              </h2>
            </div>
            <p className="text-gray-400 text-lg">Built on NVIDIA's AI Foundry Stack</p>
          </motion.div>

          <div className="max-w-md mx-auto mb-12">
            <MorphingCardStack
              defaultLayout="stack"
              cards={[
                {
                  id: "nemo",
                  title: "NVIDIA NeMo",
                  description: "Industry-tuned models trained on real workflows, SOPs, pricing rules, CRM schemas, and operational data.",
                  icon: <Cpu className="h-5 w-5" />,
                },
                {
                  id: "nim",
                  title: "NVIDIA NIM",
                  description: "Every agent becomes a dedicated high-performance microservice (voice agents, schedulers, quoting engines, follow-up agents, collections bots).",
                  icon: <Server className="h-5 w-5" />,
                },
                {
                  id: "dgx",
                  title: "NVIDIA DGX Cloud",
                  description: "Enterprise-grade training, fine-tuning, and multi-agent inference at scale.",
                  icon: <Cloud className="h-5 w-5" />,
                },
                {
                  id: "orchestration",
                  title: "BlackSync Orchestration Engine",
                  description: "Our router decides: Who acts, what logic to apply, what data to update, which system to trigger.",
                  icon: <Route className="h-5 w-5" />,
                },
              ]}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-gray-400">
              This is what transforms AI from "assistant" →{" "}
              <span className="text-white font-semibold">autonomous workforce.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alpha Pro Partnership */}
      <section className="py-20 bg-[#050509] relative overflow-hidden">
        {/* Red radial glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-[#0B0D12] to-[#050509] border border-red-500/20 rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Subtle top red line accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                    Enterprise Data Infrastructure
                  </h2>
                  <p className="text-red-400 font-medium">Alpha Pro Partnership</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-8 text-lg">
                BlackSync partners with <strong className="text-red-400">Alpha Pro Consulting</strong>, a leading enterprise data firm specializing in:
              </p>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                {[
                  "AI-driven data management",
                  "Cloud infrastructure",
                  "Cybersecurity",
                  "Data governance & compliance",
                  "High-volume ETL & pipelines",
                  "Enterprise consulting & staffing"
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/40 rounded-xl p-4 text-center text-gray-300 text-sm transition-all duration-300 hover:bg-red-500/5"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-red-500/10 to-red-600/5 border-l-4 border-red-500 rounded-r-xl p-6 mb-8">
                <h4 className="text-white font-semibold mb-4">Together, BlackSync + Alpha Pro deliver:</h4>
                <ul className="space-y-3">
                  {[
                    "AI systems + the data backbone they run on",
                    "Secure, governed, enterprise-grade deployments",
                    "Zero-downtime integrations",
                    "Full Ops + full Data + full AI stack"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <Zap className="h-4 w-4 text-red-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-center text-gray-400 text-lg">
                This is the difference between an AI feature and{" "}
                <span className="text-red-400 font-semibold">a real enterprise system.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-[#0B0D12]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Who We Serve
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300"
              >
                {industry}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Any organization running high-volume communication or repetitive workflows —{" "}
            <span className="text-primary font-semibold">BlackSync replaces 60–90% of that workload.</span>
          </motion.p>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20 bg-[#050509]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                The Team
              </h2>
            </div>
            <p className="text-gray-400 text-lg">A small, elite, engineering-first crew.</p>
          </motion.div>

          {/* Display Cards for Team */}
          <div className="flex justify-center mb-16">
            <DisplayCards 
              cards={[
                {
                  icon: <Brain className="size-4 text-cyan-300" />,
                  title: team[0].name,
                  description: team[0].role,
                  date: team[0].desc,
                  iconClassName: "bg-cyan-800",
                  titleClassName: "text-cyan-400",
                  className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                },
                {
                  icon: <Cpu className="size-4 text-purple-300" />,
                  title: team[1].name,
                  description: team[1].role,
                  date: team[1].desc,
                  iconClassName: "bg-purple-800",
                  titleClassName: "text-purple-400",
                  className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                },
                {
                  icon: <Cog className="size-4 text-blue-300" />,
                  title: team[2].name,
                  description: team[2].role,
                  date: team[2].desc,
                  iconClassName: "bg-blue-800",
                  titleClassName: "text-blue-400",
                  className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
                },
              ]}
            />
          </div>

          {/* Remaining team members in grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
            {team.slice(3).map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <h4 className="text-white font-bold mb-1">{member.name}</h4>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <Globe className="h-5 w-5 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold text-sm">Global Engineering Network</p>
              <p className="text-gray-400 text-xs">US/EU/MENA</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <Shield className="h-5 w-5 text-green-400 mx-auto mb-2" />
              <p className="text-white font-semibold text-sm">Alpha Pro Consulting</p>
              <p className="text-gray-400 text-xs">Enterprise Data Arm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[#0B0D12]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Philosophy
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We don't automate tasks.<br />
              <span className="text-white font-semibold">We rebuild operations.</span>
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
              {[
                { highlight: "Systems", text: "> staff" },
                { highlight: "Automation", text: "> repetition" },
                { highlight: "Data", text: "> opinions" },
                { highlight: "Intelligence", text: "> scripts" },
                { highlight: "Infrastructure", text: "> features" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <span className="text-lg font-bold text-primary">{item.highlight}</span>
                  <span className="text-gray-400 ml-1 text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-gray-300">
              BlackSync creates <span className="text-white font-semibold">unfair operational leverage</span> — the kind people notice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Future of Ops */}
      <section className="py-20 bg-[#050509]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
              The Future of Ops
            </h2>
            <p className="text-gray-400 mb-8">The modern business runs on:</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
              {[
                "AI Intake",
                "AI Scheduling",
                "AI Quoting",
                "AI Follow-Up",
                "AI Collections",
                "AI Data-Cleaning",
                "AI Pipeline Management",
                "And more..."
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-gradient-to-br from-primary/20 to-cyan-500/20 border border-primary/30 rounded-xl p-4"
                >
                  <span className="text-white font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-xl text-gray-300 mb-4">
              All inside the <span className="text-primary font-semibold">BlackSync Operating System.</span>
            </p>
            <p className="text-lg text-gray-400 mb-8">
              A true AI workforce — not a gimmick.<br />
              This is the new backbone of business operations.<br />
              <span className="text-white font-semibold">And we're engineering it now.</span>
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
