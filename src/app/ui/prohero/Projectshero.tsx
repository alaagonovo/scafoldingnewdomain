import Link from "next/link";
import React from "react";

function Projectshero() {
  return (
    <section className="h-[688px] bg-btnbg relative">
      <div className="w-[92%] lg:w-[960px] top-32 lg:top-44 left-1/2 -translate-x-1/2  lg:mx-auto text-center text-white absolute">
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-lg font-semibold leading-6"
        >
          Our Projects
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-5xl font-semibold leading-[60px] mt-3 mb-6"
        >
          Showcasing Our Scaffolding Expertise
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="max-w-[768px] mx-auto text-xl font-light leading-7 mb-10"
        >
          Explore our portfolio of innovative scaffolding solutions, supporting
          projects of all sizes in construction, maintenance, and restoration.
        </p>
        <Link
          data-aos="fade-up"
          data-aos-delay="700"
          className="text-white text-[18px]  inline-block ring-1 ring-white rounded-[68px] px-7 py-3 "
          href="/getintouch"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}

export default Projectshero;
