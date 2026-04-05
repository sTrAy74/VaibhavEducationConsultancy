"use client";

import Image from "next/image";
import { site } from "@/content/site";

type Props = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority }: Props) {
  return (
    <Image
      src={site.logo.src}
      alt={site.logo.alt}
      width={360}
      height={140}
      sizes="(max-width: 640px) 150px, 180px"
      className={className}
      priority={priority}
    />
  );
}
