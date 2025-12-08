"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface Connection {
  from: string;
  to: string;
}

const nodes: Node[] = [
  { id: "intake", label: "Intake", x: 50, y: 80 },
  { id: "scheduling", label: "Scheduling", x: 180, y: 40 },
  { id: "quoting", label: "Quoting", x: 320, y: 90 },
  { id: "payments", label: "Payments", x: 450, y: 50 },
  { id: "crm", label: "CRM", x: 380, y: 180 },
  { id: "communication", label: "Communication", x: 200, y: 200 },
];

const connections: Connection[] = [
  { from: "intake", to: "scheduling" },
  { from: "scheduling", to: "quoting" },
  { from: "quoting", to: "payments" },
  { from: "payments", to: "crm" },
  { from: "crm", to: "communication" },
  { from: "communication", to: "intake" },
  { from: "scheduling", to: "crm" },
  { from: "quoting", to: "communication" },
];

function getNodeCenter(node: Node) {
  return { x: node.x + 50, y: node.y + 20 };
}

function SignalPulse({ from, to, delay }: { from: Node; to: Node; delay: number }) {
  const fromCenter = getNodeCenter(from);
  const toCenter = getNodeCenter(to);
  
  return (
    <motion.circle
      r="4"
      fill="url(#signalGradient)"
      filter="url(#glow)"
      initial={{ cx: fromCenter.x, cy: fromCenter.y, opacity: 0 }}
      animate={{
        cx: [fromCenter.x, toCenter.x],
        cy: [fromCenter.y, toCenter.y],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 2,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      }}
    />
  );
}

export function AutomationGraph({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0ea5e9 1px, transparent 1px),
            linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      <svg 
        viewBox="0 0 550 280" 
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 20px rgba(14, 165, 233, 0.15))' }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
          </linearGradient>
          
          <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {connections.map((conn, i) => {
          const fromNode = nodes.find(n => n.id === conn.from)!;
          const toNode = nodes.find(n => n.id === conn.to)!;
          const fromCenter = getNodeCenter(fromNode);
          const toCenter = getNodeCenter(toNode);
          
          return (
            <g key={i}>
              <motion.line
                x1={fromCenter.x}
                y1={fromCenter.y}
                x2={toCenter.x}
                y2={toCenter.y}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
              <SignalPulse from={fromNode} to={toNode} delay={i * 0.5} />
            </g>
          );
        })}

        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <motion.rect
              x={node.x}
              y={node.y}
              width="100"
              height="40"
              rx="4"
              fill="url(#nodeGradient)"
              stroke="#0ea5e9"
              strokeWidth="1"
              filter="url(#nodeGlow)"
              animate={{
                strokeOpacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
            
            <motion.rect
              x={node.x}
              y={node.y}
              width="100"
              height="40"
              rx="4"
              fill="transparent"
              stroke="#22d3ee"
              strokeWidth="1"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
            
            <text
              x={node.x + 50}
              y={node.y + 24}
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="11"
              fontFamily="monospace"
              fontWeight="500"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        <motion.text
          x="275"
          y="260"
          textAnchor="middle"
          fill="#64748b"
          fontSize="10"
          fontFamily="monospace"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          BLACKSYNC AUTOMATION BACKBONE
        </motion.text>
      </svg>
    </div>
  );
}
