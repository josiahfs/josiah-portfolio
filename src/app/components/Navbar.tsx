"use client";
import { useState } from "react";
import Nav from "./Navigation";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className="fixed right-0 m-[20px] z-20 w-[60px] h-[60px] rounded-full bg-[#C19C63] cursor-pointer flex items-center justify-center transition-transform"
    >
      <AnimatePresence className="z-0" mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
      <div className="z-20">
        {isActive ? (
          <svg
            x-show="open"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M4 8h16M4 16h16"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
