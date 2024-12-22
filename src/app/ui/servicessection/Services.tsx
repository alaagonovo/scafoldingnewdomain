import Link from "next/link";
import React from "react";
import ServiceCard from "./servicecard/ServiceCard";
import services from "@/app/data/services";

function Services() {
  return (
    <section className="overflow-hidden mb-12">
      <div className="mx-auto w-[92%] md:w-[88%]">
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-[3rem] font-semibold mb-[14px] md:leading-[72px]"
        >
          Scaffolding Services
        </h1>
        <div className="flex justify-between flex-wrap gap-8 ">
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-[870px] text-sm md:text-[18px] font-medium md:leading-7"
          >
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click &quot;View Details&quot; for more
            information.
          </p>
          <Link
            data-aos="fade-left"
            data-aos-delay="300"
            className="text-white text-[18px] md:text-[22px] inline-block ring-1 ring-white rounded-[68px] bg-btnbg px-7 py-3 md:px-12 md:py-3"
            href="/getaquote"
          >
            Get a Quote
          </Link>
        </div>
        <div className="grid mt-16 mx-auto   grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard
              serviceDetails={service}
              key={index}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
