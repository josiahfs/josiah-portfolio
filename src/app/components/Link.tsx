import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../components/Anim";

export default function Index({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="bg-white rounded-full absolute left-[-30px]"
      ></motion.div>
      <Link
        href={href}
        className="text-[40px] font-medium hover:text-[#C19C63] transition-transform"
      >
        {title}
      </Link>
    </motion.div>
  );
}
