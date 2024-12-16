import Link from "next/link";
import React from "react";
import ServiceCard from "./servicecard/ServiceCard";
import services from "@/app/data/services";

function Services() {
  return (
    <section className="overflow-hidden mb-12">
      <div className="main_wrapper">
        <h1 data-aos="fade-up" className="text-[3rem] font-semibold mb-8">
          Scaffolding Services
        </h1>
        <div className="flex justify-between">
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-[880px]  text-[18px] font-medium"
          >
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click &quot;View Details&quot; for more
            information.
          </p>
          <Link
            data-aos="fade-left"
            data-aos-delay="300"
            className="text-white bg-btnbg text-[22px] inline-block ring-1 ring-white rounded-[68px] px-12 py-3"
            href="/"
          >
            Get a Quote
          </Link>
        </div>
        <div className="grid mt-16 mx-auto grid-cols-3 gap-8">
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
