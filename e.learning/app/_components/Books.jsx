import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, X } from "lucide-react";
const Books = ({ currentPosts }) => {
  return (
    <div className="flex justify-center items-center ml-6 mt-8 ">
      <div
        id="books_container"
        className=" grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20 "
      >
        {currentPosts.map((t, index) => (
          <div id="book" className="">
            <div id="book_header" className="flex">
              <div
                id="number"
                className="rounded-full mr-2.5 bg-black text-white text-center flex justify-center items-center w-16 h-6 font-bold p-1 mt-2"
              >
                0{index + 1}
              </div>
              <div id="1row">
                <p className="border text-[20px] border-black rounded-full px-5 py-1.5 hover:bg-[#F0D800]">
                  {t.category}
                </p>
                <p className="w-[130px]  text-[25px] ">{t.title}</p>
              </div>

              <div id="2row">
                <p className="border text-[20px] ml-1 border-black rounded-full px-10 py-1.5 hover:bg-[#F0D800]">
                  PDF
                </p>
              </div>
            </div>
            <Link
              href={`/single/${t._id}`}
              className="img filter grayscale hover:filter-none transition duration-300 ease-in-out"
            >
              {" "}
              <Image
                src={t.banner}
                alt="logo"
                width={260}
                height={50}
                className="img"
                style={{
                  width: "65%",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Link>
            {/* <div className="flex justify-center text-center mt-2 text-blue-700">
              <Plus size={20} />
              <p className="italic text-blue-700">add to cart</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
