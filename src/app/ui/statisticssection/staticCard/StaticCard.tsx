"use client";
import { useIntersectionObserver } from "@/app/lib/useIntersectionObserver";
import React, { useEffect } from "react";
interface IStatics {
  num: number;
  sign?: string;
  text: string;
  bgColor: string;
  textColor: string;
}
function StaticCard({
  index,
  setIsVisible,
  item,
  statisticsNum,
}: {
  index: number;

  item: IStatics;
  statisticsNum: number[];
  setIsVisible: (value: boolean) => void;
}) {
  const { isVisible, elementRef } = useIntersectionObserver("0");
  useEffect(() => {
    setIsVisible(isVisible);
  }, [isVisible, setIsVisible]);
  return (
    <div
      key={index}
      ref={elementRef}
      style={{
        backgroundColor: `${item.bgColor}`,
        color: `${item.textColor}`,
      }}
      className="flex justify-center items-center h-[613px]"
    >
      <h1 className="text-[59px] font-bold w-[323px] text-center leading-[70px]">
        <span style={{ animationDuration: `1ms` }} className="animate-slide">
          {/* {item.num} */}
          {statisticsNum[index]}
        </span>
        {item?.sign}
        <br />
        {item.text}
      </h1>
    </div>
  );
}

export default StaticCard;
