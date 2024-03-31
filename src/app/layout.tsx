import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Planner",
  description: "Plan your next trip with ease.",
  keywords: "travel, planner, trip, vacation, holiday, itinerary, plan, schedule, organize, destination, journey, explore, adventure, explore, discover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter,
      )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
