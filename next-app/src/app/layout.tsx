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
    "StackMates is a collaborative dev studio delivering high-quality, innovative solutions. From web apps to full-stack projects, we help you build your vision with the right team.",
  keywords: [
    "StackMates",
    "software development",
    "freelance team",
    "web development",
    "app development",
    "full stack development",
    "Next.js",
    "React",
    "Tailwind",
    "custom projects",
  ],
  openGraph: {
    title: "StackMates | Build Your Vision with Expert Freelancing",
    description:
      "StackMates delivers innovative, high-quality software solutions. Let’s create something extraordinary together.",
    url: "https://stackmates.com", // replace with your real domain
    siteName: "StackMates",
    images: [
      {
        url: "/og.png", // add an OG image in /public
        width: 1200,
        height: 630,
        alt: "StackMates - Build Your Vision",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StackMates | Build Your Vision with Expert Freelancing",
    description:
      "Collaborative dev studio delivering top-notch, innovative web and app solutions.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
