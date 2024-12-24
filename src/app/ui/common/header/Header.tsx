"use client";
import links from "@/app/data/links";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./responsive.module.css";
import Aside from "../aside/Aside";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={`lg:w-[88%]  z-40  lg:top-8 w-full sm:top-0  lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 fixed md:top-0 z-10 ${styles.main_header}`}>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="bg-white p-4 lg:py-4 lg:px-8 lg:rounded-[63px] md:rounded-none"
      >
        {/* logo */}
        <div className="flex items-center relative justify-between">
          <div className="flex gap-2">
            <div className="relative w-[260px] h-[31px]">
              <Image src="/svgs/logolap.svg" alt="logo" fill />
            </div>
          </div>
          {/* links */}
          <ul className={`flex gap-[44px] max-w-[590px] ${styles.dis_none}`}>
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className="font-[600] text-[17px] text-linksColor"
                  href={link.path}
                  passHref
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* get qoute button */}
          <Link
            href="/getaquote"
            className={`bg-btnbg px-7 py-[10px] text-base text-white rounded-3xl ${styles.dis_none}`}
          >
            Get a Quote
          </Link>
          <div
            className="h-6 w-7 relative lg:hidden md:block cursor-pointer hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src={`/svgs/${!isOpen ? "bars.svg" : "cross.svg"}`}
              alt="burger icon"
              fill
            />
          </div>
        </div>
      </div>
      {isOpen && <Aside isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>
  );
}

export default Header;
