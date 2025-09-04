"use client";
import { useState, useEffect } from "react";

const Topbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav className="bg-[#060E17] text-[#060C14] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="font-bold text-xl text-[#E5E7EB]">Logo</span>
          </div>
          <div>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:scale-105 focus:outline-none group"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative h-6 w-6">
                <div
                  className={`absolute w-6 h-0.5 bg-[#E5E7EB] top-1/2 transform transition-all duration-300 ease-in-out group-hover:bg-[#67E8F9] ${
                    isMenuOpen
                      ? "rotate-45 translate-y-0"
                      : "-translate-y-2"
                  }`}
                />
                <div
                  className={`absolute w-6 h-0.5 bg-[#E5E7EB] top-1/2 transform transition-all duration-300 ease-in-out group-hover:bg-[#67E8F9] ${
                    isMenuOpen
                      ? "-rotate-45 translate-y-0"
                      : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-[#060E17] bg-opacity-90 transform ${
          isMenuOpen
            ? "translate-x-0 translate-y-0"
            : "translate-x-full -translate-y-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:scale-105 focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6 text-[#E5E7EB] hover:text-[#67E8F9]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-full space-y-6 lg:text-5xl sm:text-4xl xs:text-3xl text-2xl text-[#E5E7EB]">
          {["Home", "Projects", "Contact us"].map((item, index) => (
            <li
              key={item}
              className={`transition-opacity duration-300 delay-${
                index * 100
              } ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
              <a
                href="#"
                className="relative px-3 py-2 rounded-md group"
                onClick={toggleMenu}
              >
                <span className="relative z-10 group-hover:text-[#67E8F9]">
                  {item}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#22D3EE] group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;