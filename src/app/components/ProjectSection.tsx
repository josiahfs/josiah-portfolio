"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);
  const rightRef = useRef(null);
  const photoRefs = useRef([useRef(null), useRef(null), useRef(null)]);
  const imageSources = ["/project1.svg", "/project2.svg", "/project3.svg"]; // Add your image sources here

  useEffect(() => {
    const photos = photoRefs.current.map((ref) => ref.current);
    // Set the initial yPercent value for the first photo to 0%
    gsap.set(photos[0], { yPercent: 0 });
    // Set the initial yPercent value for the rest of the photos to 101%
    gsap.set(photos.slice(1), { yPercent: 110 });

    // Create an animation to move the photos from 101% yPercent to 0% yPercent
    const photoAnimation = gsap.to(photos, {
      yPercent: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
        markers: false, // Remove this line in production
      },
    });

    // Define a GSAP animation for pinning the rightRef
    const pinRight = gsap.to(rightRef.current, {
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: rightRef.current,
        scrub: 1,
        markers: false, // Remove this line in production
        animation: photoAnimation, // Attach the photo animation to the ScrollTrigger
      },
    });

    // Make sure to kill the animations when the component unmounts
    return () => {
      pinRight.kill();
      photoAnimation.kill();
    };
  }, [galleryRef.current]);

  return (
    <>
      <div className="bg-[#0B0B0B] min-h-screen text-[#ECECEC]">
        <div className="w-full h-[20vh] flex justify-center items-end">
          <p className="text-[52px] font-bold ">My Projects</p>
        </div>
        <div className="hidden lg:flex" ref={galleryRef}>
          <div className="w-[50vw]">
            {/* items 1 */}
            <div className="mx-auto w-1/2">
              <div className="h-screen flex flex-col justify-center">
                <div className="mb-[20px]">
                  <p className="text-[20px]">Mobile App</p>
                  <p className="text-[52px] my-2 font-semibold text-[#C19C63] leading-none">
                    Calico
                  </p>
                  <p className="text-[16px] text-[#B1B0B0]">
                    Calico is a mobile app that has a chatbot that assists users
                    in managing their mental well-being through personalized
                    responses and guidance. With Calico, users can share their
                    concerns and problems for appropriate support.
                  </p>
                </div>
                <Button text="View More" onClick={} />
              </div>
            </div>
            {/* items 2 */}
            <div className="mx-auto w-1/2">
              <div className="h-screen flex flex-col justify-center">
                <div className="mb-[20px]">
                  <p className="text-[20px]">Mobile App</p>
                  <p className="text-[52px] my-2 font-semibold text-[#C19C63] leading-none">
                    Dental Hero
                  </p>
                  <p className="text-[16px] text-[#B1B0B0]">
                    Dental Hero is lorem ipsum dkfalf dfjadkjf fdskalf jadslfj
                    fdaklfj aldjfafadf fajdl fjadfj fdaslkfj af fjalsdf jaldfj
                    aldjf lajflaj faf alal fjlasfjlasjf lakskf
                    adfdajhfadhfiouaefha dafhadhf uad.
                  </p>
                </div>
                <Button text="View More" onClick={} />
              </div>
            </div>
            <div className="mx-auto w-1/2">
              <div className="h-screen flex flex-col justify-center">
                <div className="mb-[20px]">
                  <p className="text-[20px]">UI/UX, Front End</p>
                  <p className="text-[52px] my-2 font-semibold text-[#C19C63] leading-none">
                    Pemira Himakom
                  </p>
                  <p className="text-[16px] text-[#B1B0B0]">
                    Pemira Himakom is a website for an event that facilitates
                    yearly Himakom leader election that allows Himakom UGM
                    members to vote online and onsite.
                  </p>
                </div>
                <Button text="View More" onClick={} />
              </div>
            </div>
          </div>

          <div
            className="bg-transparent flex flex-col justify-center items-center h-screen"
            ref={rightRef}
          >
            <div className="w-[41vw] h-[50vh] rounded-[12px] relative overflow-hidden">
              {photoRefs.current.map((photoRef, index) => (
                <div
                  key={index}
                  className="absolute w-full h-full"
                  ref={photoRef}
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

        {/* layout for mobile  */}
        <div className="block lg:hidden mx-6 flex-col justify-between items-center my-14 space-y-[100px]">
          {/* items 1 */}
          <div>
            <div className="w-full mb-6">
              <Image
                src="/project1.svg"
                alt="Picture of the author"
                width={100}
                height={100}
                className="relative w-full object-contain h-auto rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-[20px]">
                <p className="text-[14px]">Mobile App</p>
                <p className="text-[24px] my-2 font-semibold text-[#C19C63] leading-none">
                  Calico
                </p>
                <p className="text-[16px] text-[#B1B0B0] text-justify">
                  Calico is a mobile app that has a chatbot that assists users
                  in managing their mental well-being through personalized
                  responses and guidance. With Calico, users can share their
                  concerns and problems for appropriate support.
                </p>
              </div>
              <Button text="View More" onClick={} />
            </div>
          </div>
          {/* items 2 */}
          <div>
            <div className="w-full mb-6">
              <Image
                src="/project2.svg"
                alt="Picture of project 3"
                width={100}
                height={100}
                className="relative w-full object-contain h-auto rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-[20px]">
                <p className="text-[14px]">Mobile App</p>
                <p className="text-[24px] my-2 font-semibold text-[#C19C63] leading-none">
                  Dental Hero
                </p>
                <p className="text-[16px] text-[#B1B0B0] text-justify">
                  Dental Hero is lorem ipsum dkfalf dfjadkjf fdskalf jadslfj
                  fdaklfj aldjfafadf fajdl fjadfj fdaslkfj af fjalsdf jaldfj
                  aldjf lajflaj faf alal fjlasfjlasjf lakskf
                  adfdajhfadhfiouaefha dafhadhf uad.
                </p>
              </div>
              <Button text="View More" onClick={} />
            </div>
          </div>
          {/* items 3 */}
          <div>
            <div className="w-full mb-6">
              <Image
                src="/project3.svg"
                alt="Picture of project 3"
                width={100}
                height={100}
                className="relative w-full object-contain h-auto rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-[20px]">
                <p className="text-[14px]">UI/UX, Front End</p>
                <p className="text-[24px] my-2 font-semibold text-[#C19C63] leading-none">
                  Pemira Himakom
                </p>
                <p className="text-[16px] text-[#B1B0B0] text-justify">
                  Pemira Himakom is a website for an event that facilitates
                  yearly Himakom leader election that allows Himakom UGM members
                  to vote online and onsite.
                </p>
              </div>
              <Button text="View More" onClick={} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
