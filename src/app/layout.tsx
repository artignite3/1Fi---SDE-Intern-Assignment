import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "1Fi - Shop & Pay Later with Mutual Funds",
  description: "Shop at 0% No-cost EMI backed by your Mutual Funds",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "1Fi",
  },
  icons: {
    icon: "/1fi_logo.jpeg",
    apple: "/1fi_logo.jpeg",
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
    <html
      lang="en"
      className={`h-full bg-fi-bg ${plusJakartaSans.variable} ${inter.variable}`}
    >
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/1fi_logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/1fi_logo.jpeg" />
      </head>
      <body className="antialiased select-none bg-fi-bg min-h-full font-sans text-fi-text overflow-x-hidden">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
