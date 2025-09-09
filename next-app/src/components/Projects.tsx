"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
}

const Projects: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Interview Assistant",
      description:
        "We built a full-stack AI application to help users ace interviews with real-time feedback and personalized resources.",
      image: "/intervueiq.png",
      link: "https://prepinterview-c86r.vercel.app/",
      tech: ["Next.js", "Tailwind CSS", "AI/ML"],
    },
    {
      id: 2,
      title: "Factuon - Invoicing Portal",
      description:
        "world-class invoicing platform. Our interactive dashboard monitors invoices with real-time analytics and stunning visualizations.",
      image: "/factuon.png",
      link: "https://factuon.com",
      tech: [
        "React",
        "Next.js",
        "Node.js",
        "Shadcn UI",
        "Tailwind CSS",
        "React Email",
        "Prisma",
        "PostgreSQL",
        "AWS",
        "Scanner",
        "Chatgpt API",
        "React Native",
      ],
    },
    {
      id: 3,
      title: "AMUS SOFT - Portfolio Website",
      description:
        "We crafted a stunning portfolio website showcasing our projects and expertise.",
      image: "/amussoft.png",
      link: "https://amussoft.com",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Shadcn UI",
        "AWS",
        "Blogs",
        "SEO",
        "Analytics",
      ],
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = Array.from(containerRef.current.children);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cards.indexOf(entry.target);
          if (entry.isIntersecting && !visibleCards.includes(index)) {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 150); // stagger effect
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [visibleCards]);

  return (
    <section
      id="works"
      className="py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
        Our Projects
      </h2>
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-lg transition-all duration-700 transform ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } hover:scale-105 hover:shadow-[#6C63FF]/40`}
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#6C63FF]/20 text-[#C7D2FE] px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6] text-white px-4 py-2 rounded-md hover:from-[#5B55E0] hover:to-[#7C3AED] transition-all"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
