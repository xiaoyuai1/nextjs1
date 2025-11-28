"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const navs = [
  {
    name: "Performance",
    path: "/performance",
  },
  {
    name: "reliability",
    path: "/reliability",
  },
  {
    name: "scale",
    path: "/scale",
  },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <div className="absolute w-full z-10 ">
      <div className="flex justify-between container mx-auto text-white p-4">
        <Link href="/" className="text-3xl font-bold">
          home
        </Link>
        <div className="text-xl space-x-4">
          {navs.map((item) => {
            return (
              <Link
                className={pathname === item.path ? "text-purple-500" : ""}
                href={item.path}
                key={item.path}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
