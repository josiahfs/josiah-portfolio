"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import NavMenu from "./NavMenu";

const Navbar: React.FC = () => {
  const menuToggleRef = useRef<HTMLButtonElement | null>(null);
  const bar1Ref = useRef<SVGPathElement | null>(null);
  const bar2Ref = useRef<SVGPathElement | null>(null);
  const bar3Ref = useRef<SVGPathElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Create a timeline initially in a reversed state
    const tl = gsap.timeline({ reversed: true });

    tl.to(bar1Ref.current, {
      duration: 0.5,
      attr: { d: "M8,2 L2,8" },
      x: 1,
      ease: "power2.inOut",
    });
    tl.to(bar2Ref.current, { duration: 0.5, autoAlpha: 0 }, "<");
    tl.to(
      bar3Ref.current,
      {
        duration: 0.5,
        attr: { d: "M8,8 L2,2" },
        x: 1,
        ease: "power2.inOut",
      },
      "<"
    );
    menuToggleRef.current?.addEventListener("click", () => {
      tl.reverse();
      setMenuOpen(!menuOpen);
    });
  }, [menuOpen]);

  return (
    <header>
      <div className="px-[40px] py-[60px] flex justify-end items-center cursor-pointer">
        <button
          className="bg-transparent border-none outline-none z-10"
          ref={menuToggleRef}
        >
          <svg
            viewBox="0 0 12 10"
            className="fill-none stroke-[#ECECEC]"
            height="40px"
            width="40px"
          >
            <path d="M10,2 L2,2" ref={bar1Ref}></path>
            <path d="M2,5 L10,5" ref={bar2Ref}></path>
            <path d="M10,8 L2,8" ref={bar3Ref}></path>
          </svg>
        </button>
      </div>
      {menuOpen && <NavMenu className="z-0" />}
    </header>
  );
};

export default Navbar;
