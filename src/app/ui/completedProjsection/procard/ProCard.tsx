import Image from "next/image";
// import Link from "next/link";
import React from "react";

interface IProject {
  img: string;
  name: string;
  bio: string;
}

function ProCard({
  projectDetail,
  index,
}: {
  projectDetail: IProject;
  index: number;
}) {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay={`${300 * index}`}
      className="flex flex-col justify-center items-center p-7 md:p-10  border border-white rounded-xl "
    >
      <div className="relative w-[100%] h-[318px] mb-6">
        <Image
          src={projectDetail.img}
          alt="project image"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <h3 className="text-[22px] font-medium text-white text-left w-full mb-2  max-h-[33px] overflow-hidden">
        {projectDetail.name}
      </h3>
      <p className="text-white text-[18px] font-light max-h-[54px] overflow-hidden w-full">
        {projectDetail.bio}
      </p>
      {/* <Link
        href="/"
        className="text-white w-full text-left  underline decoration-1"
      >
        Read More
      </Link> */}
    </div>
  );
}

export default ProCard;
