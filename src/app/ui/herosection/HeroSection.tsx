import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <section
      className="relative h-[809px] bg-cover bg-top"
      style={{ backgroundImage: `url(/assets/herocover.webp)` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <h2
        data-aos="fade-up"
        className="text-white text-5xl font-[500] absolute top-[318px] left-[88px] leading-[66px]"
      >
        Explore Our Expertly Designed Scaffolding
        <br /> Solutions. Built for Strength and Safety
      </h2>
      <p
        data-aos="fade-up"
        className="text-white text-[22px]  absolute top-[482px] left-[88px] leading-[33px] max-w-[521px]"
      >
        Reliable, safe, and professional delivered exceptional scaffolding
        solutions that perfectly supported our project needs.
      </p>
      <Link
        data-aos="fade-up"
        className="text-white text-[22px]   absolute top-[629px] left-[88px] leading-[33px] max-w-[521px] ring-1 ring-white rounded-3xl px-8 py-1"
        href="/"
      >
        Get A Quot
      </Link>
    </section>
  );
}

export default HeroSection;
