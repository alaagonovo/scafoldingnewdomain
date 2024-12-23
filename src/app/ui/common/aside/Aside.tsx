import links from "@/app/data/links";
import Link from "next/link";
import React from "react";
import styles from "../header/responsive.module.css";
import Image from "next/image";
function Aside({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <aside className="bg-bgAside backdrop-blur-lg h-[100vh] fixed inset-0 w-full">
      <div
        className="absolute w-6 h-6 right-3 top-3 hover:cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        <Image src="/svgs/X.svg" alt="close icon" fill />
      </div>
      <ul
        className={`flex flex-col w-[87%] gap-3 p-4 bg-btnbg h-full overflow-hidden ${
          isOpen && styles.smooth_open
        } ${!isOpen && styles.smooth_close}`}
      >
        <div className="w-[260px] h-[31px] mb-[20px] relative">
          <Image src="/svgs/asidelogo.svg" alt="logo" fill />
        </div>
        {links.map((link, index) => (
          <li
            key={index}
            className="  border-b border-btnbg last:border-0 rounded-xl text-white hover:bg-white hover:text-btnbg"
          >
            <Link
              className="py-2 px-3 block font-[500] text-[18px]"
              href={link.path}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Aside;
