"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] overflow-hidden px-6">
      {/* Floating decorative shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#6C63FF]/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#8B5CF6]/20 blur-3xl"
      />

      {/* Overlay for extra glass effect */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="relative z-20 max-w-4xl text-center"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6"
        >
          Build Your Vision with{" "}
          <span className="bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6] bg-clip-text text-transparent">
            Expert Freelancing
          </span>
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 mb-8"
        >
          We deliver innovative, high-quality solutions tailored to your needs.
          Let’s create something extraordinary together.
        </motion.p>

        <motion.a
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.6 }}
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6] text-white font-medium px-8 py-3 hover:from-[#5B55E0] hover:to-[#7C3AED] transition-transform duration-300 shadow-lg"
        >
          Start Your Project
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
