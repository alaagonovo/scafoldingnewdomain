import faqs from "@/app/data/faqs";
import Link from "next/link";
import React from "react";
import FaqsCard from "./faqsCard/FaqsCard";
import Image from "next/image";

function Faqs() {
  return (
    <section
      className="h-auto lg:h-[870px] relative py-16 lg:py-24 mt-4"
      style={{ backgroundColor: "#002F69D9" }}
      id="faqs"
    >
      <Image
        src="/assets/faqscover.webp"
        alt="cover image"
        fill
        className="z-[-1]"
      />
      <div className="mx-auto w-[92%] md:w-[88%]">
        <h1
          data-aos="fade-up"
          className="text-5xl text-white font-semibold max-w-[768px]"
        >
          FAQs
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-full lg:max-w-[768px] mt-5 font-light lg:font-normal text-white text-lg"
        >
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please
          <Link href="/" className="underline decoration-1 ml-2 mr-1">
            chat to our friendly team
          </Link>
          .
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 lg:mt-16 gap-x-4 gap-y-10 lg:gap-y-16">
          {faqs.map((faq, index) => (
            <FaqsCard question={faq.question} answer={faq.answer} key={index} />
          ))}
        </div>
        <div>
          <div
            className="mt-16 p-8 bg-white rounded-2xl flex  justify-between flex-col lg:flex-row w-fit lg:w-full"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div>
              <h1 className="text-xl leading-8 text-btnbg font-semibold">
                Still have questions?
              </h1>
              <p className="text-btnbg leading-7 text-lg mt-2">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
            </div>
            <Link
              href="/"
              className="bg-btnbg px-7 py-[10px] text-base h-fit text-white rounded-3xl w-fit mt-5 lg:mt-0"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
