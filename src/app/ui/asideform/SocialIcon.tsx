import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IIconProps {
  icon: string;
  link: string;
}
function SocialIcon({ icon, index }: { icon: IIconProps; index: number }) {
  return (
    <Link
      className="relative h-6 w-6 inline-block"
      href={icon.link}
      data-aos="zoom-in-out"
      data-aos-delay={index * 250}
      data-aos-offset="0"
    >
      <Image src={icon.icon} alt="social Icon" fill />
    </Link>
  );
}

export default SocialIcon;
