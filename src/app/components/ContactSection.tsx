"use client";
import React, { useEffect, useRef } from "react";
import Button from "./Button";
import Image from "next/Image";

const ContactSection = () => {
  return (
    <section className="h-screen w-screen bg-pattern-bg flex justify-center items-center">
      <div className=" w-3/5 bg-[#0B0B0B] rounded-[24px] flex flex-col justify-center items-center px-[60px] py-[80px]">
        <p className="text-[#ECECEC] text-[48px] text-center font-bold mb-[20px]">
          I&apos;M READY TO WORK WITH YOU TO BUILD SOMETHING EXCEPTIONAL.{" "}
        </p>
        <p className="text-[#B1B0B0] text-[28px] text-center font-light mb-[20px]">
          If you want to collaborate, please reach me out!
        </p>
        <Button text="Contact Me" />
      </div>
    </section>
  );
};

export default ContactSection;
