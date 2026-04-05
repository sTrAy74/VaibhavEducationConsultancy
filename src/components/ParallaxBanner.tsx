"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
};

export function ParallaxBanner({ src, alt, sizes, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden border border-[var(--line)] ${className ?? ""}`}
    >
      <motion.div
        className="absolute inset-x-0 top-[-5%] h-[110%] w-full"
        style={{ y }}
      >
        <Image src={src} alt={alt} fill priority className="object-cover" sizes={sizes} />
      </motion.div>
    </div>
  );
}
