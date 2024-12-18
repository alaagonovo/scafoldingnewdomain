import React, { RefObject } from "react";
interface IStatics {
  num: number;
  sign?: string;
  text: string;
  bgColor: string;
  textColor: string;
}
function StaticCard({
  index,
  elementRef,
  item,
  statisticsNum,
}: {
  index: number;
  elementRef: RefObject<HTMLDivElement | null>;
  item: IStatics;
  statisticsNum: number[];
}) {
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
