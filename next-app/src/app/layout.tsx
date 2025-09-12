import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/components/Topbar";
import { Poppins, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"], // flexible weights
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "StackMates | Build Your Vision with Expert Freelancing",
  description:
    "StackMates is a professional dev studio specializing in custom web apps, full-stack development, and scalable solutions. We use Next.js, React, Node.js, and Tailwind to bring your ideas to life.",
  keywords: [
    "StackMates",
    "software development agency",
    "web development services",
    "app development",
    "Next.js development",
    "React developers",
    "Node.js backend",
    "freelance software team",
    "custom web apps",
    "full stack development",
    "Tailwind CSS",
    "TypeScript projects",
    "UI UX design",
  ],
  authors: [{ name: "StackMates" }],
  creator: "StackMates",
  publisher: "StackMates",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://stackmates-v1.vercel.app",
  },
  openGraph: {
    title: "StackMates | Build Your Vision with Expert Freelancing",
    description:
      "StackMates delivers high-quality, scalable solutions using Next.js, React, Node.js, and Tailwind. Let’s build your vision together.",
    url: "https://stackmates-v1.vercel.app",
    siteName: "StackMates",
    images: [
      {
        url: "https://stackmates-v1.vercel.app/hero-bg3.png",
        width: 1200,
        height: 630,
        alt: "StackMates - Professional Web & App Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StackMates | Web & App Development Studio",
    description:
      "Next.js, React & Node.js experts delivering innovative full-stack solutions.",
    images: ["https://stackmates-v1.vercel.app/hero-bg3.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#6C63FF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Topbar />
        <div className="">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
