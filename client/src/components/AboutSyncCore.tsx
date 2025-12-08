import { motion } from "framer-motion";

export default function AboutSyncCore() {
  return (
    <section className="relative w-full h-[720px] flex items-center justify-center overflow-hidden">
      {/* Background neon rings */}
      <BackgroundRings />

      {/* Halo behind the core */}
      <div className="pointer-events-none absolute w-[900px] h-[900px] rounded-full blur-[180px] opacity-60 bg-[radial-gradient(circle,_rgba(80,0,255,0.45)_0%,_rgba(0,0,0,0)_65%)]" />

      {/* Core box + orbiting cloud */}
      <div className="relative inline-flex items-center justify-center">
        <OrbitCloud count={30} />

        <motion.div
          className="relative z-20 text-center"
          style={{
            maxWidth: '900px',
            padding: '80px 60px',
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(18px)',
            borderRadius: '28px',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 0 80px rgba(80, 0, 180, 0.25), 0 0 200px rgba(0, 180, 255, 0.15)',
            maskImage: 'radial-gradient(circle at center, black 70%, transparent 100%)',
            maskSize: '180% 180%',
            maskPosition: 'center',
            WebkitMaskImage: 'radial-gradient(circle at center, black 70%, transparent 100%)',
            WebkitMaskSize: '180% 180%',
            WebkitMaskPosition: 'center',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-white text-5xl font-bold mb-4">
            About BlackSync
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            BlackSync builds AI operational systems — the automation backbone that runs intake, scheduling, quoting, follow-up, payments, CRM workflows, and customer communication, integrated directly into your existing tools.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function OrbitCloud({ count }: { count: number }) {
  const GOLDEN_ANGLE = 137.5 * (Math.PI / 180);

  const orbits = Array.from({ length: count }).map((_, i) => {
    const angle = i * GOLDEN_ANGLE;
    const radius = 140 + i * 28;
    const speed = 14 + radius * 0.012;
    const size = 5 + (i % 3) * 0.6;

    return {
      radius,
      start: (angle * 180) / Math.PI,
      speed,
      size,
    };
  });

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <style>{`
        @keyframes neonColorShift {
          0% {
            background-color: rgb(0, 150, 255);
            box-shadow: 0 0 12px rgba(0, 150, 255, 0.8);
          }
          33% {
            background-color: rgb(0, 255, 220);
            box-shadow: 0 0 12px rgba(0, 255, 220, 0.8);
          }
          66% {
            background-color: rgb(160, 0, 255);
            box-shadow: 0 0 12px rgba(160, 0, 255, 0.8);
          }
          100% {
            background-color: rgb(0, 150, 255);
            box-shadow: 0 0 12px rgba(0, 150, 255, 0.8);
          }
        }
      `}</style>
      
      {orbits.map((orbit, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2"
          style={{
            width: orbit.radius * 2,
            height: orbit.radius * 2,
            marginLeft: -orbit.radius,
            marginTop: -orbit.radius,
          }}
          initial={{ rotate: orbit.start }}
          animate={{ rotate: 360 + orbit.start }}
          transition={{ duration: orbit.speed, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: orbit.size,
              height: orbit.size,
              top: -orbit.size / 2,
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'neonColorShift 8s ease-in-out infinite',
              animationDelay: `${i * 0.3}s`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

function BackgroundRings() {
  return (
    <svg
      className="pointer-events-none absolute w-[1600px] h-[1100px]"
      viewBox="0 0 700 500"
    >
      <defs>
        <linearGradient id="neon" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(0,255,210)" />
          <stop offset="40%" stopColor="rgb(60,130,255)" />
          <stop offset="100%" stopColor="rgb(160,0,255)" />
        </linearGradient>
      </defs>

      {[170, 240, 310].map((r, i) => (
        <motion.circle
          key={r}
          cx="350"
          cy="250"
          r={r}
          stroke="url(#neon)"
          strokeWidth="5"
          fill="none"
          initial={{ opacity: 0.35 }}
          animate={{
            opacity: [0.35, 0.75, 0.35],
            filter: ["blur(0px)", "blur(0.8px)", "blur(0px)"],
          }}
          transition={{
            duration: 7 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
