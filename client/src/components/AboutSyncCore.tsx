import { motion } from "framer-motion";

const endpoints = [
  { label: "Intake", angle: -110 },
  { label: "Scheduling", angle: -40 },
  { label: "Quoting", angle: 20 },
  { label: "Payments", angle: 80 },
  { label: "CRM", angle: 150 },
  { label: "Communication", angle: 220 },
];

export default function AboutSyncCore() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-44 select-none">

      {/* HALO GLOW */}
      <div className="absolute w-[900px] h-[900px] rounded-full blur-[160px] opacity-60 bg-[radial-gradient(circle,_rgba(80,0,255,0.45)_0%,_rgba(0,0,0,0)_65%)]"></div>

      {/* CENTRAL BOX */}
      <motion.div
        className="relative z-30 bg-black/85 backdrop-blur-2xl rounded-3xl px-14 py-14 shadow-[0_0_140px_rgba(120,0,255,0.45)] max-w-xl text-center border border-slate-600/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-emerald-400 text-sm flex items-center gap-2 justify-center mb-4">
          <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
          Available Now
        </div>

        <h2 className="text-white text-5xl font-bold mb-4">
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

      {/* CURVED NEON NETWORK */}
      <NetworkCurves />

      {/* ENDPOINT MODULES */}
      {endpoints.map((e, i) => {
        const radius = 320;
        const x = radius * Math.cos((e.angle * Math.PI) / 180);
        const y = radius * Math.sin((e.angle * Math.PI) / 180);

        return (
          <motion.div
            key={i}
            className="absolute z-20 px-4 py-2 font-medium text-white text-sm rounded-xl bg-black/60 backdrop-blur-md border border-purple-500/40 shadow-[0_0_40px_rgba(140,0,255,0.35)]"
            style={{
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
            }}
            animate={{
              y: [0, 2, 0, -2, 0],
              transition: {
                duration: 5,
                repeat: Infinity,
                delay: i * 0.2,
              },
            }}
          >
            {e.label}
          </motion.div>
        );
      })}
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
          <stop offset="0%" stopColor="rgb(0,255,200)" />
          <stop offset="40%" stopColor="rgb(0,150,255)" />
          <stop offset="100%" stopColor="rgb(160,0,255)" />
        </linearGradient>
      </defs>

      {[150, 210, 270].map((r, i) => (
        <motion.circle
          key={i}
          cx="350"
          cy="250"
          r={r}
          stroke="url(#neon)"
          strokeWidth="4"
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
