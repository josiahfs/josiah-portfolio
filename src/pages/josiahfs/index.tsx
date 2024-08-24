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
    <main className="flex min-h-screen flex-col bg-[#FCFCFC] overflow-hidden items-center md:shadow-lg lg:shadow-lg">
      <section className="h-screen sm:w-screen lg:w-[393px] md:w-[393px] xl:w-[393px] relative overflow-hidden">
        <div className="flex-col justify-center items-center h-full overflow-y-auto mb-10">
          <div className="relative">
            <div className="h-[168px] w-full">
              <Image
                src="/profile-banner.svg"
                alt="profile banner"
                width={1000}
                height={1000}
              />
            </div>
            <div className="h-[160px] w-[160px] absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 bottom-0">
              <Image
                src="/profile-pic.svg"
                alt="profile picture"
                width={1000}
                height={1000}
                className="rounded-full border-4 border-white"
              />
            </div>
          </div>
          <div className="flex-col justify-center text-center mt-[96px]">
            <p className=" text-2xl text-[#0B3C5D] font-bold">
              Josiah Farrel Suwito
            </p>
            <p className=" text-lg text-[#91919F] font-normal">iOS Developer</p>
            <p className=" text-lg text-[#91919F] font-normal">
              Apple Developer Academy @ UC
            </p>
            <p className="mt-2 text-base text-[#91919F] font-normal">
              Surabaya
            </p>
            <div className="mt-10">
              <a
                className="bg-[#5FC9F8] text-white text-2xl px-8 py-4 rounded-[60px]"
                href="/josiah.vcf"
                download="josiah.vcf"
              >
                Save Contact
              </a>
            </div>
          </div>
          {/* <div className="flex-col mt-[40px]  px-[24px]">
            <p className=" text-xl text-[#0B3C5D] font-bold">Social Media</p>
          </div> */}
          <div className="grid grid-cols-3 gap-4 mx-6 mt-[40px]">
            {/* email */}
            <a href="mailto:josiahfrlswt1@gmail.com" className="block">
              <div className="flex flex-col justify-around items-center mt-2 w-[100px] h-[100px] bg-[#EEF2FA] rounded-xl">
                <div className="w-[65px] h-[65px] mt-2">
                  <Image
                    src="/email.svg"
                    alt="email logo"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className=" text-sm text-[#0B3C5D] text-center font-reguler">
                  Email
                </p>
              </div>
            </a>

            {/* whatsapp */}
            <a href="https://wa.me/6281234264440" className="block">
              <div className="flex flex-col justify-around items-center mt-2 w-[100px] h-[100px] bg-[#EEF2FA] rounded-xl">
                <div className="w-[65px] h-[65px]">
                  <Image
                    src="/whatsapp.svg"
                    alt="whatsapp logo"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className=" text-sm text-[#0B3C5D] text-center font-reguler">
                  WhatsApp
                </p>
              </div>
            </a>

            {/* linkedin */}
            <a href="https://www.linkedin.com/in/josiahfs/" className="block">
              <div className="flex flex-col justify-around items-center mt-2 w-[100px] h-[100px] bg-[#EEF2FA] rounded-xl">
                <div className="w-[65px] h-[65px]">
                  <Image
                    src="/linkedin.svg"
                    alt="linkedin logo"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className=" text-sm text-[#0B3C5D] text-center font-reguler">
                  Linkedin
                </p>
              </div>
            </a>

            {/* instagram */}
            <a href="https://www.instagram.com/jfarrel.s" className="block">
              <div className="flex flex-col justify-around items-center mt-2 w-[100px] h-[100px] bg-[#EEF2FA] rounded-xl">
                <div className="w-[65px] h-[65px]">
                  <Image
                    src="/instagram.svg"
                    alt="instagram logo"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className=" text-sm text-[#0B3C5D] text-center font-reguler">
                  Instagram
                </p>
              </div>
            </a>

            {/* github */}
            <a href="https://github.com/josiahfs" className="block">
              <div className="flex flex-col justify-around items-center mt-2 w-[100px] h-[100px] bg-[#EEF2FA] rounded-xl">
                <div className="w-[65px] h-[65px]">
                  <Image
                    src="/github.svg"
                    alt="github logo"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className=" text-sm text-[#0B3C5D] text-center font-reguler">
                  Github
                </p>
              </div>
            </a>
          </div>
          <div className="mb-10">
            {/* <div className="flex-col mt-[40px]  px-[24px]">
              <p className=" text-xl text-[#0B3C5D] font-bold">Links</p>
            </div> */}
            {/* portfolio */}
            {/* <div className="flex flex-col mx-6"> */}
            <div className="flex flex-col mx-6 mt-6">
              <a href="https://josiah-portfolio.vercel.app" className="block">
                <div className="flex flex-col justify-evenly mt-2 w-fill bg-[#EEF2FA] rounded-xl relative cursor-pointer">
                  <p className=" text-base text-[#0B3C5D] font-reguler px-4 py-2">
                    Portfolio Website
                  </p>
                  <div className="w-full h-[240px] py-2 px-4 relative">
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
