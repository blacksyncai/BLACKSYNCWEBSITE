"use client";
import { motion } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";

interface ModulePosition {
  id: string;
  label: string;
  x: number;
  y: number;
}

const modules: ModulePosition[] = [
  { id: "intake", label: "Intake", x: -220, y: -140 },
  { id: "scheduling", label: "Scheduling", x: 220, y: -140 },
  { id: "communication", label: "Communication", x: -280, y: 20 },
  { id: "quoting", label: "Quoting", x: 280, y: 20 },
  { id: "crm", label: "CRM", x: -220, y: 180 },
  { id: "payments", label: "Payments", x: 220, y: 180 },
];

function ModuleNode({ module, index }: { module: ModulePosition; index: number }) {
  return (
    <motion.div
      className="absolute px-4 py-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/20"
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${module.x}px), calc(-50% + ${module.y}px))`,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 12px rgba(6, 182, 212, 0.08), inset 0 0 20px rgba(6, 182, 212, 0.03)',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(139, 92, 246, 0.05))',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: index * 0.8,
          ease: "easeInOut",
        }}
      />
      <span className="relative text-xs font-medium text-gray-300 tracking-wide whitespace-nowrap">
        {module.label}
      </span>
    </motion.div>
  );
}

function ConnectionLine({ module, index }: { module: ModulePosition; index: number }) {
  const centerX = 400;
  const centerY = 280;
  const moduleX = centerX + module.x;
  const moduleY = centerY + module.y;
  
  const midX = (centerX + moduleX) / 2;
  const midY = (centerY + moduleY) / 2;
  
  const curveStrength = 40;
  const angle = Math.atan2(moduleY - centerY, moduleX - centerX);
  const perpAngle = angle + Math.PI / 2;
  const ctrlX = midX + Math.cos(perpAngle) * curveStrength * (index % 2 === 0 ? 1 : -1);
  const ctrlY = midY + Math.sin(perpAngle) * curveStrength * (index % 2 === 0 ? 1 : -1);
  
  const pathId = `connection-${index}`;
  const pathD = `M ${moduleX} ${moduleY} Q ${ctrlX} ${ctrlY} ${centerX} ${centerY}`;
  
  return (
    <g>
      <defs>
        <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
        </linearGradient>
        <filter id={`glow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
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
        stroke={`url(#grad-${index})`}
        strokeWidth="1.5"
        filter={`url(#glow-${index})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
      />
      
      <motion.path
        d={pathD}
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="1.5"
        strokeOpacity="0.15"
        animate={{
          strokeOpacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: index * 0.5,
          ease: "easeInOut",
        }}
      />
      
      <motion.circle
        r="3"
        fill="#22d3ee"
        style={{ filter: 'blur(0.5px)', boxShadow: '0 0 6px rgba(34, 211, 238, 0.6)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0.8, 0] }}
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

export function RadialAutomationNetwork({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative min-h-[600px] flex items-center justify-center py-8">
        <div className="relative z-10 text-center max-w-xl px-6">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[650px] md:min-h-[700px] flex items-center justify-center py-8 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 800 560"
        preserveAspectRatio="xMidYMid meet"
      >
        {modules.map((module, i) => (
          <ConnectionLine key={module.id} module={module} index={i} />
        ))}
      </svg>
      
      {modules.map((module, i) => (
        <ModuleNode key={module.id} module={module} index={i} />
      ))}
      
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '420px',
          height: '320px',
          background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.04) 0%, transparent 70%)',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="relative z-10 text-center max-w-lg px-6">
        {children}
      </div>
      
      <motion.p
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] text-gray-500/40 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Automation Backbone
      </motion.p>
    </div>
  );
}
