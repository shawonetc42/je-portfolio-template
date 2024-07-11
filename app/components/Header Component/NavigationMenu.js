"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center items-center px-4 py-4 text-base text-white shadow-lg bg-zinc-950 max-md:px-3">
      <div className="flex justify-between items-center w-full max-w-[1296px] gap-5 max-md:flex-wrap">
        <div className="flex items-center justify-between gap-5 max-md:flex-wrap max-md:w-full">
          <img
            loading="lazy"
            srcSet="/logo.svg"
            className="shrink-0 w-12 aspect-square"
            alt="Logo"
          />
          <div className="md:hidden flex items-center">
            <FaBars
              className="text-white cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <div className="hidden md:flex items-center gap-5 whitespace-nowrap">
            <div>Services</div>
            <div>Works</div>
            <div>Resume</div>
            <div>Skills</div>
            <div>Testimonials</div>
            <div className="flex flex-col items-center">
              <div>Contact</div>
              <div className="mt-1.5 h-0.5 rounded bg-gradient-yellow w-full" />
            </div>
          </div>
        </div>
        <div className="hidden md:flex  text-transparent bg-gradient-to-r from-[#F5BB0A]  to-[#868481] justify-center items-center px-4 py-2 text-base font-bold leading-4 text-center text-white capitalize rounded-full cursor-pointer">
          Hire me!
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-5 mt-4 text-white bg-zinc-950 p-4 rounded-lg shadow-lg w-full">
          <div>Services</div>
          <div>Works</div>
          <div>Resume</div>
          <div>Skills</div>
          <div>Testimonials</div>
          <div className="flex flex-col items-center">
            <div className="hidden max-md:block">Contact</div>
            <div className="mt-1.5 h-0.5 rounded bg-gradient-yellow w-full" />
          </div>
          <div className="bg-gradient-yellow justify-center items-center px-4 py-2 text-base font-bold leading-4 text-center text-white capitalize rounded-full cursor-pointer">
            Hire me!
          </div>
        </div>
      )}
    </div>
  );
}
