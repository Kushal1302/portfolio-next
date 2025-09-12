"use client";
import { motion } from "framer-motion";
import { Code2, PenTool, Server, Layers } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: `
      We specialize in building high-performance, scalable websites and web applications using modern frameworks like Next.js, React, and Tailwind CSS. Our focus is not just on clean code but also on creating maintainable solutions that grow with your business.

      From sleek landing pages to complex web platforms, we ensure every project is optimized for speed, security, and user engagement. Our development process follows industry best practices, including responsive design, accessibility standards, and SEO-friendly architecture.

      Whether you need a startup MVP, a custom enterprise dashboard, or a full-scale e-commerce platform, we craft solutions that balance performance and aesthetics seamlessly.
    `,
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    description: `
      Great design goes beyond looks — it’s about crafting experiences. We create intuitive, user-centered interfaces that make navigating your product feel natural and effortless. Every pixel is purposeful, enhancing usability and engagement.

      We follow design thinking principles, starting with research and user personas, then moving into wireframes, prototypes, and final designs. By collaborating closely with you, we ensure the final product aligns perfectly with your brand identity.

      From color psychology to micro-interactions, we design with the end-user in mind, delivering experiences that are beautiful, functional, and accessible across all devices.
    `,
    icon: PenTool,
  },
  {
    title: "API & Backend Solutions",
    description: `
      Behind every successful application is a reliable and secure backend. We build high-performance APIs and backend systems tailored to your project needs. Using Node.js, Express, and scalable databases, we ensure data flows seamlessly between frontend and backend.

      Our backend solutions are designed with scalability and security in mind. We implement authentication, role-based access, caching strategies, and real-time updates to keep your applications fast and safe.

      Whether it’s RESTful APIs, GraphQL, or microservices architecture, we provide solutions that handle growth, integrate with third-party services, and ensure your system is future-ready.
    `,
    icon: Server,
  },
  {
    title: "SaaS Development",
    description: `
      We help entrepreneurs and businesses bring their SaaS ideas to life — from concept to fully functional platform. Our SaaS development services cover everything from multi-tenant architectures to subscription management and payment integrations.

      By leveraging cloud-native technologies, we ensure your SaaS product is reliable, secure, and scalable. Features like analytics dashboards, automated workflows, and user management systems are tailored to your product vision.

      With experience in building SaaS platforms across industries, we focus on creating products that not only work flawlessly but also deliver consistent value to your end-users.
    `,
    icon: Layers,
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] px-6"
    >
      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-20 w-24 h-24 rounded-full bg-[#6C63FF]/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-[#8B5CF6]/20 blur-3xl"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Our <span className="text-[#6C63FF]">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-3xl mx-auto mb-16"
        >
          We provide end-to-end digital solutions for startups, businesses, and creators — 
          covering everything from concept and design to full-stack development and scalable deployment.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#6C63FF] transition-all shadow-lg text-left"
            >
              <service.icon className="w-14 h-14 mb-6 text-[#6C63FF]" />
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed whitespace-pre-line">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
