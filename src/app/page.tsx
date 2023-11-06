import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0B]">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
