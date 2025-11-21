import { motion } from "framer-motion";
import blueprintImage from "@assets/generated_images/dark_schematic_background_for_automation_blueprint.png";
import { PhoneCall, MessageSquare, CheckSquare, Mail, Globe } from "lucide-react";

const nodes = [
  { id: 1, title: "Inbound & Missed Calls", icon: PhoneCall, x: "10%", y: "20%", desc: "Call comes in → AI answers on 5th ring → qualifies → sends summary to CRM" },
  { id: 2, title: "Texts & WhatsApp", icon: MessageSquare, x: "80%", y: "25%", desc: "Lead fills form → AI sends text → books appointment → logs in CRM" },
  { id: 3, title: "CRM & Tasks", icon: CheckSquare, x: "15%", y: "75%", desc: "Auto-creates tasks, updates statuses, adds notes" },
  { id: 4, title: "Email & Calendar", icon: Mail, x: "85%", y: "70%", desc: "Sends follow-up sequences, syncs calendar events" },
  { id: 5, title: "Web Forms & Chat", icon: Globe, x: "50%", y: "85%", desc: "Captures website leads, instant engagement" },
];

export default function BlueprintSchematic() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#050509]">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img src={blueprintImage} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-[#050509]" />

      <div className="container relative z-10 mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
          Your business, wired into one AI brain.
        </h2>
      </div>

      <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] hidden md:block">
        {/* Central Core Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-primary/30 bg-black/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.4)] z-20">
          <div className="w-24 h-24 rounded-full border-2 border-secondary/50 animate-spin-slow flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 animate-pulse" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-bold text-white text-sm tracking-wider">CORE</span>
          </div>
        </div>

        {/* Satellite Nodes */}
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            className="absolute w-64 p-4 rounded-xl glass-card border-white/10 bg-black/60 z-20 cursor-pointer group hover:border-primary/50 transition-colors"
            style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:text-white group-hover:bg-primary transition-colors">
                <node.icon className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-white mb-1">{node.title}</h4>
                <p className="text-xs text-muted-foreground leading-tight">{node.desc}</p>
              </div>
            </div>
            
            {/* Connection Line (Simplified CSS representation) */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] pointer-events-none -z-10 opacity-30 overflow-visible">
              <line 
                x1="50%" y1="50%" 
                x2={node.x === "50%" ? "50%" : node.x < "50%" ? "100%" : "0%"} 
                y2={node.y === "50%" ? "50%" : node.y < "50%" ? "100%" : "0%"} 
                stroke="url(#lineGradient)" 
                strokeWidth="1" 
                strokeDasharray="5,5"
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                  <stop offset="50%" stopColor="#2563EB" stopOpacity="1" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        ))}
      </div>
      
      {/* Mobile simplified view */}
      <div className="grid md:hidden gap-4 px-4">
        {nodes.map((node) => (
          <div key={node.id} className="p-4 rounded-xl border border-white/10 bg-white/5">
            <div className="flex items-center gap-3 mb-2">
              <node.icon className="h-5 w-5 text-primary" />
              <h4 className="font-bold text-white">{node.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground">{node.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
