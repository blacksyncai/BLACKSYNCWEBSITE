import { motion } from "framer-motion";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  name: string;
  category: string;
}

export default function TrustedBy() {
  const companies: Logo[] = [
    { id: "gee", name: "GEE Charter Schools", category: "Education" },
    { id: "mirelo", name: "MireloTeam", category: "Real Estate" },
    { id: "alphapro", name: "Alphapro Consulting", category: "Consulting" },
    { id: "dental", name: "Distinctive Dental", category: "Healthcare" },
    { id: "broadway", name: "Broadway Auto Shop", category: "Automotive" },
    { id: "alsuhami", name: "Al Suhami Holding Co.", category: "Trade & Manufacturing" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#050509] to-[#0B0D12] relative overflow-hidden border-b border-white/5">
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
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white/90">
            Powering AI Automation Across{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Industries
            </span>
          </h2>
        </motion.div>

        {/* Auto-scrolling logo carousel */}
        <div className="pt-8">
          <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
            <Carousel
              opts={{ loop: true, dragFree: true }}
              plugins={[AutoScroll({ playOnInit: true, speed: 2, stopOnInteraction: false })]}
            >
              <CarouselContent className="ml-0">
                {[...companies, ...companies].map((company, index) => (
                  <CarouselItem
                    key={`${company.id}-${index}`}
                    className="flex basis-auto justify-center pl-0"
                  >
                    <div className="mx-2 flex shrink-0 items-center justify-center">
                      <div 
                        className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                        data-testid={`company-${company.id}`}
                      >
                        <p className="text-white/90 font-semibold text-xs sm:text-sm whitespace-nowrap">
                          {company.name}
                        </p>
                        <span className="text-[10px] sm:text-xs text-primary/60 font-mono tracking-wide">
                          {company.category}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050509] to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0B0D12] to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* "And many more" section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 max-w-2xl mx-auto"
          data-testid="company-many-more"
        >
          <div className="relative bg-gradient-to-br from-primary/10 to-cyan-500/10 backdrop-blur-sm border border-primary/20 rounded-xl p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/30">
            <div className="flex items-center justify-center gap-3 text-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-cyan-500/30 border-2 border-[#0B0D12] flex items-center justify-center"
                  >
                    <span className="text-xs text-white/60">+</span>
                  </div>
                ))}
              </div>
              <p className="text-white/70 font-semibold">
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
