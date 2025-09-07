"use client";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const points = [
    "We specialize in building modern, scalable websites using Next.js, React, and Node.js.",
    "Our team focuses on high-performance web applications with smooth user experiences.",
    "We integrate robust backend solutions, APIs, and databases to deliver complete digital products.",
    "Tailored solutions for businesses — from landing pages to full-fledged enterprise applications.",
    "Our workflow emphasizes clean code, maintainable architecture, and latest web technologies."
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

      {/* Description Points */}
      <div className="max-w-3xl mx-auto space-y-6">
        {points.map((point, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-center text-lg sm:text-xl"
          >
            {point}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;
