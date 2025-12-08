"use client";
import { motion } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";

interface ModulePosition {
  id: string;
  label: string;
  angle: number;
  distance: number;
}

const modules: ModulePosition[] = [
  { id: "intake", label: "Intake", angle: -120, distance: 280 },
  { id: "scheduling", label: "Scheduling", angle: -60, distance: 280 },
  { id: "quoting", label: "Quoting", angle: 0, distance: 300 },
  { id: "payments", label: "Payments", angle: 60, distance: 280 },
  { id: "crm", label: "CRM", angle: 120, distance: 280 },
  { id: "communication", label: "Communication", angle: 180, distance: 300 },
];

function getPosition(angle: number, distance: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: Math.cos(rad) * distance,
    y: Math.sin(rad) * distance * 0.5,
  };
}

function ModuleEndpoint({ module, index }: { module: ModulePosition; index: number }) {
  const pos = getPosition(module.angle, module.distance);
  
  return (
    <motion.div
      className="absolute px-5 py-3 rounded-xl bg-slate-900/95 border border-cyan-500/25"
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 15px rgba(6, 182, 212, 0.1), inset 0 0 25px rgba(6, 182, 212, 0.04)',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(139, 92, 246, 0.08))',
        }}
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: index * 0.5,
          ease: "easeInOut",
        }}
      />
      <motion.div
        animate={{ y: [0, -1.5, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: index * 0.3,
          ease: "easeInOut",
        }}
      >
        <span className="relative text-sm font-medium text-gray-200 tracking-wide whitespace-nowrap">
          {module.label}
        </span>
      </motion.div>
    </motion.div>
  );
}

function NeonPath({ module, index }: { module: ModulePosition; index: number }) {
  const endPos = getPosition(module.angle, module.distance);
  const centerX = 450;
  const centerY = 300;
  const endX = centerX + endPos.x;
  const endY = centerY + endPos.y;
  
  const midX = (centerX + endX) / 2;
  const midY = (centerY + endY) / 2;
  
  const curveStrength = 50;
  const angle = Math.atan2(endY - centerY, endX - centerX);
  const perpAngle = angle + Math.PI / 2;
  const ctrlX = midX + Math.cos(perpAngle) * curveStrength * (index % 2 === 0 ? 1 : -1);
  const ctrlY = midY + Math.sin(perpAngle) * curveStrength * (index % 2 === 0 ? 1 : -1);
  
  const pathD = `M ${centerX} ${centerY} Q ${ctrlX} ${ctrlY} ${endX} ${endY}`;
  const pathId = `neon-path-${index}`;
  
  return (
    <g>
      <defs>
        <linearGradient id={`neon-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
        </linearGradient>
        <filter id={`neon-glow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      <motion.path
        id={pathId}
        d={pathD}
        fill="none"
        stroke={`url(#neon-grad-${index})`}
        strokeWidth="2.5"
        filter={`url(#neon-glow-${index})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: "easeOut" }}
      />
      
      <motion.path
        d={pathD}
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="2.5"
        strokeOpacity="0.2"
        animate={{
          strokeOpacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: index * 0.4,
          ease: "easeInOut",
        }}
      />
      
      <motion.circle
        r="4"
        fill="#22d3ee"
        style={{ filter: 'drop-shadow(0 0 6px rgba(34, 211, 238, 0.8))' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: index * 1,
          ease: "linear",
        }}
      >
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          begin={`${index * 1}s`}
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </motion.circle>
    </g>
  );
}

function OrbitingPointer() {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{
        boxShadow: '0 0 12px 4px currentColor',
        left: '50%',
        top: '50%',
      }}
      animate={{
        color: ['#22c55e', '#22c55e', '#06b6d4', '#06b6d4', '#8b5cf6', '#8b5cf6', '#22c55e'],
        backgroundColor: ['#22c55e', '#22c55e', '#06b6d4', '#06b6d4', '#8b5cf6', '#8b5cf6', '#22c55e'],
        offsetDistance: ['0%', '100%'],
      }}
      transition={{
        color: { duration: 6, repeat: Infinity, ease: "linear" },
        backgroundColor: { duration: 6, repeat: Infinity, ease: "linear" },
        offsetDistance: { duration: 6, repeat: Infinity, ease: "linear" },
      }}
      initial={false}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          width: '8px',
          height: '8px',
          marginLeft: '-3px',
          marginTop: '-3px',
        }}
        animate={{
          boxShadow: [
            '0 0 15px 5px rgba(34, 197, 94, 0.6)',
            '0 0 15px 5px rgba(6, 182, 212, 0.6)',
            '0 0 15px 5px rgba(139, 92, 246, 0.6)',
            '0 0 15px 5px rgba(34, 197, 94, 0.6)',
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}

function CoreBoxOrbit() {
  const boxWidth = 440;
  const boxHeight = 260;
  const radius = 16;
  
  const perimeter = 2 * (boxWidth - 2 * radius) + 2 * (boxHeight - 2 * radius) + 2 * Math.PI * radius;
  
  return (
    <div 
      className="absolute pointer-events-none"
      style={{
        width: `${boxWidth}px`,
        height: `${boxHeight}px`,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <svg 
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox={`0 0 ${boxWidth} ${boxHeight}`}
      >
        <defs>
          <path
            id="orbitPath"
            d={`
              M ${radius} 0
              L ${boxWidth - radius} 0
              A ${radius} ${radius} 0 0 1 ${boxWidth} ${radius}
              L ${boxWidth} ${boxHeight - radius}
              A ${radius} ${radius} 0 0 1 ${boxWidth - radius} ${boxHeight}
              L ${radius} ${boxHeight}
              A ${radius} ${radius} 0 0 1 0 ${boxHeight - radius}
              L 0 ${radius}
              A ${radius} ${radius} 0 0 1 ${radius} 0
            `}
            fill="none"
          />
        </defs>
        
        <motion.circle
          r="4"
          initial={{ fill: '#22c55e' }}
          animate={{
            fill: ['#22c55e', '#06b6d4', '#8b5cf6', '#22c55e'],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ filter: 'drop-shadow(0 0 8px currentColor)' }}
        >
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#orbitPath" />
          </animateMotion>
        </motion.circle>
        
        <motion.circle
          r="8"
          fill="transparent"
          initial={{ stroke: '#22c55e' }}
          animate={{
            stroke: ['#22c55e', '#06b6d4', '#8b5cf6', '#22c55e'],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          strokeWidth="1"
          strokeOpacity="0.4"
          style={{ filter: 'blur(2px)' }}
        >
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#orbitPath" />
          </animateMotion>
        </motion.circle>
      </svg>
    </div>
  );
}

export function AICoreNetwork({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative min-h-[700px] flex items-center justify-center py-8">
        <div className="relative z-20 bg-black/95 rounded-2xl p-10 max-w-lg text-center">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[750px] md:min-h-[800px] flex items-center justify-center py-8 overflow-hidden">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '550px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.04) 40%, transparent 70%)',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
        }}
        animate={{
          opacity: [0.6, 0.9, 0.6],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 900 600"
        preserveAspectRatio="xMidYMid meet"
        style={{ zIndex: 5 }}
      >
        {modules.map((module, i) => (
          <NeonPath key={module.id} module={module} index={i} />
        ))}
      </svg>
      
      {modules.map((module, i) => (
        <ModuleEndpoint key={module.id} module={module} index={i} />
      ))}
      
      <motion.div
        className="relative z-20 bg-black/95 rounded-2xl border border-slate-700/30"
        style={{
          padding: '48px 56px',
          maxWidth: '440px',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255,255,255,0.03)',
          background: 'linear-gradient(180deg, rgba(15, 15, 20, 0.98) 0%, rgba(5, 5, 10, 0.99) 100%)',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 rounded-2xl opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 50%, rgba(255,255,255,0.01) 100%)',
          }}
        />
        
        <div className="relative z-10 text-center">
          {children}
        </div>
      </motion.div>
      
      <CoreBoxOrbit />
      
      <motion.p
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] text-gray-500/40 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Automation Backbone
      </motion.p>
    </div>
  );
}
