import { motion } from "framer-motion";
import { FileSearch, Wrench, Rocket, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Blueprint",
    subtitle: "Map your calls, workflows, and systems",
    desc: "We analyze your call patterns, business rules, offers, and tools to design the ideal flow for how AI should operate inside your business",
    icon: FileSearch
  },
  {
    number: "02",
    title: "Build",
    subtitle: "Engineer the voice, logic, and integrations",
    desc: "We design the script and voice, build the decision flows, and integrate it into your CRM, phone system, and scheduling tools",
    icon: Wrench
  },
  {
    number: "03",
    title: "Launch",
    subtitle: "Go live, monitor, and refine on real calls",
    desc: "We launch the AI in production, monitor real call outcomes, and continuously improve tone, routing, and booking accuracy based on real interactions",
    icon: Rocket
  },
  {
    number: "04",
    title: "Automate",
    subtitle: "Scale with new flows, plugins, and use cases",
    desc: "Once stable, we expand capabilities, automate more workflows, and add new use cases as your business grows",
    icon: Zap
  }
];

export default function Timeline() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #020204 0%, #0a0c14 50%, #050509 100%)' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.1)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.08)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              From Blueprint to Automation
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven process for building, launching, and scaling your AI
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Glowing Spine - Desktop Only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent blur-sm" />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center md:py-8 ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Center Node - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
                    <div className="w-14 h-14 rounded-full bg-[#0a0c14] border-2 border-primary flex items-center justify-center shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)]">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-4rem)] ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="relative group">
                      {/* Card Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Card Content */}
                      <div className="relative p-6 md:p-8 rounded-2xl bg-[#0a0c14]/80 border border-white/10 backdrop-blur-sm">
                        {/* Mobile Icon */}
                        <div className="flex md:hidden items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-[#0a0c14] border-2 border-primary flex items-center justify-center shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)]">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="text-sm text-primary font-mono">Step {step.number}</div>
                        </div>

                        {/* Step Number Badge - Desktop */}
                        <div className={`hidden md:block absolute top-6 ${isEven ? 'right-6' : 'left-6'}`}>
                          <span className="text-xs font-mono text-primary/60 tracking-wider">STEP {step.number}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 md:mt-4">{step.title}</h3>
                        <p className="text-primary font-medium mb-3">{step.subtitle}</p>
                        <p className="text-muted-foreground leading-relaxed">{step.desc}</p>

                        {/* Decorative Corner */}
                        <div className={`absolute bottom-0 ${isEven ? 'right-0' : 'left-0'} w-20 h-20 opacity-10`}>
                          <div className={`absolute bottom-0 ${isEven ? 'right-0' : 'left-0'} w-full h-full bg-gradient-to-${isEven ? 'tl' : 'tr'} from-primary/30 to-transparent rounded-2xl`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Completion Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="hidden md:flex justify-center mt-8"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)]">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
