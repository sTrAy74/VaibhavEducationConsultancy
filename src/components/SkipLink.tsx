export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-16 focus:z-[100] focus:border focus:border-[var(--fg)] focus:bg-[var(--canvas)] focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--fg)]"
    >
      Skip to main content
    </a>
  );
}
