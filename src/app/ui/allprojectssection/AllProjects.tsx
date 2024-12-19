import React from "react";
import Projectcard from "../projectcard/Projectcard";
import allProjects from "@/app/data/allprojecrs";

function AllProjects() {
  return (
    <section className="max-w-[1216px] grid grid-cols-3 mx-auto gap-8 mt-[-130px]">
      {allProjects.map((pro, index) => (
        <Projectcard pro={pro} key={index} />
      ))}
     
    </section>
  );
}

export default AllProjects;
