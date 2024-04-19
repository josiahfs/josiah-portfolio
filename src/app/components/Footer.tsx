import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="h-[45vh] lg:px-[280px] lg:py-[60px] flex-col items-center">
        <div className="flex h-full w-full">
          <div className="w-full lg:w-2/6 flex flex-col justify-center space-y-4 items-center">
            <Image
              src="/footer.svg"
              width={100}
              height={100}
              alt={"Footer Image"}
            />
            <div className="h-[30px] lg:hidden"></div>
            <div className="flex w-1/2  justify-evenly">
              <a href="https://www.linkedin.com/in/josiahfs">
                <FaLinkedin
                  size={24}
                  className="text-5xl text-[#ECECEC] hover:text-[#C19C63] transition-all duration-300 "
                />
              </a>
              <a href="https://github.com/josiahfs">
                <FaGithub
                  size={24}
                  className="text-5xl text-[#ECECEC] hover:text-[#C19C63] transition-all duration-300 "
                />
              </a>
              <a href="https://www.instagram.com/jfarrel.s">
                <FaInstagram
                  size={24}
                  className="text-5xl text-[#ECECEC] hover:text-[#C19C63] transition-all duration-300 "
                />
              </a>
            </div>
            <a href="mailto:josiahfrlswt1@gmail.com">
              <p className="text-sm text-[#ECECEC] hover:text-[#C19C63] transition-all duration-300 ">
                josiahfrlswt1@gmail.com
              </p>
            </a>
          </div>

          <div className="hidden lg:flex w-full justify-start space-x-24 items-start  py-10">
            <div className="flex justify-start items-start h-min">
              <div
                className="text-lg uppercase font-semibold text-[#ECECEC] block rotate-180"
                style={{ writingMode: "vertical-rl" }}
              >
                Projects
              </div>
              <nav className="">
                <ul className="list-none">
                  <li className="overflow-hidden relative">
                    <a
                      href="javascript:void(0)"
                      className="text-sm text-[#B1B0B0]  hover:text-[#C19C63] transition-all duration-300 font-medium inline-block leading-tight  no-underline relative"
                    >
                      <span data-clip="Home" className="block relative ">
                        Calico
                      </span>
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      href="javascript:void(0)"
                      className="text-sm  hover:text-[#C19C63] transition-all duration-300 font-medium inline-block leading-tight text-[#B1B0B0] no-underline relative"
                    >
                      <span data-clip="About" className="relative block">
                        Dental Hero
                      </span>
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      href="javascript:void(0)"
                      className="text-sm  hover:text-[#C19C63] transition-all duration-300 font-medium inline-block leading-tight text-[#B1B0B0] no-underline relative"
                    >
                      <span data-clip="Work" className="relative block">
                        Pemira Himakom
                      </span>
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      href="javascript:void(0)"
                      className="text-sm  hover:text-[#C19C63] transition-all duration-300 font-medium inline-block leading-tight  text-[#B1B0B0] no-underline relative"
                    >
                      <span data-clip="Contact" className="relative block">
                        Himakom&apos;s Website
                      </span>
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      href="javascript:void(0)"
                      className="text-sm  hover:text-[#C19C63] transition-all duration-300 font-medium inline-block leading-tight  text-[#B1B0B0] no-underline relative"
                    >
                      <span data-clip="Contact" className="relative block">
                        Project 5
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex justify-start items-start h-min">
              <div
                className="text-lg uppercase font-semibold text-[#ECECEC] block rotate-180"
                style={{ writingMode: "vertical-rl" }}
              >
                Skills
              </div>
              <nav className="">
                <ul className="list-none">
                  <li className="overflow-hidden relative">
                    <a
                      href="javascript:void(0)"
                      className="text-sm text-[#B1B0B0]  hover:text-[#C19C63] transition-all duration-300 font-medium inline-block leading-tight  no-underline relative"
                    >
                      <span data-clip="Home" className="block relative ">
                        Flutter
                      </span>
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      href="javascript:void(0)"
                      className="text-sm  hover:text-[#C19C63] transition-all duration-300 font-medium inline-block leading-tight text-[#B1B0B0] no-underline relative"
                    >
                      <span data-clip="About" className="relative block">
                        Project Management
                      </span>
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      href="javascript:void(0)"
                      className="text-sm  hover:text-[#C19C63] transition-all duration-300 font-medium inline-block leading-tight text-[#B1B0B0] no-underline relative"
                    >
                      <span data-clip="Work" className="relative block">
                        SwiftUI
                      </span>
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      href="javascript:void(0)"
                      className="text-sm  hover:text-[#C19C63] transition-all duration-300 font-medium inline-block leading-tight  text-[#B1B0B0] no-underline relative"
                    >
                      <span data-clip="Contact" className="relative block">
                        NextJS
                      </span>
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      href="javascript:void(0)"
                      className="text-sm  hover:text-[#C19C63] transition-all duration-300 font-medium inline-block leading-tight  text-[#B1B0B0] no-underline relative"
                    >
                      <span data-clip="Contact" className="relative block">
                        Team Management
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex justify-end items-center h-min">
              <div
                className="text-lg uppercase font-semibold text-[#ECECEC] block rotate-180"
                style={{ writingMode: "vertical-rl" }}
              >
                Navigate
              </div>
              <nav className="">
                <ul className="list-none">
                  <li className="overflow-hidden relative">
                    <a
                      href="javascript:void(0)"
                      className="text-sm text-[#B1B0B0]  hover:text-[#C19C63] transition-all duration-300 font-medium inline-block leading-tight  no-underline relative"
                    >
                      <span data-clip="Home" className="block relative ">
                        Home
                      </span>
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      href="javascript:void(0)"
                      className="text-sm  hover:text-[#C19C63] transition-all duration-300 font-medium inline-block leading-tight text-[#B1B0B0] no-underline relative"
                    >
                      <span data-clip="About" className="relative block">
                        About
                      </span>
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      href="javascript:void(0)"
                      className="text-sm  hover:text-[#C19C63] transition-all duration-300 font-medium inline-block leading-tight text-[#B1B0B0] no-underline relative"
                    >
                      <span data-clip="Work" className="relative block">
                        Work
                      </span>
                    </a>
                  </li>
                  <li className="overflow-hidden">
                    <a
                      href="javascript:void(0)"
                      className="text-sm  hover:text-[#C19C63] transition-all duration-300 font-medium inline-block leading-tight  text-[#B1B0B0] no-underline relative"
                    >
                      <span data-clip="Contact" className="relative block">
                        Contact
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="text-sm text-[#ECECEC] text-center hover:text-[#C19C63] transition-all duration-300 ">
          © 2024 Josiah Farrels Suwito. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
