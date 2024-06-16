"use client";
import Home2 from "./page2";
import Link from "next/link";
import Email from "./_components/Email";
import { MoveUpRight, MoveRight, MoveDownRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [formations, setFormations] = useState([]);
  const [formationslength, setFormationslength] = useState(formations.length);
 
  useEffect(() => {
    async function fetchFormations() {
      const response = await fetch("http://localhost:3000/api/formations", {
        method: "GET",
      });
      const data = await response.json();
      setFormations(data.courses);
    }
    fetchFormations();
  });
  return (
    <div>
      <Home2 />
      <div className="mt-20">
        {/*     COURSES HERO
         */}
        <div className="flex justify-between mb-8 mx-5">
          <h1 className="text-black font-bold text-[75px] "> COURSES</h1>

          <p className="text-[#0A3AE3]  font-medium text-[60px] mt-3 ">
            e.learning
          </p>
        </div>

        {/*     Courses Loop
         */}

        {/*     COURSES container
         */}
        <div id="container" className="flex justify-center items-center ">
          <div class="container grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
            {formations.slice(0, 3).map((t,index) => (
              <div id="course" className="">
                {/*     COURSES header
                 */}
                <div id="course_header" className="flex mr-2">
                  <div
                    id="number"
                    className="rounded-full mr-2.5 bg-black text-white text-center flex justify-center items-center w-16 h-6 font-bold p-1 mt-2"
                    >
                    0{index + 1}
                  </div>
                  <div id="1row">
                  <p className="border text-[20px] border-black rounded-full px-5 py-1.5 hover:bg-[#F0D800]">
                      FANTASY
                    </p>
                    <p className="w-[130px] text-black  text-[25px] ">
                      {t.title}
                    </p>
                  </div>

                  <div id="2row">
                    <p className="border text-black  text-[20px] ml-1 border-black rounded-full px-10 py-1.5 ">
                      VIDEO
                    </p>
                  </div>
                </div>
                <Link
                  href={`/single_course/${t._id}`}
                  className="w-96 ml-12 pt-5 pr-2 img filter grayscale hover:filter-none transition duration-300 ease-in-out"
                >
                  {" "}
                  <Image
                    src={t.banner}
                    alt="logo"
                    width={300}
                    height={80}
                    className="img mx-auto"
                    style={{ width: "75%" }}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/*     ------------------------------------
         */}
      </div>
      <div className="flex justify-center items-center ">
        <button
          className="text-white bg-black rounded-md py-2 mt-8 px-9"
          style={{ marginTop: "60px", marginBottom: "35px" }}
        >
          <a href="/courses">          DISCOVER MORE
</a>
        </button>
      </div>

      {/* <div className="bg-[#111010] border-y border-black">
        <div className="flex text-[60px] font-semibold justify-between bg-[#111010] border-b text-white border-black hover:bg-[#F0D901] hover:text-black">
          <p className="ml-2">BOOKS PAGE</p>
          <MoveUpRight
            className="my-auto mr-2"
            size={90}
            strokeWidth={7.25}
            absoluteStrokeWidth
          />
        </div>

        <div className="flex text-[60px] font-semibold justify-between bg-[#111010] border-b  text-white border-black hover:bg-[#F0D901] hover:text-black">
          <MoveRight
            className="my-auto ml-2"
            size={90}
            strokeWidth={7.25}
            absoluteStrokeWidth
          />
          <p className="mr-2">COURSES PAGE</p>
        </div>

        <div className="flex text-[60px] font-semibold justify-between  bg-[#111010]  text-white hover:bg-[#F0D901] hover:text-black">
          <p className="ml-2">COURSES PAGE</p>
          <MoveDownRight
            className="my-auto mr-2 "
            size={90}
            strokeWidth={7.25}
            absoluteStrokeWidth
          />
        </div>
      </div>*/}
      <p
        className="line-through text-[#0A3AE3] text-[65px] font-thin text-right mr-2  "
        style={{
          textDecoration: "line-through",
          textDecorationThickness: "0.05em",
        }}
      >
        GET IN TOUCH
      </p>
      {/* */}

      <Email />
    </div>
  );
}
