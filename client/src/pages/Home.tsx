import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import FeatureGrid from "@/components/landing/FeatureGrid";
import Integrations from "@/components/landing/Integrations";
import IndustryTabs from "@/components/landing/IndustryTabs";
import Timeline from "@/components/landing/Timeline";
import Pricing from "@/components/landing/Pricing";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050509] text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <FeatureGrid />
      <Integrations />
      <IndustryTabs />
      <Timeline />
      <Pricing />
      <div className="py-24 bg-[#050509]">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 md:p-12">
             <div>
               <h2 className="text-3xl font-heading font-bold text-white mb-4">
                 Need something wild? <br />
                 <span className="text-primary">We'll engineer it.</span>
               </h2>
               <p className="text-gray-400 text-lg mb-6">
                 Beyond pre-built flows, BlackSync AI acts as your AI engineering partner. We help you design custom agents, workflows, and data flows tailored to your business.
               </p>
               <ul className="space-y-2 mb-8 text-gray-300">
                 <li className="flex items-center gap-2">
                   <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                   Custom agents for dispatch, quoting, collections
                 </li>
                 <li className="flex items-center gap-2">
                   <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                   Internal tools and dashboards
                 </li>
                 <li className="flex items-center gap-2">
                   <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                   API-first approach
                 </li>
               </ul>
             </div>
             <div className="relative h-64 md:h-full bg-black/50 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
               <div className="text-center">
                 <div className="text-6xl mb-2">🛠️</div>
                 <p className="text-sm font-mono text-primary/70">Custom Engineering</p>
               </div>
             </div>
           </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
