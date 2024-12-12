import links from "@/app/data/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header
      /*data-aos="fade-up"*/ className="w-[88%] left-1/2 transform -translate-x-1/2 p-6 bg-white rounded-[63px] absolute top-8 z-10"
    >
      {/* logo */}
      <div className="flex items-center relative justify-between">
        <div className="flex gap-2">
          <div className="relative w-[30px] h-[30px]">
            <Image src="/svgs/logo.svg" alt="logo" fill />
          </div>
          <h2 className="relative  my-auto w-max">Hendles Builders</h2>
        </div>
        {/* links */}
        <ul className="flex gap-8 max-w-[478px]">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        {/* get qoute button */}
        <Link
          href="/"
          className="bg-btnbg px-2 py-1 text-base text-white rounded-3xl"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}

export default Header;
