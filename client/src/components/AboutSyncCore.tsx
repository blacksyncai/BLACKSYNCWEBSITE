import { motion } from "framer-motion";

export default function AboutSyncCore() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-52 pb-56 select-none">

      {/* HALO GLOW */}
      <div className="absolute w-[900px] h-[900px] rounded-full blur-[200px] opacity-70 bg-[radial-gradient(circle,_rgba(80,0,255,0.45)_0%,_rgba(0,0,0,0)_65%)]"></div>

      {/* CENTRAL BOX */}
      <motion.div
        className="relative z-30 bg-black/85 backdrop-blur-2xl rounded-3xl px-14 py-14 shadow-[0_0_140px_rgba(120,0,255,0.45)] max-w-2xl text-center border border-slate-600/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-emerald-400 text-sm flex items-center gap-2 justify-center mb-4">
          <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
          Available Now
        </div>

        <h2 className="text-white text-6xl font-bold mb-4">
          About BlackSync
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          BlackSync builds AI operational systems — the automation backbone
          that runs intake, scheduling, quoting, follow-up,
          payments, CRM workflows, and customer communication.
        </p>
      </motion.div>

      {/* ORBIT DOT */}
      <motion.div
        animate={{
          offsetDistance: ["0%", "100%"],
          backgroundColor: [
            "rgb(0,255,200)",
            "rgb(0,180,255)",
            "rgb(160,0,255)",
            "rgb(0,255,200)"
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-4 h-4 rounded-full shadow-[0_0_16px_rgba(0,255,240,0.6)]"
        style={{
          offsetPath: "path('M -210 -140 H 210 V 140 H -210 Z')",
        }}
      />

      {/* ANIMATED ORBIT RING */}
      <motion.div
        className="absolute rounded-full"
        style={{
          offsetPath: "path('M -190 -120 H 190 V 120 H -190 Z')",
          outline: "3px solid transparent",
          outlineOffset: "12px",
        }}
        animate={{
          offsetDistance: ["0%", "100%"],
          outlineColor: [
            "rgb(0,255,200)",
            "rgb(0,180,255)",
            "rgb(160,0,255)",
            "rgb(0,255,200)"
          ],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* CURVED NEON NETWORK */}
      <motion.div
        style={{ perspective: 1000 }}
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <NetworkCurves />
      </motion.div>
    </div>
  );
}

function NetworkCurves() {
  return (
    <svg
      className="absolute top-1/2 left-1/2 w-[1600px] h-[1100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      viewBox="0 0 700 500"
    >
      <defs>
        <linearGradient id="neon" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(0,255,210)" />
          <stop offset="40%" stopColor="rgb(60,130,255)" />
          <stop offset="100%" stopColor="rgb(150,0,255)" />
        </linearGradient>
      </defs>

      {[150, 210, 270].map((r, i) => (
        <motion.circle
          key={i}
          cx="350"
          cy="250"
          r={r}
          stroke="url(#neon)"
          strokeWidth="5"
          fill="none"
          initial={{ opacity: 0.32 }}
          animate={{
            opacity: [0.35, 0.75, 0.35],
            filter: [
              "blur(0px)",
              "blur(0.8px)",
              "blur(0px)",
            ],
          }}
          transition={{
            duration: 7 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  );
}
