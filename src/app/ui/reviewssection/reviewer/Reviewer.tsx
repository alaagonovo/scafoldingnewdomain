import Image from "next/image";
import React from "react";

function Reviewer({
  clientImage,
  clientName,
  clientPlace,
}: {
  clientImage: string;
  clientName: string;
  clientPlace: string;
}) {
  return (
    <div className="flex absolute bottom-[-140px] items-center gap-2">
      <div className="relative w-[60px] h-[60px]">
        <Image
          src={clientImage}
          className="rounded-full"
          alt="client Image"
          fill
        />
      </div>
      <div>
        <h4 className="text-btnbg font-medium text-[20px]">{clientName}</h4>
        <p className="text-[18px] font-medium text-lightBlue">{clientPlace}</p>
      </div>
    </div>
  );
}

export default Reviewer;
