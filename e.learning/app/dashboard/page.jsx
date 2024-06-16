import React from "react";
import { CircleArrowLeft, BookUser } from "lucide-react";
const page = () => {
  return (
    <div className="flex justify-center items-center translate-x-[140px]">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-cente flex text-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Welcome To The
            <strong className="font-extrabold text-[#F0D800] sm:block mt-2">
              {" "}
              Dashboard Page.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded-full bg-[#F0D800] px-12 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              <CircleArrowLeft />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
