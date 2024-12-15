import HeroSection from "./ui/herosection/HeroSection";
import AboutUs from "./ui/aboutussection/AboutUs";
import CompletedPro from "./ui/completedProjsection/CompletedPro";
import StatisticsSection from "./ui/statisticssection/StatisticsSection";
// import Reda from "./ui/reda/Reda";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <CompletedPro />
      <StatisticsSection />
      {/* <Reda /> */}
    </>
  );
}
