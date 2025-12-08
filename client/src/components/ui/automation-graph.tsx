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
  { id: "intake", label: "Intake", x: 40, y: 60 },
  { id: "scheduling", label: "Scheduling", x: 180, y: 30 },
  { id: "quoting", label: "Quoting", x: 320, y: 70 },
  { id: "payments", label: "Payments", x: 440, y: 40 },
  { id: "crm", label: "CRM", x: 380, y: 160 },
  { id: "communication", label: "Communication", x: 180, y: 180 },
];

const connections: Connection[] = [
  { from: "intake", to: "scheduling" },
  { from: "scheduling", to: "quoting" },
  { from: "quoting", to: "payments" },
  { from: "payments", to: "crm" },
  { from: "crm", to: "communication" },
  { from: "communication", to: "intake" },
];

function getNodeCenter(node: Node) {
  return { x: node.x + 55, y: node.y + 22 };
}

function CurvedPath({ from, to, index }: { from: Node; to: Node; index: number }) {
  const fromCenter = getNodeCenter(from);
  const toCenter = getNodeCenter(to);
  
  const midX = (fromCenter.x + toCenter.x) / 2;
  const midY = (fromCenter.y + toCenter.y) / 2;
  const offsetY = (index % 2 === 0 ? -20 : 20);
  
  const path = `M ${fromCenter.x} ${fromCenter.y} Q ${midX} ${midY + offsetY} ${toCenter.x} ${toCenter.y}`;
  
  return (
    <g>
      <motion.path
        d={path}
        fill="none"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeOpacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="#64748b"
        strokeWidth="1.5"
        animate={{
          strokeOpacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: index * 0.5,
          ease: "easeInOut",
        }}
      />
    </g>
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
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #64748b 1px, transparent 1px),
            linear-gradient(to bottom, #64748b 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      <svg 
        viewBox="0 0 550 260" 
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="nodeGradientCalm" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {connections.map((conn, i) => {
          const fromNode = nodes.find(n => n.id === conn.from)!;
          const toNode = nodes.find(n => n.id === conn.to)!;
          return <CurvedPath key={i} from={fromNode} to={toNode} index={i} />;
        })}

        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: "easeOut" }}
          >
            <motion.rect
              x={node.x}
              y={node.y}
              width="110"
              height="44"
              rx="10"
              fill="url(#nodeGradientCalm)"
              stroke="#475569"
              strokeWidth="1"
              filter="url(#softGlow)"
              animate={{
                strokeOpacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
            />
            
            <motion.rect
              x={node.x}
              y={node.y}
              width="110"
              height="44"
              rx="10"
              fill="transparent"
              stroke="#64748b"
              strokeWidth="1"
              animate={{
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeInOut",
              }}
            />
            
            <text
              x={node.x + 55}
              y={node.y + 27}
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="12"
              fontFamily="system-ui, sans-serif"
              fontWeight="500"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        <motion.text
          x="275"
          y="245"
          textAnchor="middle"
          fill="#475569"
          fontSize="10"
          fontFamily="system-ui, sans-serif"
          fontWeight="400"
          letterSpacing="0.05em"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          BLACKSYNC AUTOMATION BACKBONE
        </motion.text>
      </svg>
    </div>
  );
}
