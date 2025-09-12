import type { Metadata } from "next";
import FAQs from "@/components/FAQs";

export const metadata: Metadata = {
  title: "FAQ - StackMates | Your Web Development Questions Answered",
  description:
    "Find answers to common questions about StackMates' web development process, tech stack, project timelines, post-launch support, and more.",
  keywords: [
    "FAQ",
    "StackMates FAQ",
    "web development questions",
    "Next.js FAQ",
    "React development FAQ",
    "freelance dev studio",
    "software agency questions",
  ],
  openGraph: {
    title: "FAQ - StackMates | Web Development Questions Answered",
    description:
      "Get clarity on project timelines, tech stacks, pricing, and post-launch support with StackMates' FAQ section.",
    url: "https://stackmates-v1.vercel.app/faq",
    siteName: "StackMates",
    images: [
      {
        url: "https://stackmates-v1.vercel.app/hero-bg3.png",
        width: 1200,
        height: 630,
        alt: "StackMates FAQ - Professional Web & App Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - StackMates | Web Development Questions Answered",
    description:
      "Answers to common client questions: project timelines, tech stack, pricing & more.",
    images: ["https://stackmates-v1.vercel.app/hero-bg3.png"],
  },
};

export default function FAQPage() {
  return (
    <>
      <FAQs />

      {/* Structured FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does a project take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A simple landing page may take 1–2 weeks, while a custom SaaS application can take 6–12 weeks. We provide clear timelines before starting.",
                },
              },
              {
                "@type": "Question",
                name: "What tech stacks do you use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We specialize in Next.js, React, Node.js, Tailwind CSS, Prisma, and MongoDB for modern, scalable development.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide post-launch support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We offer ongoing maintenance and support packages to ensure your product runs smoothly after launch.",
                },
              },
              {
                "@type": "Question",
                name: "Can you work with existing designs or codebases?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we can enhance your current project or build new features on top of your existing design or codebase.",
                },
              },
              {
                "@type": "Question",
                name: "Do you handle deployment & hosting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we handle deployment and hosting on platforms like Vercel, AWS, and Render to ensure fast and secure delivery.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer custom pricing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Pricing depends on scope and complexity. We offer fixed-price, hourly, and long-term support models.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
