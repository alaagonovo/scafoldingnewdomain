import React from "react";
interface IFaqs {
  question: string;
  answer: string;
}
function FaqsCard({ question, answer }: IFaqs) {
  return (
    <div className="flex flex-col max-w-[384px]">
      <h1 className="text-xl leading-8 font-semibold text-white">{question}</h1>
      <p className="text-base leading-6 font-normal mt-2 text-white">
        {answer}
      </p>
    </div>
  );
}

export default FaqsCard;
