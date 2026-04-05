"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-4 right-4 z-[55] flex h-11 w-11 items-center justify-center border border-[var(--line)] bg-[var(--canvas)] text-lg text-[var(--fg)] shadow-md transition-colors hover:bg-[var(--muted)] sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
