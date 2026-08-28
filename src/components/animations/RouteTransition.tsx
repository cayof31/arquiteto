"use client";
import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import type { PropsWithChildren } from 'react';

export default function RouteTransition({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div key={pathname}>{children}</motion.div>
    </AnimatePresence>
  );
}