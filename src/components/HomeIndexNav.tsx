"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { HomeIndexNavItem } from "@/content/home-index-nav";

const LAYOUT_ID = "home-index-active-bar";

export function HomeIndexNav({ items }: { items: readonly HomeIndexNavItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = items
      .map((i) => i.sectionId)
      .filter((id): id is string => Boolean(id));

    const update = () => {
      const marker = window.innerHeight * 0.34;
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= marker) current = id;
      }
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  return (
    <aside
      className="sticky top-24 z-20 hidden h-fit max-h-[calc(100dvh-7rem)] w-[11.25rem] shrink-0 self-start overflow-y-auto border-r border-[var(--line)] bg-[var(--canvas)] pr-3 pt-6 pb-10 lg:block xl:w-[12.5rem]"
      aria-label="On this page"
    >
      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--fg-faint)]">
        Index
      </p>
      <nav className="mt-4 flex flex-col gap-0.5">
        {items.map((item, index) => {
          const prev = items[index - 1];
          const externalBlock =
            !item.sectionId && prev?.sectionId
              ? "mt-3 border-t border-[var(--line)] pt-3"
              : "";

          const isActive =
            Boolean(item.sectionId) && activeId === item.sectionId;
          const base =
            "relative block py-2 pl-3.5 text-left text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-200";

          const inactiveCls = `${base} text-[var(--fg-faint)] hover:text-[var(--fg-muted)] ${externalBlock}`;
          const activeCls = `${base} text-[var(--fg)]`;

          if (item.href.startsWith("/#")) {
            return (
              <a
                key={item.label + item.href}
                href={item.href}
                className={isActive ? activeCls : inactiveCls}
                aria-current={isActive ? "location" : undefined}
              >
                {isActive ? (
                  <motion.span
                    layoutId={LAYOUT_ID}
                    className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 bg-[var(--fg)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    aria-hidden
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.label + item.href}
              href={item.href}
              className={inactiveCls}
            >
              <span className="relative">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
