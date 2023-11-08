"use client";
import React, { useEffect, useRef } from "react";
import Button from "./Button";
import Image from "next/image";
import Navbar from "./Navbar";
import gsap from "gsap";
import { dir } from "console";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HeroSection: React.FC = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },

      x: "-500px",
    });
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.03 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <section className="h-screen w-screen bg-pattern-bg relative overflow-hidden">
      {/* <div className="text-[#ECECEC] mx-[120px] z-0 mt-12">
        <div className="text-4xl text-[#B1B0B0]">
          <p>Student</p>
          <p>Mobile Developer</p>
          <p>Project Manager</p>
        </div>
      </div> */}
      <div
        id="marquee-text"
        className="w-max text-[#ECECEC] text-[360px] font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden select-none"
      >
        <div ref={slider} className="relative whitespace-nowrap flex">
          <p ref={firstText}>Josiah Farrel &#183;&nbsp;</p>
          <p ref={secondText} className="absolute left-full">
            Josiah Farrel &#183;&nbsp;
          </p>
        </div>
      </div>
      <Image
        className="z-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 select-none"
        src="/hero.svg"
        alt="Picture of the author"
        width={480}
        height={480}
      />
    </section>
  );
};

export default HeroSection;
