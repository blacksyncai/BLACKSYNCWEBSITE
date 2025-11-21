import { Check, X } from "lucide-react";

const features = [
  { name: "24/7 availability", blacksync: true, chatbot: true, callcenter: true },
  { name: "Deep CRM integration", blacksync: true, chatbot: false, callcenter: false },
  { name: "Custom workflows", blacksync: true, chatbot: false, callcenter: "Partial" },
  { name: "No scripts needed from client", blacksync: true, chatbot: false, callcenter: true },
  { name: "Full transcripts & summaries", blacksync: true, chatbot: true, callcenter: "Delayed" },
  { name: "Scales with volume", blacksync: true, chatbot: true, callcenter: false },
  { name: "Consistent tone every time", blacksync: true, chatbot: true, callcenter: false },
];

export default function ComparisonTable() {
  return (
    <section className="py-24 bg-[#080a10]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Designed for operators who care about results, not toys.
          </h2>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px] bg-white/5 rounded-2xl border border-white/10 p-8">
            <div className="grid grid-cols-4 gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="text-lg font-bold text-muted-foreground">Feature</div>
              <div className="text-xl font-bold text-white text-center">BlackSync AI</div>
              <div className="text-lg font-bold text-muted-foreground text-center">Basic Chatbot</div>
              <div className="text-lg font-bold text-muted-foreground text-center">Call Center</div>
            </div>

            {features.map((row, i) => (
              <div key={i} className="grid grid-cols-4 gap-4 py-4 items-center border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors px-4 -mx-4">
                <div className="font-medium text-gray-300">{row.name}</div>
                
                {/* BlackSync Column */}
                <div className="flex justify-center">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Check className="h-5 w-5" />
                  </div>
                </div>

                {/* Chatbot Column */}
                <div className="flex justify-center text-muted-foreground">
                  {row.chatbot === true ? <Check className="h-5 w-5" /> : row.chatbot === false ? <X className="h-5 w-5 text-red-500/50" /> : <span className="text-sm">{row.chatbot}</span>}
                </div>

                {/* Call Center Column */}
                <div className="flex justify-center text-muted-foreground">
                  {row.callcenter === true ? <Check className="h-5 w-5" /> : row.callcenter === false ? <X className="h-5 w-5 text-red-500/50" /> : <span className="text-sm">{row.callcenter}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
