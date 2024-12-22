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
          className={`${styles.paragraph} text-[1.375rem] leading-[33px] w-[520px] font-medium my-6`}
          data-aos="fade-up"
        >
          Our experience with Estatein was outstanding. Their team&apos;s
          dedication and professionalism made finding our dream home a breeze.
          Highly recommended!
        </p>
        <p
          className={`${styles.paragraph} text-[1.375rem] leading-[33px] w-[520px] font-medium my-6`}
          data-aos="fade-up"
        >
          Our experience with Estatein was outstanding. Their team&apos;s
          dedication and professionalism made finding our dream home a breeze.
          Highly recommended!
        </p>
        <p
          className={`${styles.paragraph} text-[1.375rem] leading-[33px] w-[520px] font-medium my-6`}
          data-aos="fade-up"
        >
          Our experience with Estatein was outstanding. Their team&apos;s
          dedication and professionalism made finding our dream home a breeze.
          Highly recommended!
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
        className={`${styles.large_image} relative h-[607px] max-w-[571px]`}
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
