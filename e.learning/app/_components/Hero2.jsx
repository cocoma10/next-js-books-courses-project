import React from "react";

import { ShoppingCart } from "lucide-react";
const Hero2 = () => {
  return (
    <div className="flex justify-between mx-5 border border-black mt-3 p-3">
      <div
        className="text-[35px] italic text-[#0A3AE3] font-light line-through"
        style={{
          textDecoration: "line-through",
          textDecorationThickness: "0.03em",
        }}
      >
        Knowledge Hub
      </div>
      <div className="flex">
        <ShoppingCart size={40} strokeWidth={1.75} className=" mt-1 mr-2"/> 
        <div className="bg-[#F0D800] w-12 rounded-full h-12"></div>
      </div>
    </div>
  );
};

export default Hero2;
