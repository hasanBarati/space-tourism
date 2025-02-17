"use client"
import { NavBarItems } from "@/constant/navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

function Navbar() {
  const router = useRouter();
  return (
    <div className="  backdrop-blur-sm absolute w-full z-10 top-10  flex justify-between  items-strech      px-16  ">
      <div className=" text-white">
        <Image
          width={48}
          height={48}
          src={"/images/shared/logo.svg"}
          alt="logo"
        />
      </div>

      <div className="flex gap-x-14 items-center ">
        {NavBarItems.map((item, index) => (
          <div
            onClick={()=>
              router.push(`/?page=${item}`)
            }
            key={index}
            className=" flex gap-2  h-full  border-b-2 items-center py-6   "
          >
            <p className=" text-white">{"0" + index}</p>
            <p className=" text-white">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
