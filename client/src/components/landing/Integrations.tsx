import { motion } from "framer-motion";

const integrations = [
  "Salesforce", "HubSpot", "Zoho", "Sierra Interactive", "Follow Up Boss", 
  "Twilio", "Telnyx", "Gmail", "Outlook", "Google Calendar", "Zendesk", "Stripe"
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

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {integrations.map((name, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-xl font-bold text-white/40 hover:text-white/80 transition-colors cursor-default"
            >
              {name}
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
