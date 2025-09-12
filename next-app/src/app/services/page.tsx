import Services from "@/components/Services";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Services | StackMates Web Development Agency",
  description:
    "Explore StackMates services: Web Development, UI/UX Design, API & Backend Solutions, and SaaS Development. We build scalable, high-performance apps using Next.js, React, Node.js, and Tailwind CSS.",
  keywords: [
    "web development services",
    "UI/UX design agency",
    "API development",
    "backend development",
    "SaaS development company",
    "Next.js developers",
    "React development agency",
    "full stack web development",
  ],
  openGraph: {
    title: "Our Services | StackMates Web Development Agency",
    description:
      "Professional web development, UI/UX design, backend solutions, and SaaS development with Next.js, React, Node.js, and Tailwind.",
    url: "https://stackmates-v1.vercel.app/services",
    images: [
      {
        url: "https://stackmates-v1.vercel.app/hero-bg3.png",
        width: 1200,
        height: 630,
        alt: "StackMates Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StackMates Services",
    description:
      "Build your vision with our expert freelancing services: web apps, design, backend, and SaaS solutions.",
    images: ["https://stackmates-v1.vercel.app/hero-bg3.png"],
  },
  alternates: {
    canonical: "https://stackmates-v1.vercel.app/services",
  },
};

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-black">
      {/* SEO-Friendly Intro */}
      <section className="px-6 py-16  max-w-4xl mx-auto text-center ">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 mt-8">
          Professional <span className="text-[#6C63FF]">Web Development Services</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          At <strong>StackMates</strong>, we provide full-cycle development services —
          from crafting user-friendly designs to deploying scalable SaaS platforms.
          Our expertise in <em>Next.js, React, Node.js, and Tailwind</em> ensures
          your digital product is fast, modern, and future-ready.
        </p>
      </section>

      {/* Services Grid */}
      <Services />

      {/* Extra SEO Content */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-left">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Why Choose StackMates?
        </h2>
        <p className="text-gray-400 mb-6">
          Choosing the right development partner is crucial for the success of your
          business. Our team combines technical expertise with creative design,
          ensuring that every project not only meets but exceeds client expectations.
          We specialize in building high-performance applications that are secure,
          scalable, and aligned with your goals.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">
          Frequently Asked Questions
        </h3>
        <ul className="list-disc pl-6 text-gray-400 space-y-3">
          <li>
            <strong>Do you build custom web apps?</strong>  
            Yes, we build everything from small business websites to large-scale SaaS platforms.
          </li>
          <li>
            <strong>What technologies do you use?</strong>  
            We specialize in Next.js, React, Node.js, TypeScript, and Tailwind CSS.
          </li>
          <li>
            <strong>Do you offer design services?</strong>  
            Absolutely — our UI/UX design services ensure your app looks and feels world-class.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ServicesPage;
