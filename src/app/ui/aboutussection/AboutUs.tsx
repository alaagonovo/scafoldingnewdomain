import Image from "next/image";
import Link from "next/link";
import React from "react";

function AboutUs() {
  return (
    <section className="main_wrapper grid grid-cols-2 py-20 overflow-hidden">
      <div>
        <h1
          className="text-5xl font-semibold mb-14"
          data-aos="fade-up"
          // data-aos-delay="300"
        >
          About Us
        </h1>
        <p
          className="text-[1.375rem] leading-[33px] w-[520px] font-medium my-6"
          data-aos="fade-up"
          // data-aos-delay="600"
        >
          Our experience with Estatein was outstanding. Their team&apos;s
          dedication and professionalism made finding our dream home a breeze.
          Highly recommended!
        </p>
        <p
          className="text-[1.375rem] leading-[33px] w-[520px] font-medium my-6"
          data-aos="fade-up"
          // data-aos-delay="900"
        >
          Our experience with Estatein was outstanding. Their team&apos;s
          dedication and professionalism made finding our dream home a breeze.
          Highly recommended!
        </p>
        <p
          className="text-[1.375rem] leading-[33px] w-[520px] font-medium my-6"
          data-aos="fade-up"
          // data-aos-delay="900"
        >
          Our experience with Estatein was outstanding. Their team&apos;s
          dedication and professionalism made finding our dream home a breeze.
          Highly recommended!
        </p>
        <div
          data-aos="fade-up"
          // data-aos-delay="1500"
          className="inline-block  mt-16"
        >
          <Link
            style={{ transition: "all 300ms" }}
            className="text-white bg-btnbg text-[18px] rounded-[37px] px-14 py-[18px] hover:bg-btnbg btn_shadow"
            href="/"
          >
            Get a Quote
          </Link>
        </div>
      </div>
      <div
        style={{ marginInlineStart: "calc(100% - 571px);" }}
        className="relative h-[607px] max-w-[571px]"
      >
        <Image
          src="/assets/aboutuss.webp"
          alt="about us Image"
          fill
          objectPosition="bottom"
          objectFit="cover"
          className="rounded-lg"
          data-aos="fade-left"
          data-aos-delay="500"
        />
      </div>
    </section>
  );
}

export default AboutUs;
