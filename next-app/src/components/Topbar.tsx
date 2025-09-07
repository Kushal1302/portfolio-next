"use client";
import { useState } from "react";

const Topbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-lg px-6 py-3 flex items-center justify-between w-[100%] max-w-md gap-4">
        {/* Brand */}
        <span className="font-extrabold text-xl text-[#fff]">
          Stack<span className="text-[#6C63FF]">Mates</span>
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["Home", "Works", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#fff] font-medium hover:text-[#6C63FF] transition-colors relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#6C63FF] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-[#1E293B] transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-[#1E293B] transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-[#1E293B] transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute mt-3 left-1/2 transform -translate-x-1/2 w-56 backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl shadow-xl md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {["Home", "Works", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className="text-[#fff] font-semibold hover:text-[#6C63FF] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Topbar;
