"use client";
import { ShoppingCart } from "lucide-react";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  useClerk,
  UserButton,
} from "@clerk/nextjs";
import Cart from "../_components/Cart";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../../@/components/ui/menubar";

const Hero = () => {
  const { user } = useClerk();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex justify-between mx-5 mt-2 border border-black p-2">
      <p
        className="text-[40px]"
        style={{
          textDecoration: "line-through",
          textDecorationThickness: "0.05em",
        }}
      >
        KNOWLEDGE HUB
      </p>
      <div className="mt-2">
        {isClient &&
          (user ? (
            <div className="flex gap-3">
              {" "}
              <Menubar className="border-none translate-x-4">
                <MenubarMenu>
                  <MenubarTrigger>
                    {" "}
                    <ShoppingCart size={25} className="mt-1" />
                  </MenubarTrigger>
                  <MenubarContent>
                    <Cart />
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              <UserButton afterSignOutUrl="/" className="mt-2" />
              <button
                style={{ backgroundColor: "#F0D800" }}
                className=" text-black rounded-md px-2 py-1.5 text-[15px] w-28 mt-1"
              >
                <SignOutButton />
              </button>
            </div>
          ) : (
            <div className=" flex gap-2">
              <button className="text-[15px] bg-black  text-white rounded-md px-2 py-1.5  mt-1 w-28">
                <SignInButton />
              </button>
              <button
                style={{ backgroundColor: "#F0D800" }}
                className="text-[15px] text-black rounded-md px-2 py-1.5  mt-1 w-28 "
              >
                <SignUpButton />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hero;

{
  /* <button className="bg-black text-[15px] text-white rounded-md px-2 py-1.5 text-[13px] w-28 mr-5">
          {!user ? <SignInButton /> : <SignedOut />}
        </button>
        <button
          style={{ backgroundColor: "#F0D800" }}
          className="text-[15px] text-black rounded-md px-2 py-1.5 text-[13px] w-28"
        >
          SIGN IN
        </button> */
}
