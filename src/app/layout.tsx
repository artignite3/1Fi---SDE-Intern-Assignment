import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

export const metadata: Metadata = {
  title: "1Fi - Shop & Pay Later with Mutual Funds",
  description: "Shop at 0% No-cost EMI backed by your Mutual Funds",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "1Fi",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#0F144B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-fi-bg">
      <body className="antialiased select-none bg-fi-bg min-h-full text-slate-900 overflow-x-hidden">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
