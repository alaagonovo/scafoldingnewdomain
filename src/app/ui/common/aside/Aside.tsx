import links from "@/app/data/links";
import Link from "next/link";
import React from "react";
import styles from "../header/responsive.module.css";
function Aside({ isOpen }: { isOpen: boolean }) {
  return (
    <aside>
      <ul
        className={`flex flex-col bg-white absolute left-0 top-[46px]  w-full overflow-hidden ${
          isOpen && styles.smooth_open
        } ${!isOpen && styles.smooth_close}`}
      >
        {links.map((link, index) => (
          <li
            key={index}
            className="text-center py-2 mx-2 border-b border-btnbg last:border-0"
          >
            <Link
              className="font-[600] text-[17px] text-linksColor"
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
