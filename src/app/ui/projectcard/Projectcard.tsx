"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
interface IPro {
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
}
function Projectcard({ pro, index }: { pro: IPro; index: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check screen width and remove AOS only for this card
    if (window.innerWidth <= 905 && cardRef.current && index !== 0) {
      cardRef.current.removeAttribute("data-aos");
      cardRef.current.removeAttribute("data-aos-delay"); // Optional: Remove delay
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      data-aos="zoom-in-out"
      data-aos-delay="400"
      className="shadow-procardshade box-border w-[362px] sm:w-[384px] rounded-lg p-6 pb-8 bg-white z-10 h-fit"
    >
      <div className="relative w-[314px] sm:w-[336px] h-[240px] rounded-lg overflow-hidden">
        <Image src={pro.image} alt="image project" fill objectFit="cover" />
      </div>
      <p className="text-sm font-semibold mt-6 mb-2 text-lightBlue">
        {pro.category}
      </p>
      <h1 className="text-2xl text-btnbg leading-8 font-semibold my-6">
        {pro.title}
      </h1>
      <p className="text-base text-linksColor">{pro.description}</p>
      <p className="text-sm text-linksColor">{pro.date}</p>
    </div>
  );
}

export default Projectcard;
