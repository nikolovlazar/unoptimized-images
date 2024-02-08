import { Inter as FontSans } from "next/font/google";

import { Nav } from "../components/nav";
import { cn } from "../lib/utils";
import "./globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Shpinterest",
  description: "A demo Pinterest-like app built with Next.js and shadcn/ui",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen overflow-x-hidden bg-background antialiased",
          fontSans.className,
        )}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
