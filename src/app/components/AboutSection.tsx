"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Button from "./Button";

const AboutSection = () => {
  const downloadCV = () => {
    const cvLink =
      "https://drive.google.com/file/d/1Y0IPm6k7xS49YzZraROQxavkZgu7Ba_t/view?usp=sharing";
    window.location.href = cvLink;
  };

  return (
    <section className="h-screen my-auto flex flex-col justify-center items-center">
      <div className="w-full h-[20vh] flex justify-center items-end"></div>
      <div className="h-screen w-10/12 flex flex-col lg:flex-row justify-evenly items-center">
        <div className="w-full lg:w-[618px] space-y-4 lg:order-1">
          <div>
            <p className="text-[#ECECEC] font-bold text-[24px] lg:text-[40px]">
              Hi! My name is Josiah<br></br>
              I&rsquo;m&nbsp;
              <span className="text-[#C19C63] text-[24px] lg:text-[40px]">
                <TypeAnimation
                  sequence={[
                    "a Compsci Student.",
                    1000,
                    "a Mobile Developer.",
                    1000,
                    "a Frontend Developer.",
                    1000,
                    "a Product Manager.",
                    1000,
                    "a UI/UX Designer.",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>
          </div>
          <p className="text-[#B1B0B0] text-[14px] lg:text-[16px] text-justify font-regular">
            Hi there! My name is Josiah and I am an adaptable T-Shaped
            Undergraduate student at Universitas Gadjah Mada, specializing in
            Computer Science. With a strong foundation in Mobile App
            Development, UI/UX, and Product Management, Josiah possesses a
            diverse skill set. Josiah's proactive and inquisitive nature drives
            him to continuously seek new learning opportunities and stay up to
            date with the latest industry trends.
          </p>
          <Button text="Download CV" onClick={downloadCV} />
        </div>
        <div className="hidden w-[30vh] lg:w-[480px] lg:block lg:order-2">
          <Image
            src="/about-pic.svg"
            alt="Picture of the author"
            width={1500}
            height={1500}
            className="relative w-full object-contain h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
