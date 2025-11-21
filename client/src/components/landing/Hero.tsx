import { motion } from "framer-motion";
import { Phone, Database, Mail, Calendar, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/glowing_3d_ai_brain_network_node_for_hero_section.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20 pb-16 md:pt-32 lg:flex lg:items-center lg:justify-center bg-[#050509]">
      {/* Background gradient effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#050509] via-[#080a10] to-[#0B0D12] z-0" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column: Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-sm"
              >
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                AI Employees for Real Businesses
              </motion.div>
              
              <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-6xl xl:text-7xl">
                The Brain That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Never Logs Out
                </span>
              </h1>
              
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed">
                BlackSync AI isn’t just answering phones; it’s plugged into your calendar, your CRM, your point of sale, your entire workflow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12 rounded-full shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)] transition-all">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white h-12 rounded-full backdrop-blur-sm">
                <Play className="mr-2 h-4 w-4 fill-current" />
                Watch a Live Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-primary/10 text-primary">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span>24/7 AI agents for calls & texts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-secondary/10 text-secondary">
                  <Database className="h-3.5 w-3.5" />
                </div>
                <span>Deep CRM & workflow automations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-accent/10 text-accent">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span>Never miss a lead or quote request</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-purple-500/10 text-purple-400">
                  <Calendar className="h-3.5 w-3.5" />
                </div>
                <span>Custom plugins for your stack</span>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground/60 pt-4 border-t border-white/5">
              Trusted by teams in real estate, healthcare, home services, automotive, and education.
            </p>
          </motion.div>

          {/* Right Column: 3D Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[600px] aspect-square">
              {/* Glow effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[100px] rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-secondary/20 blur-[80px] rounded-full mix-blend-screen" />
              
              {/* Main Image */}
              <motion.img 
                src={heroImage} 
                alt="AI Brain Network"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 1, 0, -1, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Floating Orbiting Icons */}
              {[
                { Icon: Phone, color: "text-primary", bg: "bg-primary/10", border: "border-primary/20", delay: 0, x: 40, y: -40 },
                { Icon: Database, color: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/20", delay: 1, x: -40, y: 20 },
                { Icon: Mail, color: "text-accent", bg: "bg-accent/10", border: "border-accent/20", delay: 2, x: 30, y: 50 },
                { Icon: Calendar, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", delay: 3, x: -30, y: -50 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute top-1/2 left-1/2 p-3 rounded-xl glass-card ${item.border} backdrop-blur-xl z-20`}
                  animate={{
                    x: [item.x, item.x + (index % 2 === 0 ? 10 : -10), item.x],
                    y: [item.y, item.y + (index % 2 === 0 ? -10 : 10), item.y],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: item.delay,
                    ease: "easeInOut"
                  }}
                >
                  <item.Icon className={`h-6 w-6 ${item.color}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
