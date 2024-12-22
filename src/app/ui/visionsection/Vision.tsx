import Image from "next/image";
import Link from "next/link";
import React from "react";

function Vision() {
  return (
    <section className="h-auto lg:h-[809px] py-20 bg-btnbg ">
      <div className="mx-auto w-[92%] md:w-[88%] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        <div
          data-aos="fade-right"
          className="h-[333px] md:h-[500px] lg:h-[650px] relative border-l-lightBlue border-l-[20px] border-r-[20px] md:border-r-[40px] md:border-l-[40px]  lg:border-l-[60px]  lg:border-r-[60px] border-r-white "
        >
          <Image
            src="/assets/vission.webp"
            alt="vision image"
            fill
            unoptimized
          />
        </div>
        <div className="flex flex-col items-start">
          <div
            data-aos="fade-up"
            className="w-[334px] h-[47px]  mb-10 lg:hidden"
          >
            <Image src="/svgs/vissionlogo.svg" alt="logo vission" fill />
          </div>
          <div
            data-aos="fade-up"
            className="w-[417px] h-[50px]  mb-10 hidden lg:block"
          >
            <Image src="/svgs/vissionlogolap.svg" alt="logo vission" fill />
          </div>
          <div className=" w-full md:w-[466px]">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-white font-semibold text-[61px] md:text-[88px] leading-[64px] md:leading-[93px]"
            >
              Let’s make your vision come to life
            </h1>
            <Link
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-white text-[18px] mt-16 md:text-[22px] inline-block ring-1 ring-white rounded-[68px] px-7 py-3 md:px-12 md:py-3"
              href="/"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
