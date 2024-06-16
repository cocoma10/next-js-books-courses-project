"use client";
//import { useState } from 'react';

import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import Menuu from "./Menu";
const Header = () => {
  const [openmenu, setOpenmenu] = useState(false);
  return (
    <>
      <header
        id="Header"
        className="mx-5  mt-3 flex items-center justify-between border-b border-black pb-2"
        style={{ border: "0.25px solid black ", paddingBottom: "0px" }}
      >
        <div className="">
          <a href="/">
            {" "}
            <Image
              src="/logo.png"
              alot="logo"
              width={90}
              height={100}
              className="ml-2 my-2 "
            />
          </a>
        </div>
        <h1 className=" lg:text-[63px]  md:text-[33px] sm:text-[23px]">
          E.LEARNING PLATFORM
        </h1>
        <div
          style={{
            border: "1px solid black",
            display: "inline-block",
            padding: "3px",
            marginRight: "10px",
            transition: "transform 0.3s ease",
            transform: openmenu ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          <Menu onClick={() => setOpenmenu(!openmenu)} />
        </div>
      </header>
      <div
        style={{
          height: openmenu ? "300px" : "0",
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        {openmenu && <Menuu />}
      </div>
    </>
  );
};

export default Header;
