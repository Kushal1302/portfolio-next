import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Projects />
      {/* Contact component can be added here if needed */}
      <Contact />
    </div>
  );
};

export default page;
