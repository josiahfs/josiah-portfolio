import Head from "next/head";
import Hero from "./components/HeroSection";
import About from "./components/AboutSection";
import Gallery from "./components/ProjectSection";
import Contact from "./components/ContactSection";

export const metadata = {
  title: "Josiah's Portfolio",
  description: "This is the portfolio website of Josiah Farrel.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0B] overflow-scroll no-scrollbar">
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
}
