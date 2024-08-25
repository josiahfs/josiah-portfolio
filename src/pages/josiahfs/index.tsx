import React, { useState, useEffect } from "react";
import Navbar from "../../app/components/Navbar";
import Footer from "../../app/components/Footer";
import ProjectCard from "../../app/components/ProjectCard";
import Image from "next/image";
import "../../app/globals.css";

import { createClient } from "contentful";

interface Portfolio {
  sys: {
    id: string;
    space: any; // Define the space property type appropriately
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: any; // Define the environment property type appropriately
    revision: number;
    contentType: any; // Define the contentType property type appropriately
    locale: string;
    // Add other properties if needed
  };
  fields: {
    id: number;
    title: string;
    slug: string;
    heading: string;
    tag: string[];
    date: string;
    image: any; // Define the image property type appropriately
    description: string;
    // Add other properties based on your data structure
  };
}

interface ProjectsProps {
  portfolios: Portfolio[];
}

export async function getStaticProps() {
  const space = process.env.CONTENTFUL_SPACE_ID || "";
  const accessToken = process.env.CONTENTFUL_ACCESS_KEY || "";

  if (!space || !accessToken) {
    throw new Error("Contentful space ID or access token is missing.");
  }

  const client = createClient({
    space,
    accessToken,
  });

  const res = await client.getEntries({ content_type: "portfolio" });

  return {
    props: {
      portfolios: res.items,
    },
  };
}

export default function Josiahfs({ portfolios }: ProjectsProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [portfolios]);

  console.log(portfolios);

  return (
    <main className="flex min-h-screen flex-col bg-[#F5F5F5] overflow-hidden items-center md:shadow-lg lg:shadow-lg">
      <section className="h-screen sm:w-screen lg:w-[393px] md:w-[393px] xl:w-[393px] relative overflow-hidden">
        <div className="flex-col justify-center items-center h-full overflow-y-auto mb-10">
          <div className="bg-[#FCFCFC] mx-6 rounded-[18px] my-3 pb-2 relative">
            <div className="relative">
              <div className="h-[114px] w-fill mx-4 pt-3 relative">
                <Image
                  //   src="/profile-banner.svg"
                  src="/banner.svg"
                  alt="profile banner"
                  width={1000}
                  height={1000}
                  className="rounded-xl w-full"
                />
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/profile-pic.svg"
                    alt="profile picture"
                    width={94}
                    height={94}
                    className="rounded-full border-4 border-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex-col justify-center text-center mt-[72px]">
              <p className=" text-xl text-[#0B3C5D] font-semibold">
                Josiah Farrel Suwito
              </p>
              <p className="text-base text-black font-normal">iOS Developer</p>
              <p className=" text-xs text-[#8B888F] font-normal">
                Apple Developer Academy @ UC
              </p>
              {/* <p className="mt-2 text-base text-[#91919F] font-normal">
                Surabaya
              </p> */}
              <hr className="my-3 border-[#E5E5E5] mx-8" />
              <p className="text-center font-normal text-black text-xs mx-4">
                Josiah is a motivated and adaptable T-Shaped final year
                undergraduate student at Universitas Gadjah Mada, specializing
                in Computer Science. With a strong foundation in Mobile App
                Development, Product Management, and UI/UX, Josiah possesses a
                diverse skill set. Josiah&apos;s proactive and inquisitive
                nature drives them to continuously seek new learning
                opportunities and stay up to date with the latest industry
                trends.{" "}
              </p>
              <div className="my-5">
                <a
                  className="bg-[#2E7CF6] text-white text-base px-8 py-3 rounded-xl"
                  href="/josiah.vcf"
                  download="josiah.vcf"
                >
                  Save Contact
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-x-4 gap-y-4 bg-[#FCFCFC] mx-6 rounded-[18px] py-3 px-3">
            {/* email */}
            <a href="mailto:josiahfrlswt1@gmail.com" className="block">
              <div className="flex flex-col justify-around items-center">
                <div className="w-[64px] h-[64px]">
                  <Image
                    src="/email.svg"
                    alt="email logo"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className=" text-xs text-[#8B888F] text-center font-medium  mt-1">
                  Email
                </p>
              </div>
            </a>

            {/* whatsapp */}
            <a href="https://wa.me/6281234264440" className="block">
              <div className="flex flex-col justify-around items-center">
                <div className="w-[64px] h-[64px]">
                  <Image
                    src="/whatsapp.svg"
                    alt="whatsapp logo"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className=" text-xs text-[#8B888F] text-center font-medium  mt-1">
                  WhatsApp
                </p>
              </div>
            </a>

            {/* linkedin */}
            <a href="https://www.linkedin.com/in/josiahfs/" className="block">
              <div className="flex flex-col justify-around items-center">
                <div className="w-[64px] h-[64px]">
                  <Image
                    src="/linkedin.svg"
                    alt="linkedin logo"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className=" text-xs text-[#8B888F] text-center font-medium  mt-1">
                  Linkedin
                </p>
              </div>
            </a>

            {/* instagram */}
            <a href="https://www.instagram.com/jfarrel.s" className="block">
              <div className="flex flex-col justify-around items-center">
                <div className="w-[64px] h-[64px]">
                  <Image
                    src="/instagram.svg"
                    alt="instagram logo"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className=" text-xs text-[#8B888F] text-center font-medium  mt-1">
                  Instagram
                </p>
              </div>
            </a>

            {/* github */}
            <a href="https://github.com/josiahfs" className="block">
              <div className="flex flex-col justify-around items-center">
                <div className="w-[64px] h-[64px]">
                  <Image
                    src="/github.svg"
                    alt="github logo"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className=" text-xs text-[#8B888F] text-center font-medium  mt-1">
                  Github
                </p>
              </div>
            </a>
          </div>
          <div className="mb-10">
            {/* portfolio */}
            <div className="flex flex-col mx-6 bg-[#FCFCFC] rounded-[18px] my-3 py-3">
              <a href="https://josiah-portfolio.vercel.app" className="block">
                <div className="flex flex-col">
                  <div className="">
                    <p className="text-[10px] text-[#8B888F] font-medium px-3">
                      LINK TO PORTFOLIO
                    </p>
                    <p className="text-base text-black font-reguler px-3">
                      Check Out My Previous Work!
                    </p>
                  </div>
                  <div className="w-full h-[240px] pt-2 px-3 relative">
                    <iframe
                      src="https://josiah-portfolio.vercel.app"
                      title="Portfolio Website"
                      width="100%"
                      height="100%"
                      className="border-0 rounded-xl pointer-events-none"
                      allowFullScreen
                    />
                    {/* Transparent overlay to capture clicks */}
                    <div className="absolute top-0 left-0 w-full h-full"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
