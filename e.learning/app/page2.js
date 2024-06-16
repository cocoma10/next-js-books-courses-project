"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";
import { AspectRatio } from "../@/components/ui/aspect-ratio";

export default function Home2() {
  const { user } = useUser();
  const [livres, setLivres] = useState([]);
  useEffect(() => {
    async function fetchLivres() {
      const response = await fetch("http://localhost:3000/api/livres", {
        method: "GET",
        //mode: "cors", // Specify CORS mode
      });
      const data = await response.json();
      setLivres(data.books);
    }

    fetchLivres();
  }, []);
  return (
    <div>
      <div className="mx-5 mt-7">
        {/*   <Image
          src="/twoo.png"
          alot="logo"
          width={3000}
          height={90}
          class="img"
          className="img absolute"
  /> */}

        <AspectRatio ratio={16 / 8} className="">
          <Image
            src="/twoo.png"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
          <div id="rel" className="ml-2 flex relative mt-6">
            <div className="content ml-2">
              <p className="text-[60px] font-bold translate-y-2">
                Discover The Joy of
              </p>
              <p className=" flex text-[60px] font-bold">
                <span
                  style={{
                    backgroundColor: "#0A3AE3",
                    padding: "9px",
                    paddingTop: "13px",
                    color: "#F0D800",
                  }}
                >
                  Reading
                </span>{" "}
                <span className="translate-y-3 mx-2">And</span>{" "}
                <span
                  style={{
                    backgroundColor: "#0A3AE3",
                    padding: "13px",
                    color: "#F0D800",
                  }}
                >
                  Learning
                </span>
              </p>
              <p
                style={{
                  width: "708px",
                  backgroundColor: "#0A3AE3",
                  paddingTop: "20px",
                  paddingLeft: "5px",
                  paddingBottom: "20px",
                  color: "#F0D800",
                }}
              >
                DiscoverUnlock the World of Books and LearningOur platform
                offers a wide range of features to cater to all your book
                buying, selling, course exploring, and educational resource
                needs. Join our community today and embark on a journey of
                knowledge and discovery.
              </p>
            </div>
            <div>
              <Image
                src="/livres/bk2.png"
                alt="logo"
                width={320}
                height={90}
                className="mt-6 "
              />
            </div>
          </div>

          <div id="hero2" className="place-content-center flex relative mt-12 ">
          <Link
            className="bg-black  mr-20 text-white px-11 py-3 rounded-md text-[20px] "
            href="/books"
          >
            BOOKS
          </Link>
          <Link
            style={{ backgroundColor: "#F0D800" }}
            className="text-black bg-black text-[20px] px-9 py-3 rounded-md   "
            href="/courses"
          >
            COURSES
          </Link>
        </div>
        </AspectRatio>

        {/*      <Livres />
         */}
       
      </div>
      {/* ----------------------------------- */}

      {/*     books HERO
       */}

     

      <div className="flex justify-between mx-5 mt-20">
        <p className="text-[#0A3AE3]  font-medium text-[45px] mt-6">
          e.learning
        </p>
        <h1 className="text-black font-bold text-[80px]">FEATURED BOOKS</h1>
      </div>

      {/*     books Loop
       */}
      <div className="flex justify-center items-center ml-11 mt-8">
        <div
          id="books_container"
          class="container grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 "
        >
          {livres.slice(0, 3).map((t, index) => (
            <div id="book" className="">
              <div id="book_header" className="flex ">
                <div
                  id="number"
                  className="rounded-full mr-2.5 bg-black text-white text-center flex justify-center items-center w-7 h-8 font-bold p-1 mt-1"
                  >
                  0{index + 1}
                </div>
                <div id="1row">
                <p className="border text-[20px] border-black rounded-full px-5 py-1.5 hover:bg-[#F0D800]">                    {t.category}
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
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-20">
        <button className="text-white bg-black rounded-md py-2 mt-8 px-9">
          <a href="/books"> DISCOVER MORE </a>
        </button>
      </div>
    </div>
  );
}
