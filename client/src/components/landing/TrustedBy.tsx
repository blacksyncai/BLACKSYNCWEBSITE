import { motion } from "framer-motion";

export default function TrustedBy() {
  const companies = [
    { name: "GEE Charter Schools", category: "Education" },
    { name: "MireloTeam", category: "Real Estate" },
    { name: "Alphapro Consulting", category: "Consulting" },
    { name: "Distinctive Dental", category: "Healthcare" },
    { name: "Broadway Auto Shop", category: "Automotive" },
    { name: "Al Suhami Holding Co.", category: "Trade & Manufacturing" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#050509] to-[#0B0D12] relative overflow-hidden border-b border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-mono text-primary/60 mb-2 tracking-widest uppercase">
            Trusted By Industry Leaders
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white/90">
            Powering AI Automation Across{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Industries
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              data-testid={`company-${company.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                  <p className="text-white/90 font-semibold mb-1 text-sm">
                    {company.name}
                  </p>
                  <span className="text-xs text-primary/60 font-mono tracking-wide">
                    {company.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* "And many more" card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 max-w-2xl mx-auto"
          data-testid="company-many-more"
        >
          <div className="relative bg-gradient-to-br from-primary/10 to-cyan-500/10 backdrop-blur-sm border border-primary/20 rounded-xl p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/30">
            <div className="flex items-center justify-center gap-3 text-center">
              <div className="flex -space-x-2">
                {[
                  { initials: "TC", bg: "from-blue-500 to-blue-600" },
                  { initials: "JM", bg: "from-purple-500 to-purple-600" },
                  { initials: "AS", bg: "from-cyan-500 to-cyan-600" },
                  { initials: "RK", bg: "from-green-500 to-green-600" },
                  { initials: "+12", bg: "from-primary to-cyan-500" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.bg} border-2 border-[#0B0D12] flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-[10px] font-bold text-white">{item.initials}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/70 font-semibold text-sm">
                And many more businesses{" "}
                <span className="text-primary">automating with AI</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
