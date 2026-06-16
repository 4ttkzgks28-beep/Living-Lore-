import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const display = Orbitron({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Living Lore | Cinematic AI Stories for Minecraft",
  description: "A cinematic, scroll-driven landing page for Living Lore, an AI storytelling layer that turns Minecraft worlds into living adventures.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
