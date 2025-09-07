"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setStatus(null); // clear previous status on input
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({
          type: "success",
          message: "Your message has been sent! We’ll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#6C63FF]/20 animate-pulse blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#8B5CF6]/20 animate-pulse blur-3xl"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12"
      >
        Reach Our Team
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="max-w-lg mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-8"
      >
        {["name", "email", "message"].map((field) => (
          <motion.div
            key={field}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {field !== "message" ? (
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field === "name" ? "Your Name" : "Your Email"}
                value={formData[field as keyof typeof formData]}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#6C63FF] my-2"
              />
            ) : (
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#6C63FF] my-2"
              />
            )}
            {errors[field as keyof typeof errors] && (
              <p className="text-red-400 text-sm">
                {errors[field as keyof typeof errors]}
              </p>
            )}
          </motion.div>
        ))}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="w-full bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6] text-white py-3 rounded-md hover:from-[#5B55E0] hover:to-[#7C3AED] transition-all shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Status message */}
        {status && (
          <p
            className={`mt-4 text-center text-sm ${
              status.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.message}
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;
