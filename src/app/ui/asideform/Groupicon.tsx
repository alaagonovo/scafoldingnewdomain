import Image from "next/image";
import React from "react";
interface IGroupProps {
  icon: string;
  title: string;
  paragraph: string;
  email: string;
}
function Groupicon({ group, index }: { group: IGroupProps; index: number }) {
  return (
    <div
      className="flex gap-5"
      data-aos="fade-up"
      data-aos-delay={(index + 1) * 200}
    >
      <div className="w-6  h-6 relative">
        <Image src={group.icon} alt="contact us" fill />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-xl">{group.title}</h2>
        <p className="text-base">{group.paragraph}</p>
        <h3 className="font-semibold text-base max-w-[230px]">{group.email}</h3>
      </div>
    </div>
  );
}

export default Groupicon;
