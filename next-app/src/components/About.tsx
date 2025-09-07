"use client";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const points = [
    { title: "Modern Web Development", desc: "We specialize in building scalable websites with Next.js, React, and Node.js." },
    { title: "Backend Implementation", desc: "Robust APIs, databases, and server-side logic for seamless digital products." },
    { title: "Deployment & Automation", desc: "CI/CD pipelines, automated deployments, and workflow optimization." },
    { title: "AWS & CloudWatch", desc: "Cloud hosting, monitoring, and infrastructure management for reliability." },
    { title: "SEO Optimization", desc: "On-page & technical SEO to boost visibility and search rankings." },
    { title: "High Performance", desc: "Optimized websites and apps for speed, responsiveness, and UX." },
    { title: "Tailored Solutions", desc: "Custom solutions from landing pages to enterprise-level apps." },
    { title: "Clean & Maintainable Code", desc: "We follow best practices to ensure scalable and maintainable projects." },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12"
      >
        About Us
      </motion.h2>

      {/* Points Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{point.title}</h3>
            <p className="text-gray-300 text-sm sm:text-base">{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
