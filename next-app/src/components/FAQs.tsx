"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on complexity. A simple landing page may take 1–2 weeks, while a custom SaaS application can take 6–12 weeks. We always provide an estimated timeline before starting.",
  },
  {
    question: "What tech stacks do you use?",
    answer:
      "We specialize in modern, scalable technologies: Next.js, React, Node.js, Tailwind CSS, Prisma, and MongoDB. For design, we use Figma and modern UI frameworks.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes! We offer maintenance and support packages to ensure your website or application runs smoothly after deployment.",
  },
  {
    question: "Can you work with existing designs or codebases?",
    answer:
      "Absolutely. We can enhance your current project or build new features on top of your existing design or codebase.",
  },
  {
    question: "Do you handle deployment & hosting?",
    answer:
      "Yes, we take care of deployment and hosting on platforms like Vercel, AWS, and Render, ensuring your app is fast and secure.",
  },
  {
    question: "Do you offer custom pricing?",
    answer:
      "Yes. Our pricing depends on the scope and complexity of the project. We also offer flexible models — fixed-price, hourly, or long-term support.",
  },
];

const FAQ: React.FC = () => {
  return (
    <section
      id="faq"
      className="relative w-full py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] px-6"
    >
      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-20 w-28 h-28 rounded-full bg-[#6C63FF]/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-20 w-36 h-36 rounded-full bg-[#8B5CF6]/20 blur-3xl"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Frequently Asked <span className="text-[#6C63FF]">Questions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          We’ve answered some of the most common questions clients ask us. If
          you don’t find your answer here, feel free to{" "}
          <a
            href="#contact"
            className="text-[#6C63FF] hover:underline font-medium"
          >
            contact us directly.
          </a>
        </motion.p>

        {/* Accordion FAQ */}
        <Accordion type="single" collapsible className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg"
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="px-6 text-white hover:text-[#6C63FF]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* CTA under FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href={`/#contact`}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6] text-white font-medium px-6 sm:px-8 py-3 hover:from-[#5B55E0] hover:to-[#7C3AED] transition-transform duration-300 shadow-lg"
          >
            Still have questions? Contact us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
