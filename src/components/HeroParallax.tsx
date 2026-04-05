"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
};

export function HeroParallax({ src, alt, sizes, priority }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div
      ref={ref}
      className="relative aspect-[5/4] w-full overflow-hidden border border-[var(--line)] sm:aspect-[3/2] lg:aspect-[4/3]"
    >
      <motion.div
        className="absolute inset-x-0 top-[-6%] h-[112%] w-full"
        style={{ y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes={sizes}
        />
      </motion.div>
    </div>
  );
}
