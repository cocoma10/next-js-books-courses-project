import React from "react";

const Hero_det = () => {
  return (
    <div className="flex justify-between mx-5 border border-black mt-3 p-3">
      <div
        className="text-[35px] italic text-[#0A3AE3] font-light line-through"
        style={{
          textDecoration: "line-through",
          textDecorationThickness: "0.03em",
        }}
      >
        Book Details
      </div>
      <div className="flex uppercase text-[25px] mt-2 font-medium text-[#F0D800]">
        <p className="mr-4">title</p>
        <p className="mr-4">pages</p>
        <p className="mr-4">category</p>
        <p className="mr-4">author</p>
        <p className="mr-4">date</p>
        <p className="mr-4">isbn</p>
        <p className="mr-4">description</p>
      </div>
    </div>
  );
};

export default Hero_det;
