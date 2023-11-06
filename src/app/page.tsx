import Head from "next/head";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Josiah's Portfolio",
  description: "This is the portfolio website of Josiah Farrel.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0B] overflow-scroll no-scrollbar">
      {/* <Head>
        <title>Josiah&apos;s Portfolio</title>
      </Head> */}
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
