import HeroSection from "./ui/herosection/HeroSection";
import AboutUs from "./ui/aboutussection/AboutUs";
import CompletedPro from "./ui/completedProjsection/CompletedPro";
import StatisticsSection from "./ui/statisticssection/StatisticsSection";
import Services from "./ui/servicessection/Services";
import Vision from "./ui/visionsection/Vision";
import ReviewsSection from "./ui/reviewssection/ReviewsSection";
import Faqs from "./ui/faqssection/Faqs";
// import Reda from "./ui/reda/Reda";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <CompletedPro />
      <StatisticsSection />
      <Services />
      <Vision />
      <ReviewsSection />
      <Faqs />
    </>
  );
}
