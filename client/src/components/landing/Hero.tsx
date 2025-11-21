import { motion } from "framer-motion";
import { Phone, Database, Mail, Calendar, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20 pb-16 md:pt-32 bg-[#050509]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-10"
        fill="white"
      />
      
      {/* 3D Scene Background - Full Coverage */}
      <div className="absolute inset-0 z-0">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full scale-125 md:scale-100 lg:scale-110 translate-x-1/4 md:translate-x-1/3 lg:translate-x-[20%]"
        />
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050509] via-[#050509]/80 to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050509]/20 to-[#050509] z-0 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 h-full flex items-center">
        <div className="max-w-2xl">
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
              
              <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-6xl xl:text-7xl drop-shadow-2xl">
                The Brain That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Never Logs Out
                </span>
              </h1>
              
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed drop-shadow-lg">
                BlackSync AI isn’t just answering phones; it’s plugged into your calendar, your CRM, your point of sale, your entire workflow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://cal.com/blacksync.ai/discovery-call1" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12 rounded-full shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)] transition-all w-full sm:w-auto">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
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
        </div>
      </div>
    </section>
  );
}
