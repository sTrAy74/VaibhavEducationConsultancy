import type { Metadata } from "next";
import { IBM_Plex_Sans, Spectral } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { SkipLink } from "@/components/SkipLink";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

const plex = IBM_Plex_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: true,
});

const spectral = Spectral({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: site.orgName,
    template: `%s · ${site.orgName}`,
  },
  description: site.description,
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plex.variable} ${spectral.variable} relative h-full antialiased`}
    >
      <body className="relative min-h-full overflow-x-clip flex flex-col text-[15px] leading-relaxed">
        <ScrollProgress />
        <SkipLink />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
