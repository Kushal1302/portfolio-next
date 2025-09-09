"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] overflow-hidden px-6 pt-24 sm:pt-28 md:pt-32"
    >
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Grid layout for responsiveness */}
      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="text-center lg:text-left"
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
            className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8"
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
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6] text-white font-medium px-6 sm:px-8 py-3 hover:from-[#5B55E0] hover:to-[#7C3AED] transition-transform duration-300 shadow-lg"
          >
            Start Your Project
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src="/hero-bg3.png" // replace with your image
            alt="Technology Illustration"
            width={800}
            height={500}
            className="w-full max-w-xl sm:max-w-xl md:max-w-xl lg:max-w-2xl drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
