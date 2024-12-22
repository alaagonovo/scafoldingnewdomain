import Link from "next/link";
import React from "react";

function Stillquestion() {
  return (
    <section className="mt-16 bg-btnbg">
      <div className="px-4 py-20 lg:p-20 text-center text-white ">
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[36px] leading-[44px] font-semibold"
        >
          Still Have a Question?
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl leading-[30px] mt-2 font-light"
        >
          We’ love to hear from you. Our friendly team is always here to chat
        </p>
        <Link
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-white text-[18px] mt-10  inline-block ring-1 ring-white rounded-[68px] px-7 py-3"
          href="/"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}

export default Stillquestion;
