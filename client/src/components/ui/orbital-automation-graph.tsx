"use client";
import { motion } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";

interface OrbitalNode {
  id: string;
  label: string;
  angle: number;
  radius: number;
}

const nodes: OrbitalNode[] = [
  { id: "intake", label: "Intake", angle: -60, radius: 320 },
  { id: "scheduling", label: "Scheduling", angle: 0, radius: 340 },
  { id: "quoting", label: "Quoting", angle: 60, radius: 320 },
  { id: "payments", label: "Payments", angle: 120, radius: 320 },
  { id: "crm", label: "CRM", angle: 180, radius: 340 },
  { id: "communication", label: "Communication", angle: 240, radius: 320 },
];

const connections = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
  { from: 5, to: 0 },
];

function getNodePosition(node: OrbitalNode) {
  const angleRad = (node.angle * Math.PI) / 180;
  return {
    x: Math.cos(angleRad) * node.radius,
    y: Math.sin(angleRad) * node.radius * 0.55,
  };
}

function OrbitalNode({ node, index }: { node: OrbitalNode; index: number }) {
  const pos = getNodePosition(node);
  
  return (
    <motion.div
      className="absolute"
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
    >
      <motion.div
        className="relative px-6 py-3 rounded-xl bg-slate-900/80 border border-cyan-500/30"
        style={{
          boxShadow: '0 0 20px rgba(6, 182, 212, 0.15), inset 0 0 20px rgba(6, 182, 212, 0.05)',
        }}
        animate={{
          scale: [1, 1.02, 1],
          boxShadow: [
            '0 0 20px rgba(6, 182, 212, 0.15), inset 0 0 20px rgba(6, 182, 212, 0.05)',
            '0 0 30px rgba(139, 92, 246, 0.2), inset 0 0 25px rgba(139, 92, 246, 0.08)',
            '0 0 20px rgba(6, 182, 212, 0.15), inset 0 0 20px rgba(6, 182, 212, 0.05)',
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: index * 0.8,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-xl opacity-50"
          style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        />
        <span className="relative text-sm font-medium text-gray-300 tracking-wide">
          {node.label}
        </span>
      </motion.div>
    </motion.div>
  );
}

function ConnectionLine({ fromNode, toNode, index }: { fromNode: OrbitalNode; toNode: OrbitalNode; index: number }) {
  const from = getNodePosition(fromNode);
  const to = getNodePosition(toNode);
  
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  
  const curveOffset = 30;
  const perpX = -(to.y - from.y) / Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2)) * curveOffset;
  const perpY = (to.x - from.x) / Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2)) * curveOffset;
  
  const controlX = midX + perpX;
  const controlY = midY + perpY;
  
  const pathId = `path-${index}`;
  
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id={`lineGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
        </linearGradient>
        <filter id={`glow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <motion.path
        id={pathId}
        d={`M ${from.x + 400} ${from.y + 300} Q ${controlX + 400} ${controlY + 300} ${to.x + 400} ${to.y + 300}`}
        fill="none"
        stroke={`url(#lineGrad-${index})`}
        strokeWidth="1.5"
        filter={`url(#glow-${index})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 + index * 0.15, ease: "easeOut" }}
      />
      
      <motion.circle
        r="3"
        fill="#22d3ee"
        filter={`url(#glow-${index})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: index * 0.6,
          ease: "linear",
        }}
      >
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          begin={`${index * 0.6}s`}
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </motion.circle>
    </svg>
  );
}

export function OrbitalAutomationGraph({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative min-h-[700px] flex items-center justify-center">
        {children}
      </div>
    );
  }

  return (
    <div className="relative min-h-[750px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #06b6d4 1px, transparent 1px),
            linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-purple-500/5 opacity-50" />
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]">
        {connections.map((conn, i) => (
          <ConnectionLine
            key={i}
            fromNode={nodes[conn.from]}
            toNode={nodes[conn.to]}
            index={i}
          />
        ))}
      </div>
      
      {nodes.map((node, i) => (
        <OrbitalNode key={node.id} node={node} index={i} />
      ))}
      
      <div className="relative z-10 text-center max-w-xl px-6">
        {children}
      </div>
    </div>
  );
}
