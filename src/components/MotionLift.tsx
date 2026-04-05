"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Subtle lift on hover for cards and tiles */
export function MotionLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
