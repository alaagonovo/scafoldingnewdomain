import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <section
      className="relative h-[909px] lg:h-[809px] bg-cover bg-top overflow-hidden"
      style={{ backgroundImage: `url(/assets/herocover.webp)` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="flex flex-col absolute w-[92%]  top-28 md:top-[318px]  md:max-w-max  sm:max-w-[500px] lg:left-[88px] left-4 gap-8">
        <h2
          data-aos="fade-up"
          data-aos-delay="450"
          className="text-white text-[44px] lg:text-5xl relative  leading-[66px] lg:leading-[66px]"
        >
          Explore Our Expertly Designed Scaffolding
          <br /> Solutions. Built for Strength and Safety
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-white text-[22px]   leading-[33px] lg:max-w-[521px]"
        >
          Reliable, safe, and professional delivered exceptional scaffolding
          solutions that perfectly supported our project needs.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="750"
          data-aos-offset="0"
          className="mt-4"
        >
          <Link
            style={{ transition: "all 300ms" }}
            className="text-white text-[22px] inline-block w-fit ring-1 ring-white rounded-[68px] px-12 py-3 hover:bg-btnbg hover:ring-0"
            href="/getaquote"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
