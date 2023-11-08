"use client";
import React, { useEffect, useRef } from "react";
import Button from "./Button";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="h-screen w-screen bg-pattern-bg flex justify-center items-center">
      <div className=" w-full mx-[24px] px-[24px] py-[40px] lg:w-2/5 bg-[#0B0B0B] rounded-[24px] flex flex-col justify-center items-center lg:px-[60px] lg:py-[80px]">
        <p className="text-[#ECECEC] text-xl mb-4 lg:text-5xl text-center font-bold lg:mb-[20px]">
          I&apos;M READY TO WORK WITH YOU TO BUILD SOMETHING EXCEPTIONAL.{" "}
        </p>
        <p className="text-[#B1B0B0] text-lg mb-4 lg:text-3xl text-center font-light lg:mb-[20px]">
          If you want to collaborate, please reach me out!
        </p>
        <Button text="Contact Me" />
      </div>
    </section>
  );
};

export default ContactSection;
