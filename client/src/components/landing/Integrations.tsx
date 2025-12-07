import { motion } from "framer-motion";
import {
  Cloud, Database, LineChart, Mail, PhoneCall, Calendar, Cable, Settings, Wrench, Gauge, SprayCan, Hammer, Home, Construction, Book, MessageSquare, MessageCircle, MessageSquareMore, Wallet, LucideIcon
} from "lucide-react";

interface Integration {
  name: string;
  icon: LucideIcon;
}

const crmStack: Integration[] = [
  { name: "Salesforce", icon: Cloud },
  { name: "HubSpot", icon: Database },
  { name: "Zoho CRM", icon: LineChart },
  { name: "GoHighLevel (GHL)", icon: LineChart },
  { name: "Follow Up Boss", icon: PhoneCall },
  { name: "Sierra Interactive", icon: PhoneCall },
  { name: "KVCore", icon: Database },
  { name: "Chime", icon: Database },
  { name: "Mitchell 1", icon: Settings },
  { name: "ShopMonkey", icon: Wrench },
  { name: "Identifix", icon: Wrench },
  { name: "Tekmetric", icon: Gauge },
  { name: "AutoLeap", icon: Wrench },
  { name: "ServiceMonster", icon: SprayCan },
  { name: "Jobber", icon: Hammer },
  { name: "Housecall Pro", icon: Home },
  { name: "ServiceTitan", icon: Construction },
  { name: "Twilio", icon: Cable },
  { name: "Telnyx", icon: Cable },
  { name: "Maqsam", icon: PhoneCall },
  { name: "CallRail", icon: PhoneCall },
  { name: "JustCall", icon: PhoneCall },
  { name: "RingCentral", icon: PhoneCall },
  { name: "Aircall", icon: PhoneCall },
  { name: "Gmail", icon: Mail },
  { name: "Outlook", icon: Mail },
  { name: "Microsoft 365", icon: Mail },
  { name: "Google Calendar", icon: Calendar },
  { name: "Notion", icon: Book },
  { name: "Slack", icon: MessageSquare },
  { name: "Stripe", icon: LineChart },
  { name: "QuickBooks", icon: Wallet },
  { name: "FreshBooks", icon: Wallet },
  { name: "Zendesk", icon: MessageCircle },
  { name: "Intercom", icon: MessageSquareMore },
];

export default function Integrations() {
  return (
    <section className="py-20 border-y border-white/5 bg-[#050509]">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-10">
          <h3 className="text-2xl font-display font-semibold text-white mb-2">
            Plug Into Your Stack
          </h3>
          <p className="text-muted-foreground">
            Plug BlackSync into the tools you already use.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {crmStack.map((integration, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300"
              data-testid={`integration-${integration.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <integration.icon className="h-6 w-6 text-primary/70 group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors text-center">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-sm text-primary/80 font-medium">
          If it has an API, we can sync it.
        </p>
      </div>
    </section>
  );
}
