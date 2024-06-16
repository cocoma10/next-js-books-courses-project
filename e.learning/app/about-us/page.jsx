import React from "react";
import { CircleArrowDown, BookUser } from "lucide-react";

const page = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Welcome To The
            <strong className="font-extrabold text-[#F0D800] sm:block mt-2">
              {" "}
              About Us Page.{" "}
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
              <CircleArrowDown />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-8 mx-5">
        <h1 className="text-black font-bold text-[70px]">Know more </h1>

        <p className="text-[#0A3AE3]  font-medium text-[60px] mt-3">
        about us
        </p>
      </div>
      <div className="flex justify-center gap-7 mb-20">
        <a href="#" className="group relative block h-64 sm:h-80 lg:h-96 bg-[#F0D800]">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-[#0A3AE3] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <BookUser />

              <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                El Madad Manal
              </h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                El Madad Manal
              </h3>

              <p className="mt-4 text-sm sm:text-base">
                Stagiaire à ISGI Casablanca, développeur full stack, compétences
                [Next.js, React, Node.js, Laravel, JavaScript, Tailwind CSS...]
              </p>

              <p className="mt-8 font-bold">Read more</p>
            </div>
          </div>
        </a>

        <a href="#" className="group relative block h-64 sm:h-80 lg:h-96 bg-[#0A3AE3]">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-[#F0D800] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <BookUser />

              <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                Iman Arroub
              </h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                Iman Arroub
              </h3>

              <p className="mt-4 text-sm sm:text-base">
                Stagiaire à ISGI Casablanca, développeur full stack, compétences
                [Next.js, React, Node.js, Laravel, JavaScript, Tailwind CSS...]
              </p>

              <p className="mt-8 font-bold">Read more</p>
            </div>
          </div>
        </a>

        <a href="#" className="group relative block h-64 sm:h-80 lg:h-96 bg-[#F0D800]">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-[#0A3AE3] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <BookUser />

              <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                Yasmine Saifi
              </h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                Yasmine Saifi
              </h3>

              <p className="mt-4 text-sm sm:text-base">
                Stagiaire à ISGI Casablanca, développeur full stack, compétences
                [Next.js, React, Node.js, Laravel, JavaScript, Tailwind CSS...]
              </p>

              <p className="mt-8 font-bold">Read more</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default page;
