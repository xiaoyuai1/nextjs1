import React from "react";
import Hero from "../../components/hero";
import img from "../../images/2.png";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "reliability",
};
export default function page() {
  return (
    <Hero imgData={img} imgAlt={"reliability"} title={"reliability~"}></Hero>
  );
}
