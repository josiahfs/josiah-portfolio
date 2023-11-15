import Head from "next/head";
import Hero from "./components/HeroSection";
import About from "./components/AboutSection";
import Gallery from "./components/ProjectSection";
import Contact from "./components/ContactSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Josiah's Portfolio",
  description: "This is the portfolio website of Josiah Farrel.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0B] overflow-hidden">
      <div className="z-1 absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-600 px-4 py-2 text-white">
        This web is on progress, for more information contact me through email
        or linkedin
      </div>
      <header className="z-10 fixed right-0">
        <Navbar />
      </header>
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
