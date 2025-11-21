import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050509] border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 md:p-16 text-center mb-20 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
              Ready to hire your first AI employee?
            </h2>
            <p className="text-lg text-gray-300">
              Tell us about your business. We’ll show you exactly what BlackSync AI would handle for you in the first 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-lg">
                Book a Strategy Call
              </Button>
              <Button variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 h-12 rounded-full text-lg">
                Watch Product Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-white mb-4">BlackSync AI</h3>
            <p className="text-muted-foreground max-w-xs mx-auto md:mx-0">
              Building the future of automated workforces for real businesses.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-white cursor-pointer">Voice Agents</li>
              <li className="hover:text-white cursor-pointer">SMS Automation</li>
              <li className="hover:text-white cursor-pointer">CRM Sync</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © {new Date().getFullYear()} BlackSync AI. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Twitter className="h-5 w-5 hover:text-white cursor-pointer" />
            <Linkedin className="h-5 w-5 hover:text-white cursor-pointer" />
            <Github className="h-5 w-5 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
