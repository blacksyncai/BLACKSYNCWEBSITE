import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Stethoscope, Wrench, Car, GraduationCap, Briefcase, Factory, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const industries = [
  {
    id: "real-estate",
    label: "Real Estate",
    icon: Building2,
    color: "text-blue-400",
    link: "https://blacksyncrealestate.com",
    linkText: "Check Out BlackSync for Real Estate",
    points: [
      "Reactivates CRM ponds (buyer, seller, FSBO) to revive old leads",
      "Books appointments from missed calls on signs, portals, and website",
      "Delivers real-time lead alerts and call summaries to agents"
    ]
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: Stethoscope,
    color: "text-emerald-400",
    link: "https://blacksync.clinic",
    linkText: "Check Out BlackSync for Clinics",
    points: [
      "Answers overflow and after-hours calls to prevent missed patients",
      "Manages booking, rescheduling, and confirmations",
      "Sends recall reminders and follow-ups to re-engage inactive patients"
    ]
  },
  {
    id: "home-services",
    label: "Home Services",
    icon: Wrench,
    color: "text-orange-400",
    points: [
      "Answers missed calls from Google Ads and referrals",
      "Sends quotes by SMS or email",
      "Follows up on open estimates until a decision is made"
    ]
  },
  {
    id: "automotive",
    label: "Automotive",
    icon: Car,
    color: "text-red-400",
    points: [
      "Schedules service appointments and test drives.",
      "Follows up on service recommendations.",
      "Handles parts inquiries and status updates."
    ]
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
    color: "text-yellow-400",
    points: [
      "Qualifies prospective student inquiries.",
      "Automates enrollment follow-ups and document collection.",
      "Answers common FAQ for parents and students."
    ]
  },
  {
    id: "agencies",
    label: "Agencies",
    icon: Briefcase,
    color: "text-purple-400",
    points: [
      "White-label AI solutions for your clients.",
      "Automates client reporting and updates.",
      "Scales lead qualification for high-volume campaigns."
    ]
  },
  {
    id: "trade-manufacturing",
    label: "Trade & Manufacturing",
    icon: Factory,
    color: "text-cyan-400",
    points: [
      "Automates supplier and vendor communications.",
      "Handles order inquiries and status updates.",
      "Streamlines B2B lead qualification and follow-ups.",
      "Proudly supporting Al Suhami Holding Company in Saudi Arabia."
    ]
  }
];

export default function IndustryTabs() {
  const [activeTab, setActiveTab] = useState(industries[0]);

  return (
    <section id="industries" className="py-24 bg-[#0B0D12] scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Industry-Ready AI Systems
          </h2>
          <p className="text-gray-400 text-lg">Flows built for your business — see proven automations from your industry</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry)}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 border",
                  activeTab.id === industry.id
                    ? "bg-white/10 border-primary/50 text-white"
                    : "bg-transparent border-transparent text-muted-foreground hover:bg-white/5 hover:text-white"
                )}
              >
                <industry.icon className={cn("h-5 w-5", activeTab.id === industry.id ? "text-primary" : "text-muted-foreground")} />
                <span className="font-medium">{industry.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={cn("p-3 rounded-xl bg-white/5", activeTab.color)}>
                      <activeTab.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{activeTab.label} Solutions</h3>
                  </div>

                  <ul className="space-y-6">
                    {activeTab.points.map((point, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        <p className="text-lg text-gray-300 leading-relaxed">{point}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Industry Specific Link */}
                {activeTab.link && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-10 pt-6 border-t border-white/10"
                  >
                    <a href={activeTab.link} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full sm:w-auto bg-primary/20 hover:bg-primary/30 text-primary hover:text-primary-foreground border border-primary/50 font-semibold">
                        {activeTab.linkText}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
