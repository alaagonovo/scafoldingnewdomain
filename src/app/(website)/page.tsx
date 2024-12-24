import React from "react";
import HeroSection from "../ui/herosection/HeroSection";
const AboutUs = React.lazy(() => import("../ui/aboutussection/AboutUs"));
const CompletedPro = React.lazy(
  () => import("../ui/completedProjsection/CompletedPro")
);
const StatisticsSection = React.lazy(
  () => import("../ui/statisticssection/StatisticsSection")
);
const Services = React.lazy(() => import("../ui/servicessection/Services"));
const Vision = React.lazy(() => import("../ui/visionsection/Vision"));
const ReviewsSection = React.lazy(
  () => import("../ui/reviewssection/ReviewsSection")
);
const Faqs = React.lazy(() => import("../ui/faqssection/Faqs"));

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
