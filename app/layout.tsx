import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, DM_Mono } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import GrainField from "@/components/GrainField";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wahab Saka — Fullstack Developer",
  description:
    "Fullstack developer with close to 5 years building products people actually use across frontend, backend and mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-primary font-body">
        <GrainField />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
