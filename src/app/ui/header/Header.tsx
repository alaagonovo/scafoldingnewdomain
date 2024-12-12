import links from "@/app/data/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="w-[88%] left-1/2 transform -translate-x-1/2  absolute top-8 z-10">
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="bg-white py-4 px-8 rounded-[63px]"
      >
        {/* logo */}
        <div className="flex items-center relative justify-between">
          <div className="flex gap-2">
            <div className="relative w-[30px] h-[30px]">
              <Image src="/svgs/logo.svg" alt="logo" fill />
            </div>
            <h2 className="relative  my-auto w-max font-[6a00]">
              Hendles Builders
            </h2>
          </div>
          {/* links */}
          <ul className="flex gap-[44px] max-w-[520px]">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className="font-[600] text-[17px] text-linksColor"
                  href={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* get qoute button */}
          <Link
            href="/"
            className="bg-btnbg px-7 py-[10px] text-base text-white rounded-3xl"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
