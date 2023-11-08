import Head from "next/head";
import Hero from "./components/HeroSection";
import About from "./components/AboutSection";
import Gallery from "./components/ProjectSection";
import Contact from "./components/ContactSection";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Josiah's Portfolio",
  description: "This is the portfolio website of Josiah Farrel.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0B] overflow-hidden">
      <header className="z-10 fixed right-0">
        <Navbar />
      </header>
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
}
