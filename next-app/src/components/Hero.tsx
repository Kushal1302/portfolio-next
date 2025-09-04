"use client";
import { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    console.error("Video failed to load:", e);
  };

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#1E3A8A] overflow-hidden">
      {/* Background Video - Ensure hero-video.mp4 and hero-fallback.jpg are in the public folder */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="/hero-fallback.jpg"
        onError={handleVideoError}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        <div className="absolute inset-0 flex items-center justify-center text-[#E5E7EB] text-lg">
          Video not supported or failed to load. Please check the console for errors.
        </div>
      </video>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0  bg-opacity-30 z-10"></div>

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E5E7EB] mb-4 transition-opacity duration-700 ease-in-out delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Build Your Vision with Expert Freelancing
        </h1>
        <p
          className={`text-lg sm:text-xl text-[#E5E7EB] mb-8 max-w-2xl mx-auto transition-opacity duration-700 ease-in-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We deliver innovative, high-quality solutions tailored to your needs. Let’s create something extraordinary together.
        </p>
        <a
          href="#contact"
          className={`inline-flex items-center justify-center rounded-full bg-[#272757] text-[#ffffff] font-medium text-base sm:text-lg h-12 px-6 sm:px-8 hover:bg-[#0F0E47] transition-all duration-300 ease-in-out transform ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }`}
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
};

export default Hero;