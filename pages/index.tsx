import type {NextPage} from "next";
import React from "react";
import SEO from "@/seo/index";
import Hero from "@/components/index/hero";
import Work from "@/components/index/work";

const MotionedHome: NextPage = () => {
  return (
    <React.Fragment>
      <SEO title="Home" />
      <Hero />
      <Work />
    </React.Fragment>
  )
};
export default MotionedHome;