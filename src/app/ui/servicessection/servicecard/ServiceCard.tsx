import Image from "next/image";
import React from "react";
interface IService {
  image: string;
  title: string;
  bio: string;
}
function ServiceCard({
  serviceDetails,
  index,
}: {
  serviceDetails: IService;
  index: number;
}) {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay={`${300 * index}`}
      className="flex flex-col justify-center items-center  border border-white rounded-xl "
    >
      <div className="relative w-[100%] h-[374px] mb-6">
        <Image
          src={serviceDetails.image}
          alt="project image"
          fill
          className="rounded-lg object-cover"
          style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
        />
      </div>
      <h3 className="text-[22px] font-semibold text-btnbg text-left w-full mb-2 max-h-[33px] overflow-hidden">
        {serviceDetails.title}
      </h3>
      <p className="text-btnbg text-[18px]  max-h-[81px] overflow-hidden">
        {serviceDetails.bio}
      </p>
    </div>
  );
}

export default ServiceCard;
