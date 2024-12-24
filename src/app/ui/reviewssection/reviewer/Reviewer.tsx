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
    <div className="flex items-center gap-2">
      <div className="relative w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
        <Image
          src={clientImage}
          className=""
          alt="client Image"
          width={32}
          height={32}
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
