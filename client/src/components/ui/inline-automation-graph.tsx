"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function GraphNode({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.div
      className="relative px-3.5 py-2 rounded-lg bg-slate-900/80 border border-cyan-500/25"
      style={{
        boxShadow: '0 0 12px rgba(6, 182, 212, 0.12), inset 0 0 12px rgba(6, 182, 212, 0.04)',
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow: '0 0 16px rgba(139, 92, 246, 0.15)',
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: delay * 2,
          ease: "easeInOut",
        }}
      />
      <span className="relative text-[11px] font-medium text-gray-300 tracking-wide whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
}

function HorizontalLine({ delay, width = 28 }: { delay: number; width?: number }) {
  return (
    <div className="relative h-[1.5px] flex items-center" style={{ width: `${width}px` }}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-500/40 to-cyan-500/30 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/30 to-cyan-500/20 rounded-full"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: delay,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

function VerticalLine({ delay, height = 18 }: { delay: number; height?: number }) {
  return (
    <div className="relative w-[1.5px] flex justify-center" style={{ height: `${height}px` }}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-cyan-500/30 via-purple-500/40 to-cyan-500/30 rounded-full"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.4, delay, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-purple-500/30 to-cyan-500/20 rounded-full"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: delay,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

function TravelingDot() {
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
      style={{
        boxShadow: '0 0 8px rgba(6, 182, 212, 0.6)',
        top: '50%',
        left: '0%',
        transform: 'translate(-50%, -50%)',
      }}
      animate={{
        left: ['0%', '100%'],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

export function InlineAutomationGraph() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-28" />;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-col items-center">
        <div className="flex items-center gap-0">
          <GraphNode label="Intake" delay={0} />
          <div className="relative">
            <HorizontalLine delay={0.3} />
            <TravelingDot />
          </div>
          <div className="relative">
            <GraphNode label="Scheduling" delay={0.1} />
            <div className="absolute left-1/2 -translate-x-1/2 top-full">
              <VerticalLine delay={0.6} height={16} />
            </div>
          </div>
          <HorizontalLine delay={0.4} />
          <div className="relative">
            <GraphNode label="Quoting" delay={0.2} />
            <div className="absolute left-1/2 -translate-x-1/2 top-full">
              <VerticalLine delay={0.7} height={16} />
            </div>
          </div>
          <HorizontalLine delay={0.5} />
          <GraphNode label="Payments" delay={0.3} />
        </div>
        
        <div className="flex items-center justify-center mt-4 gap-0">
          <GraphNode label="Communication" delay={0.5} />
          <HorizontalLine delay={0.8} width={70} />
          <GraphNode label="CRM" delay={0.6} />
        </div>
      </div>
      
      <motion.p
        className="text-[10px] uppercase tracking-[0.2em] text-gray-500/35 mt-5 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        BLACKSYNC — AUTOMATION BACKBONE
      </motion.p>
    </div>
  );
}
