import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./responsive.module.css";
function AboutUs() {
  return (
    <section
      className={`${styles.grid_Responsive} main_wrapper grid grid-cols-2 pt-16 pb-[85px] overflow-hidden`}
    >
      <div>
        <h1
          className="text-5xl font-semibold ml-4 lg:ml-0 mb-10"
          data-aos="fade-up"
        >
          About Us
        </h1>
        <div className={`${styles.image_responsive} relative hidden`}>
          <Image
            src="/assets/aboutuss.webp"
            alt="about us Image"
            fill
            objectPosition="center"
            objectFit="cover"
            className="rounded-xl lg:rounded-lg"
            data-aos="zoom-in-out"
            data-aos-delay="400"
            unoptimized={true}
          />
        </div>
        <p
          className={`${styles.paragraph} text-[1.375rem] leading-[33px] w-[609px] font-medium my-6`}
          data-aos="fade-up"
        >
          Face2Face was founded on a vision imagined in London nearly two
          decades ago. From our early beginnings in Europe, we set out to
          redefine the scaffolding industry with an unwavering commitment to
          innovation, safety, and sustainability.
        </p>
        <p
          className={`${styles.paragraph} text-[1.375rem] leading-[33px] w-[609px] font-medium my-6`}
          data-aos="fade-up"
        >
          Safety has always been our cornerstone. Over 18 years, we have proudly
          maintained a 0% accident rate thanks to our meticulous planning and
          rigorous procedures, from assembly to dismantling.
        </p>
        <p
          className={`${styles.paragraph} text-[1.375rem] leading-[33px] w-[609px] font-medium my-6`}
          data-aos="fade-up"
        >
          Today, in 2025, we stand as a testament to the power of consistent
          innovation and craftsmanship. Face2Face is more than a scaffolding
          company—we are a promise to deliver solutions that embody reliability
          and sustainability.
        </p>
        <div
          data-aos="fade-up"
          className={`${styles.btn_link} inline-block  mt-16`}
        >
          <Link
            style={{ transition: "all 300ms" }}
            className="text-white bg-btnbg text-[18px] rounded-[37px] px-14 py-[18px] hover:bg-btnbg btn_shadow"
            href="/getaquote"
          >
            Get a Quote
          </Link>
        </div>
      </div>
      <div
        style={{ marginInlineStart: "calc(100% - 571px)" }}
        className={`${styles.large_image} relative h-[697px] max-w-[571px]`}
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
