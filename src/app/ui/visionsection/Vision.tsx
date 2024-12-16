import Image from "next/image";
import Link from "next/link";
import React from "react";

function Vision() {
  return (
    <section className=" h-[809px] py-20 bg-btnbg ">
      <div className="main_wrapper grid grid-cols-2 items-center gap-4">
        <div
          data-aos="fade-right"
          className="h-[650px] relative border-l-lightBlue border-l-[60px]  border-r-[60px] border-r-white "
        >
          <Image
            src="/assets/vission.webp"
            alt="vision image"
            fill
            unoptimized
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p
            data-aos="fade-up"
            className="text-[34px] text-white font-semibold mb-10"
          >
            F2F Scaffolding
          </p>
          <div className=" w-[466px]">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-white font-semibold text-[88px] leading-[93px]"
            >
              Let’s make your vision come to life
            </h1>
            <Link
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-white text-[22px] inline-block ring-1 ring-white rounded-[68px] px-12 py-4 mt-16 mr-auto"
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
