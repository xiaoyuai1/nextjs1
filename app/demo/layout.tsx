"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navs = [
  {
    name: "about",
    path: "/demo/about",
  },
  {
    name: "settings",
    path: "/demo/settings",
  },
];
export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);

  const pathName = usePathname(); // 使用 usePathname 以确保在路径更改时重新渲染布局组件
  console.log(pathName);

  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-4">
      <div className="flex gap-4 font-bold mb-4">
        {navs.map((nav) => (
          <Link
            key={nav.path}
            className={pathName === nav.path ? "text-purple-500" : ""}
            href={nav.path}
          >
            {nav.name}
          </Link>
        ))}
      </div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {children}
    </div>
  );
}
