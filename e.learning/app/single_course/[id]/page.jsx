"use client";
import { Toaster, toast } from "sonner";
import React from "react";
import Image from "next/image";
//import { Button } from "../../../@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Pagination from "./../../_components/Pagination";
import { cn } from "../../../@/lib/utils";
import { Button } from "../../../@/components/ui/button";
import { Card, CardContent } from "../../../@/components/ui/card";
import { useUser } from "@clerk/clerk-react";

const Single = ({ params }) => {
  const  {user} = useUser();
  //const router = useRouter();
  const { id } = params;

  const [course, setCourse] = useState(null);
  const [coursesbyCategory, setCoursesbyCategory] = useState([]);

  //add course to cart
  const [exists, setExists] = useState(false);

  const handleAdd = async () => {
    const courseExistsInCart = cart.find((c) => c?.title === course.title);
    if (courseExistsInCart) {
      toast.warning("Already added on Your Cart");
      setExists(true);
    } else {
      const newCartCourse = {
        Cartpath:course.video,
        user_id: user?.id,
        Itemtype: "course",
        title: course.title,
        category: course.category,
        photo: course.banner,
        price: course.price,
      };
      try {
        const res = await fetch("http://localhost:3000/api/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newCartCourse),
        });
        const data = await res.json();
        setCart([...cart, data.course]);
        setExists(true);
        toast.success("Added to Cart");
      } catch (error) {
        console.error(error);
      }
    }
  };

  //for pagination-------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentCourses = coursesbyCategory.slice(firstPostIndex, lastPostIndex);

  //fetch cart items
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch("http://localhost:3000/api/cart");
      const data = await res.json();
      setCart(data.carts);
      console.log(cart);
    };
    fetchCart();
  }, []);

  useEffect(() => {
    const fetchBook = async () => {
      const res = await fetch(`http://localhost:3000/api/formations/${id}`);
      const data = await res.json();
      setCourse(data.course);
      console.log(course);
    };
    if (id) {
      fetchBook();
    }
  }, [id]);

  useEffect(() => {
    const fetchedbycategory_fun = async () => {
      const res = await fetch("http://localhost:3000/api/formations");
      const data = await res.json();
      const filtered = data.courses.filter(
        (course) => course.author === course.author
      );
      setCoursesbyCategory(filtered);
      console.log(coursesbyCategory);
    };
    if (course && course.category) {
      fetchedbycategory_fun();
    }
  }, [course]);

  return (
    <div className="">
      <div className="flex justify-center">
        <p className="text-[40px] italic  underline translate-x-[43px]">
          {course?.title}
        </p>
      </div>

      <div className="flex justify-between mt-28 mx-5">
        <div className="mt-8">
          <div className="flex justify-between w-[380px] border-b-2 border-black h-[50px] ml-5">
            <p className="uppercase text-[27px] font-bold mt-1">creator</p>
            <p
              style={{ fontFamily: "myfont" }}
              className="text-[43px] text-[#3450A3]"
            >
              {course?.formatteur}
            </p>
          </div>
          <div className="flex justify-between w-[380px] border-b-2 border-black h-[50px] ml-5">
            <p className="uppercase text-[27px] font-bold mt-1">category</p>
            <p
              style={{ fontFamily: "myfont" }}
              className="text-[43px] text-[#3450A3]"
            >
              {course?.category}
            </p>
          </div>
          <div className="flex justify-between w-[380px] border-b-2 border-black h-[50px] ml-5">
            <p className="uppercase text-[27px] font-bold mt-1">time</p>
            <p
              style={{ fontFamily: "myfont" }}
              className="text-[43px] text-[#3450A3]"
            >
              {course?.time} page
            </p>
          </div>
          <div className="flex justify-between w-[380px] border-b-2 border-black h-[50px] ml-5">
            <p className="uppercase text-[27px] font-bold mt-1">date</p>
            <p
              style={{ fontFamily: "myfont" }}
              className="text-[43px] text-[#3450A3]"
            >
              {course?.date}
            </p>
          </div>

          <div className="flex ml-5 mt-3 ">
            <Image
              src="/logo.png"
              alt="logo"
              width={65}
              height={90}
              className="bg-[#F0D800] p-1 mr-2"
            />
            <Image
              src="/logo.png"
              alt="logo"
              width={65}
              height={90}
              className="bg-[#3450A3] p-1 "
            />
          </div>
        </div>

        {/* */}

        <div className="mt-16 rounded-sm">
          {course ? (
            <div>
              {" "}
              <Image
                src={course.banner}
                alt="logo"
                width={330}
                height={300}
                className=""
              />
              <div className="flex justify-between -translate-y-[35px] mt-12">
                <p className="italic font-semibold my-1">{course.price}$</p>
                <div className="flex italic font-semibold my-1">
                  <p className="mr-2 mt-1 text-green-700">Add</p>
                  <ShoppingCart
                    size={30}
                    className="cursor-pointer"
                    onClick={handleAdd}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        {/* */}

        <div className="border-b-2 border-black h-fit">
          <p className="uppercase text-[27px] font-bold mt-1 flex justify-end w-[380px]">
            Description
          </p>
          <p
            style={{ fontFamily: "myfont", lineHeight: "30px" }}
            className="text-[35px] mt-2 text-[#3450A3] w-[400px] text-left"
          >
            {course?.description}
          </p>
        </div>
      </div>

      <div className="flex justify-between mx-5 mt-20  overflow-hidden">
        <p className="text-[#F0D800]  font-medium text-[45px] mt-6 ">
          more courses
        </p>
        <h1 className="text-black font-bold text-[75px]">{course?.category}</h1>
      </div>

      <div className="flex justify-center items-center ml-11 mt-8 ">
        <div
          id="books_container"
          className="mx-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20 "
        >
          {currentCourses.map((t, index) => (
            <Card
              key={course?.title}
              className={cn(
                "w-[330px] h-[290px] mx-auto mb-12  hover:text-white hover:bg-[#0A3AE3] "
              )}
            >
              <CardContent className="grid gap-4 italic ">
                <div className="flex ">
                  <p className="font-bold  text-[16px] uppercase ml-1">
                    TItle :
                  </p>{" "}
                  <p className="font-medium text-[13px] uppercase ml-2 translate-y-1 ">
                    Course for something
                  </p>
                </div>
                <div className="flex -translate-y-4 ml-1">
                  <p className="font-bold  text-[16px] uppercase ">Creator :</p>{" "}
                  <p className="font-medium text-[13px] uppercase ml-2 translate-y-1">
                    Course for something
                  </p>
                </div>
                <div className="flex -translate-y-8 ml-1">
                  <p className="font-bold  text-[16px] uppercase ">Time :</p>{" "}
                  <p className="font-medium  text-[13px] uppercase ml-2 translate-y-1">
                    Course for something
                  </p>
                </div>
                <div className="flex -translate-y-12 ml-1 w-full">
                  <p className="font-bold  text-[16px] uppercase ">
                    Category :
                  </p>{" "}
                  <p className="font-medium  text-[13px] uppercase ml-2 translate-y-1">
                    Course for something
                  </p>
                </div>

                <div className=" flex items-center space-x-4 -translate-y-16">
                  <div className="flex-1 space-y-1">
                    <Link
                      href={"#"}
                      className="w-96 ml-12 pt-5 pr-2 img filter grayscale hover:filter-none transition duration-300 ease-in-out"
                    >
                      {" "}
                      <Image
                        src={t?.banner}
                        alt="logo"
                        width={300}
                        height={80}
                        className="img mx-auto"
                        style={{ width: "85%" }}
                      />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Pagination
        totalPosts={coursesbyCategory.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      {/*  <div>
        <ul>
          {cart?.map((c) => (
            <li key={c?._id}>{c?.title}</li>
          ))}
        </ul>
        <span>cart : {cart.length}</span>
      </div>*/}
      

      <Toaster richColors />
    </div>
  );
};

export default Single;
