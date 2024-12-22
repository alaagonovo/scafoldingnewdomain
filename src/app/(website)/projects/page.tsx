import React from "react";
import Projectshero from "../../ui/prohero/Projectshero";
import AllProjects from "../../ui/allprojectssection/AllProjects";
import Stillquestion from "../../ui/stillquessection/Stillquestion";

function page() {
  return (
    <>
      <Projectshero />
      <AllProjects />
      <Stillquestion />
    </>
  );
}

export default page;
