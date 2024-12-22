import projects from "@/app/data/projects";
import Link from "next/link";
import React from "react";
import ProCard from "./procard/ProCard";

function CompletedPro() {
  return (
    <section className="py-16 bg-btnbg overflow-x-hidden">
      <div className="mx-auto w-[92%] md:w-[88%]">
        <h1
          data-aos="fade-up"
          className="text-white text-3xl md:text-[3rem] font-semibold mb-[14px]"
        >
          Completed Projects
        </h1>
        <div className="flex justify-between flex-wrap gap-8">
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-[870px] text-white text-sm md:text-[18px] md:leading-7"
          >
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click &quot;View Details&quot; for more
            information.
          </p>
          <Link
            data-aos="fade-left"
            data-aos-delay="300"
            className="text-white text-[18px] md:text-[22px] inline-block ring-1 ring-white rounded-[68px] px-7 py-3 md:px-12 md:py-3"
            href="/projects"
          >
            See all Projects
          </Link>
        </div>
        <div className="grid mt-16 mx-auto grid-cols-1 lg:grid-cols-3  gap-8">
          {projects.map((pro, index) => (
            <ProCard projectDetail={pro} key={index} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompletedPro;
