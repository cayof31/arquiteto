"use client";
import { motion } from 'motion/react';
import { PropsWithChildren } from 'react';

export function FadeIn({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className={className}>
      {children}
    </motion.div>
  );
}

export function RevealText({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={className}>
      {children}
    </motion.h2>
  );
}

// no default export; use named wrappers above
