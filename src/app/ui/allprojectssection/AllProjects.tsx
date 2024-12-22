import React from "react";
import Projectcard from "../projectcard/Projectcard";
import allProjects from "@/app/data/allprojecrs";
import styles from "./responsive.module.css";
function AllProjects() {
  return (
    <section
      className={`${styles.grid_cont} max-w-[1216px] grid grid-cols-1 justify-items-center  md:grid-cols-2 xl:grid-cols-3 mx-auto gap-8 mt-[-130px] `}
    >
      {allProjects.map((pro, index) => (
        <Projectcard pro={pro} key={index} />
      ))}
    </section>
  );
}

export default AllProjects;
