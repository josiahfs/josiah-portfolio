import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../components/Anim";
import Link from "./link";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="h-screen bg-[#0B0B0B] z-0 fixed right-0 top-0 text-white">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="h-full w-1/4 box-border p-16 flex flex-col justify-between"
        >
          <div className="w-[100px]">
            <div className="text-sm uppercase text-white border-b-1 border-white mb-40">
              <p>Navigation</p>
            </div>
            {navItems.map((data, index) => (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            ))}
          </div>
          <div className="footer flex justify-between text-sm gap-40">
            <a>Github</a>
            <a>Instagram</a>
            <a>Dribble</a>
            <a>LinkedIn</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
