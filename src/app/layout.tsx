import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import AppMotionProvider from "@/components/motion/app-motion-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RepoLens — Decode Any GitHub Repository",
    template: "RepoLens — %s",
  },
  description:
    "Map any GitHub repository into interactive architecture, file topology, contributor flows, and dependency intelligence.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "RepoLens — Decode Any GitHub Repository",
    description:
      "Map any GitHub repository into interactive architecture and contributor intelligence.",
    siteName: "RepoLens",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RepoLens — Decode Any GitHub Repository",
    description:
      "Map any GitHub repository into interactive architecture and contributor intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased h-screen bg-background relative overflow-hidden`}
      >
        <TooltipProvider delayDuration={300}>
          <AppMotionProvider>
            <div className="app-background" />
            <div className="app-orb orb-1" />
            <div className="app-orb orb-2" />
            <div className="app-orb orb-3" />
            <div className="stars-bg" />
            <div className="app-noise" />
            {children}
          </AppMotionProvider>
        </TooltipProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(15, 23, 42, 0.9)",
              border: "1px solid rgba(99, 102, 241, 0.2)",
              color: "#f1f5f9",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
