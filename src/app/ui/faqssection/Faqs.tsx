import faqs from "@/app/data/faqs";
import Link from "next/link";
import React from "react";
import FaqsCard from "./faqsCard/FaqsCard";
import Image from "next/image";

function Faqs() {
  return (
    <section
      className="h-[870px] relative py-14"
      style={{ backgroundColor: "#002F69D9" }}
    >
      <Image
        src="/assets/faqscover.webp"
        alt="cover image"
        fill
        className="z-[-1]"
      />
      <div className="main_wrapper">
        <h1 className="text-5xl text-white font-semibold max-w-[768px]">
          FAQs
        </h1>
        <p className="max-w-[768px] mt-5 text-white text-lg">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please
          <Link href="/" className="underline decoration-1 ml-2 mr-1">
            chat to our friendly team
          </Link>
          .
        </p>
        <div className="grid grid-cols-3 mt-16 gap-x-4 gap-y-16">
          {faqs.map((faq, index) => (
            <FaqsCard question={faq.question} answer={faq.answer} key={index} />
          ))}
        </div>
        <div>
          <div className="mt-16 p-8 bg-white rounded-2xl flex  justify-between">
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
              className="bg-btnbg px-7 py-[10px] text-base h-fit text-white rounded-3xl"
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
