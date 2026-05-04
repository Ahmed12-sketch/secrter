import type { Metadata } from "next";
import { Cairo, Readex_Pro } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

const readex = Readex_Pro({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-readex",
});

export const metadata: Metadata = {
  title: "سكرتير | Sekerteer",
  description: "ابنِ محادثات ذكية في ثوانٍ. منصة سكرتير للذكاء الاصطناعي تدعم اللهجة السعودية وتؤتمت خدمة العملاء والمبيعات.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${cairo.variable} ${readex.variable} font-sans bg-[#030a07] text-white antialiased`}
      >
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
