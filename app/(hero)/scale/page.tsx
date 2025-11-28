import React from "react";
import Hero from "../../components/hero";
import img from "../../images/2.png";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "scale",
};
export default function page() {
  return <Hero imgData={img} imgAlt={"scale"} title={"scale~"}></Hero>;
}
