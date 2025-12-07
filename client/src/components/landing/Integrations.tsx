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
  { name: "RingCentral", icon: PhoneCall },
  { name: "Pipedrive", icon: Database },
  { name: "Monday CRM", icon: Database },
  { name: "Copper CRM", icon: Database },
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

const row1 = crmStack.slice(0, 18);
const row2 = crmStack.slice(18);

function IntegrationBadge({ integration }: { integration: Integration }) {
  const Icon = integration.icon;
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors whitespace-nowrap">
      <Icon className="h-4 w-4 text-white/60" />
      <span className="text-sm font-medium text-white/80">{integration.name}</span>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", speed = 25 }: { items: Integration[], direction?: "left" | "right", speed?: number }) {
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <div className="relative overflow-hidden py-2">
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"]
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((integration, i) => (
          <IntegrationBadge key={`${integration.name}-${i}`} integration={integration} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Integrations() {
  return (
    <section className="py-20 border-y border-white/5 bg-[#050509] overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <h3 className="text-2xl font-display font-semibold text-white mb-2">
          Works With What You Already Use
        </h3>
        <p className="text-muted-foreground">
          Connect BlackSync to your CRM, phone system, inbox, and calendar
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050509] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050509] to-transparent z-10 pointer-events-none" />
        
        <MarqueeRow items={row1} direction="left" speed={15} />
        <MarqueeRow items={row2} direction="right" speed={18} />
      </div>

      <div className="container mx-auto px-4 text-center mt-10">
        <p className="text-sm text-primary/80 font-medium">
          If it has an API, we integrate it.
        </p>
      </div>
    </section>
  );
}
