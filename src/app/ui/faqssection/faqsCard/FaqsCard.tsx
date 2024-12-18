import React from "react";
interface IFaqs {
  question: string;
  answer: string;
}
function FaqsCard({ question, answer }: IFaqs) {
  return (
    <div className="flex flex-col max-w-full lg:max-w-[384px]">
      <h1
        data-aos="fade-up"
        data-aos-delay="400"
        className="text-xl leading-8 font-semibold text-white"
      >
        {question}
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="600"
        className="text-base leading-6 font-normal mt-2 text-white"
      >
        {answer}
      </p>
    </div>
  );
}

export default FaqsCard;
