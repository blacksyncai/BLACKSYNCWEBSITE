"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function GraphNode({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.div
      className="relative px-4 py-2.5 rounded-lg bg-slate-900/80 border border-cyan-500/30"
      style={{
        boxShadow: '0 0 15px rgba(6, 182, 212, 0.15), inset 0 0 15px rgba(6, 182, 212, 0.05)',
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: delay * 2,
          ease: "easeInOut",
        }}
      />
      <span className="relative text-xs font-medium text-gray-300 tracking-wide whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
}

function HorizontalLine({ delay, width = 32 }: { delay: number; width?: number }) {
  return (
    <div className="relative h-[2px] flex items-center" style={{ width: `${width}px` }}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 via-purple-500/50 to-cyan-500/40 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay, ease: "easeOut" }}
      />
      <motion.div
        className="absolute h-[2px] w-2 bg-cyan-400 rounded-full"
        style={{ filter: 'blur(1px)', boxShadow: '0 0 6px rgba(6, 182, 212, 0.8)' }}
        animate={{ left: ['0%', '100%', '0%'] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: delay + 1,
          ease: "linear",
        }}
      />
    </div>
  );
}

function VerticalLine({ delay, height = 24 }: { delay: number; height?: number }) {
  return (
    <div className="relative w-[2px] flex justify-center" style={{ height: `${height}px` }}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-cyan-500/40 via-purple-500/50 to-cyan-500/40 rounded-full"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.4, delay, ease: "easeOut" }}
      />
      <motion.div
        className="absolute w-[2px] h-2 bg-cyan-400 rounded-full"
        style={{ filter: 'blur(1px)', boxShadow: '0 0 6px rgba(6, 182, 212, 0.8)' }}
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: delay + 1.5,
          ease: "linear",
        }}
      />
    </div>
  );
}

export function InlineAutomationGraph() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-32" />;
  }

  return (
    <div className="flex flex-col items-center py-8">
      <div className="relative">
        <div className="flex items-center gap-0">
          <GraphNode label="Intake" delay={0} />
          <HorizontalLine delay={0.3} />
          <div className="relative">
            <GraphNode label="Scheduling" delay={0.1} />
            <div className="absolute left-1/2 -translate-x-1/2 top-full">
              <VerticalLine delay={0.6} height={20} />
            </div>
          </div>
          <HorizontalLine delay={0.4} />
          <div className="relative">
            <GraphNode label="Quoting" delay={0.2} />
            <div className="absolute left-1/2 -translate-x-1/2 top-full">
              <VerticalLine delay={0.7} height={20} />
            </div>
          </div>
          <HorizontalLine delay={0.5} />
          <GraphNode label="Payments" delay={0.3} />
        </div>
        
        <div className="flex items-center justify-center mt-5 gap-0">
          <GraphNode label="Communication" delay={0.5} />
          <HorizontalLine delay={0.8} width={80} />
          <GraphNode label="CRM" delay={0.6} />
        </div>
      </div>
    </div>
  );
}
