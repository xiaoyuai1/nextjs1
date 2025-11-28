import Image from "next/image";
import React from "react";
import img1 from "../images/1.png";
import Hero from "../components/hero";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'home',
}
export default function page11() {
  return (
    <Hero imgData={img1} imgAlt={"home"} title={"home~"}></Hero>
  );
}
