import { Check, X } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

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
    <section className="bg-[#080a10] overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Designed for operators who care about{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                results, not toys.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
              Feature by feature, BlackSync AI outperforms basic chatbots and costly call centers.
            </p>
          </>
        }
      >
        <div className="h-full w-full bg-gradient-to-br from-[#0B0D12] to-[#050509] p-4 md:p-8 rounded-2xl">
          <div className="bg-white/5 rounded-xl border border-white/10 p-4 md:p-8 h-full overflow-auto">
            <div className="grid grid-cols-4 gap-2 md:gap-4 mb-6 pb-4 md:pb-6 border-b border-white/10">
              <div className="text-sm md:text-lg font-bold text-muted-foreground">Feature</div>
              <div className="text-base md:text-xl font-bold text-white text-center">BlackSync AI</div>
              <div className="text-sm md:text-lg font-bold text-muted-foreground text-center">Basic Chatbot</div>
              <div className="text-sm md:text-lg font-bold text-muted-foreground text-center">Call Center</div>
            </div>

            {features.map((row, i) => (
              <div key={i} className="grid grid-cols-4 gap-2 md:gap-4 py-3 md:py-4 items-center border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors px-2 md:px-4 -mx-2 md:-mx-4">
                <div className="font-medium text-gray-300 text-xs md:text-base">{row.name}</div>
                
                {/* BlackSync Column */}
                <div className="flex justify-center">
                  <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Check className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                </div>

                {/* Chatbot Column */}
                <div className="flex justify-center text-muted-foreground">
                  {row.chatbot === true ? <Check className="h-4 w-4 md:h-5 md:w-5" /> : row.chatbot === false ? <X className="h-4 w-4 md:h-5 md:w-5 text-red-500/50" /> : <span className="text-xs md:text-sm">{row.chatbot}</span>}
                </div>

                {/* Call Center Column */}
                <div className="flex justify-center text-muted-foreground">
                  {row.callcenter === true ? <Check className="h-4 w-4 md:h-5 md:w-5" /> : row.callcenter === false ? <X className="h-4 w-4 md:h-5 md:w-5 text-red-500/50" /> : <span className="text-xs md:text-sm">{row.callcenter}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
