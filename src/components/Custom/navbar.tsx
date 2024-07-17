"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const route = [
  {
    name: "chat",
    path: "/",
  },
  {
    name: "Profile",
    path: "/profile",
  },
];

function Navbar() {
  const pathName = usePathname();
  return (
    <>
      <div className="p-4 flex flex-row justify-between items-center bg-black text-white ">
        {/* logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold">Goggins AI</h1>
        </Link>
        {/* routes */}
        <div className="flex gap-x-6 text-lg items-center">
          {route.map((route, idx) => (
            <Link
              key={idx}
              href={route.path}
              className={
                pathName === route.path ? "border-b-2 border-yellow-500" : ""
              }
            >
              {route.name}
            </Link>
          ))}
          {/* User Buttons */}
          <UserButton />
        </div>
      </div>
    </>
  );
}

export default Navbar;
