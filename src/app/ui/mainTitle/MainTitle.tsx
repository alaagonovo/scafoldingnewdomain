import Image from "next/image";
import Link from "next/link";
import React from "react";

function MainTitle() {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex gap-2 items-center" data-aos="fade-up">
        <p className="relative w-5 h-5 ">
          <Image src="/svgs/backarrow.svg" alt="" fill />
        </p>
        <Link
          href="/"
          className="text-linksColor font-semibold text-[14px] inline-block"
        >
          Back to home
        </Link>
      </div>
      <h1
        className="text-4xl font-semibold leading-[44px]"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Get a Quote
      </h1>
      <p className="text-xl linksColor" data-aos="fade-up" data-aos-delay="250">
        You can reach us anytime via{" "}
        <Link
          href="mailto:info@thescaffolding.co.uk"
          className="text-btnbg ml-2 hover:font-medium hover:underline"
        >
          info@thescaffolding.co.uk
        </Link>
      </p>
    </div>
  );
}

export default MainTitle;
