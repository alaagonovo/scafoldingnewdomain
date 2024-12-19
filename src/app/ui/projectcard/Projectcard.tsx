import Image from "next/image";
import React from "react";
interface IPro {
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
}
function Projectcard({ pro }: { pro: IPro }) {
  return (
    <div
      data-aos="zoom-in-out"
      data-aos-delay="400"
      className="shadow-procardshade w-[384px] rounded-lg p-6 bg-white z-10 h-fit"
    >
      <div className="relative w-[336px] h-[240px] rounded-lg overflow-hidden">
        <Image src={pro.image} alt="image project" fill objectFit="cover" />
      </div>
      <p className="text-sm font-semibold mt-6 mb-2 text-lightBlue">
        {pro.category}
      </p>
      <h1 className="text-2xl text-btnbg leading-8 font-semibold mb-2">
        {pro.title}
      </h1>
      <p className="text-base text-linksColor">{pro.description}</p>
      <p className="text-sm text-linksColor mt-4">{pro.date}</p>
    </div>
  );
}

export default Projectcard;
