"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/Image";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const photoRefs = useRef([useRef(null), useRef(null), useRef(null)]);
  const imageSources = ["/project1.svg", "/project2.svg", "/project3.svg"]; // Add your image sources here
  const [leftIndex, setLeftIndex] = useState(0);

  useEffect(() => {
    // Define a GSAP animation for pinning the rightRef
    const pinRight = gsap.to(leftRef.current, {
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: 1,
        markers: true, // Remove this line in production
      },
    });

    // Define a GSAP animation for the leftRef
    const leftAnimation = gsap.to(leftRef.current, {
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: true, // Remove this line in production
        onUpdate: (self) => {
          const scrollY = self.scroll();
          const windowHeight = window.innerHeight;
          const totalHeight = leftRef.current.clientHeight;
          const scrollPercent = (scrollY / (totalHeight - windowHeight)) * 100;
          // Calculate the index based on the scroll percentage
          const newIndex = Math.min(Math.floor((scrollPercent / 100) * 3), 2);
          setLeftIndex(newIndex); // Update the leftIndex state
        },
      },
      y: () => {
        // Calculate the distance to move the leftRef (change this as needed)
        return -(leftRef.current.clientHeight - window.innerHeight);
        console.log(newIndex);
      },
    });

    // Make sure to kill the animations when the component unmounts
    return () => {
      pinRight.kill();
      leftAnimation.kill();
    };
  }, []);

  return (
    <>
      <div className="bg-[#0B0B0B] min-h-screen">
        <div className="w-full h-[20vh] flex justify-center items-end">
          <p className="text-[52px] font-bold ">My Projects</p>
        </div>
        <div className="flex">
          <div className="w-1/2" ref={leftRef}>
            {/* items 1 */}
            <div className="mx-auto w-6/12">
              <div className="h-screen flex flex-col justify-center">
                <div className="mb-[20px]">
                  <p className="text-[20px] ">Mobile App</p>
                  <p className="text-[52px] font-semibold text-[#C19C63] ">
                    Calico
                  </p>
                  <p className="text-[16px] text-[#B1B0B0]">
                    Calico is a mobile app that has a chatbot that assists users
                    in managing their mental well-being through personalized
                    responses and guidance. With Calico, users can share their
                    concerns and problems for appropriate support.
                  </p>
                </div>
                <Button text="View More" />
              </div>
            </div>
            {/* items 2 */}
            <div className="mx-auto w-6/12">
              <div className="h-screen flex flex-col justify-center">
                <div className="mb-[20px]">
                  <p className="text-[20px] ">Mobile App</p>
                  <p className="text-[52px] font-semibold text-[#C19C63] ">
                    Dental Hero
                  </p>
                  <p className="text-[16px] text-[#B1B0B0]">
                    Dental Hero is lorem ipsum dkfalf dfjadkjf fdskalf jadslfj
                    fdaklfj aldjfafadf fajdl fjadfj fdaslkfj af fjalsdf jaldfj
                    aldjf lajflaj faf alal fjlasfjlasjf lakskf
                    adfdajhfadhfiouaefha dafhadhf uad.
                  </p>
                </div>
                <Button text="View More" />
              </div>
            </div>
            <div className="mx-auto w-6/12">
              <div className="h-screen flex flex-col justify-center">
                <div className="mb-[20px]">
                  <p className="text-[20px] ">UI/UX, Front End</p>
                  <p className="text-[52px] font-semibold text-[#C19C63] ">
                    Pemira Himakom
                  </p>
                  <p className="text-[16px] text-[#B1B0B0]">
                    Pemira Himakom is a website for an event that facilitates
                    yearly Himakom leader election that allows Himakom UGM
                    members to vote online and onsite.
                  </p>
                </div>
                <Button text="View More" />
              </div>
            </div>
          </div>

          <div
            className="w-1/2 bg-transparent flex flex-col justify-center items-center h-screen"
            ref={rightRef}
          >
            <div className="mr-[40px] w-10/12 h-1/2 relative">
              {photoRefs.current.map((photoRef, index) => (
                <div
                  key={index}
                  className="absolute w-full h-full"
                  ref={photoRef}
                  style={{ opacity: index === 0 ? 1 : 0 }}
                >
                  <Image
                    className="rounded-[12px]"
                    src={imageSources[index]}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
