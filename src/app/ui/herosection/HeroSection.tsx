import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <section
      className="relative h-[909px] lg:h-[809px] bg-cover bg-top overflow-hidden"
      style={{ backgroundImage: `url(/assets/herocover.webp)` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <h2
        data-aos="fade-up"
        data-aos-delay="600"
        className="text-white text-5xl sm:max-w-[500px] md:max-w-max  font-[500] lg:absolute top-28 md:top-[318px] lg:left-[88px] w-[94%] relative mx-auto   leading-[66px]"
      >
        Explore Our Expertly Designed Scaffolding
        <br /> Solutions. Built for Strength and Safety
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="900"
        className="text-white text-[22px]  lg:absolute md:top-[390px] lg:top-[500px]  w-[94%] relative mx-auto lg:left-[88px] top-[150px] leading-[33px] lg:max-w-[521px] sm:max-w-[500px] md:max-w-max"
      >
        Reliable, safe, and professional delivered exceptional scaffolding
        solutions that perfectly supported our project needs.
      </p>
      <div
        data-aos="fade-up"
        data-aos-delay="1200"
        className="block w-[94%] mx-auto lg:inline-block lg:absolute md:top-[450px] lg:top-[629px] lg:left-[88px] relative top-[200px]"
      >
        <Link
          data-aos="fade-up"
          data-aos-delay="1500"
          style={{ transition: "all 300ms" }}
          className="text-white text-[22px]     ring-1 ring-white rounded-[68px] px-12 py-3 hover:bg-btnbg hover:ring-0"
          href="/"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
