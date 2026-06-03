"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Education",
    "Experiences",
    "Achievements",
    "Projects",
    "Publications",
    "Conferences",
    "Gallery",
    "Contact",
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#3E4A24]/95 backdrop-blur-md border-b border-[#B89B5E]/20 shadow-lg">

      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <img
            className="w-14 h-14 rounded-full border-2 border-[#DCCCA3]"
            src="/flag2.png"
            alt="logo"
          />

          <div className="hidden md:block">
            <h2 className="text-[#F8F5EC] font-bold text-lg tracking-wide">
              Dr. M. A. A. Ansari
            </h2>

            <p className="text-[#DCCCA3] text-xs">
              Researcher • Innovator • Educator
            </p>
          </div>

        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-2">

          {menuItems.map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="
                relative
                px-4
                py-2
                text-[#F8F5EC]
                rounded-lg
                transition-all
                duration-300
                hover:text-[#DCCCA3]
                hover:bg-[#556B2F]
                "
              >
                {item}

                <span
                  className="
                  absolute
                  left-1/2
                  bottom-0
                  h-[2px]
                  w-0
                  bg-[#DCCCA3]
                  transition-all
                  duration-300
                  -translate-x-1/2
                  hover:w-[80%]
                  "
                />
              </Link>
            </li>
          ))}

        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-[#F8F5EC]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#3E4A24] border-t border-[#B89B5E]/20">

          <ul className="flex flex-col p-4">

            {menuItems.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              >
                <li className="
                  px-4
                  py-3
                  text-[#F8F5EC]
                  rounded-lg
                  hover:bg-[#556B2F]
                  hover:text-[#DCCCA3]
                  transition-all
                  duration-300
                ">
                  {item}
                </li>
              </Link>
            ))}

          </ul>

        </div>
      )}
    </header>
  );
};

export default Navbar;
