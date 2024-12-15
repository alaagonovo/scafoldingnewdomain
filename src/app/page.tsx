import HeroSection from "./ui/herosection/HeroSection";
import AboutUs from "./ui/aboutussection/AboutUs";
import CompletedPro from "./ui/completedProjsection/CompletedPro";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <CompletedPro />
    </>
  );
}
