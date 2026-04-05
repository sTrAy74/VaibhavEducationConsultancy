"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import type { SiteNavLink } from "@/content/site";

const navLinkClass =
  "text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--fg-faint)] transition-colors hover:text-[var(--fg)]";

export function Header({
  orgName,
  nav,
}: {
  orgName: string;
  nav: readonly SiteNavLink[];
}) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const wasOpen = useRef(false);
  useEffect(() => {
    if (wasOpen.current && !open) menuButtonRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)]">
      <div className="bg-[var(--canvas)]/95 backdrop-blur-sm">
        <div className="relative z-[100] mx-auto flex min-h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center gap-3 py-2"
            onClick={close}
          >
            <BrandLogo
              priority
              className="h-9 w-auto max-w-[min(42vw,9.5rem)] shrink-0 object-contain object-left sm:h-10 sm:max-w-[11rem]"
            />
            <span className="min-w-0 font-serif text-[0.9375rem] font-semibold leading-snug tracking-tight text-[var(--fg)] sm:text-[1.0625rem] lg:line-clamp-2">
              {orgName}
            </span>
          </Link>

          <nav
            className="hidden shrink-0 flex-wrap items-center justify-end gap-x-3 gap-y-1.5 lg:flex lg:gap-x-4"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-sm border border-[var(--line)] text-[var(--fg)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-primary-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden
                className="shrink-0"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden
                className="shrink-0"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-x-0 bottom-0 top-14 z-[90] bg-[var(--fg)]/25 lg:hidden"
            aria-label="Close menu"
            onClick={close}
          />
          <div
            id="mobile-primary-nav"
            className="fixed inset-x-0 bottom-0 top-14 z-[95] flex flex-col border-t border-[var(--line)] bg-[var(--canvas)] shadow-lg lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <nav className="flex flex-1 flex-col overflow-y-auto px-4 py-2 sm:px-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="touch-manipulation border-b border-[var(--line)] py-4 text-base font-medium text-[var(--fg)] last:border-0"
                  onClick={close}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
