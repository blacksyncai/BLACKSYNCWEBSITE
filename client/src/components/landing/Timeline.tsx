import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Blueprint",
    desc: "We map your calls, workflows, and tools."
  },
  {
    number: "02",
    title: "Build & Train",
    desc: "We design the script, voice, prompts, and integrations."
  },
  {
    number: "03",
    title: "Launch & Optimize",
    desc: "We go live, monitor, and iterate based on real calls."
  },
  {
    number: "04",
    title: "Scale & Automate",
    desc: "Add more flows, plugins, and use cases as you grow."
  }
];

export default function Timeline() {
  return (
    <section className="py-24 bg-[#050509] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            From Blueprint to Automation
          </h2>
          <p className="text-muted-foreground">
            A proven process for building, launching, and scaling your AI
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative z-10 bg-[#050509] md:bg-transparent p-6 rounded-xl border border-white/5 md:border-none"
              >
                <div className="w-12 h-12 rounded-full bg-[#0B0D12] border border-primary/50 flex items-center justify-center text-primary font-bold text-lg mb-4 shadow-[0_0_15px_-3px_rgba(37,99,235,0.3)] mx-auto md:mx-0">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center md:text-left">{step.title}</h3>
                <p className="text-muted-foreground text-sm text-center md:text-left">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
