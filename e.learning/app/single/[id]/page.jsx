"use client";
import { Toaster, toast } from "sonner";

import React from "react";
import Image from "next/image";
//import { Button } from "../../../@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Pagination from "./../../_components/Pagination";
import { useUser } from "@clerk/clerk-react";


const Single = ({ params }) => {
  const { user } = useUser();

  //const router = useRouter();
  const { id } = params;

  const [book, setBook] = useState(null);
  const [booksbyAuthor, setBooksbyAuthor] = useState([]);

  //for pagination-------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentBooks = booksbyAuthor.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const fetchBook = async () => {
      const res = await fetch(`http://localhost:3000/api/livres/${id}`);
      const data = await res.json();
      setBook(data.livre);
      console.log(book);
    };
    if (id) {
      fetchBook();
    }
  }, [id]);

  useEffect(() => {
    const fetchedbyauth_fun = async () => {
      const res = await fetch("http://localhost:3000/api/livres");
      const data = await res.json();
      const filtered = data.books.filter((book) => book.author === book.author);
      setBooksbyAuthor(filtered);
      console.log(booksbyAuthor);
    };
    if (book && book.author) {
      fetchedbyauth_fun();
    }
  }, [book]);

  //add course to cart
  const [exists, setExists] = useState(false);

  const handleAdd = async () => {
    const bookExistsInCart = cart.find((c) => c.title === book.title);
    if (bookExistsInCart) {
      toast.warning("Already added on Your Cart");
      setExists(true);
    } else {
  
      const newCartBook = {
        Cartpath:book.pdf,
        user_id: user?.id,
        Itemtype: "book",
        title: book.title,
        category: book.category,
        photo: book.banner,
        price: book.price,
      };
      try {
        const res = await fetch("http://localhost:3000/api/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newCartBook),
        });
        const data = await res.json();
        setCart([...cart, data.book]);
        setExists(true);
        toast.success("Added to Cart");
      } catch (error) {
        console.error(error);
      }
    }
  };

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

  return (
    <div className="">
      <div className="flex justify-center">
        <p className="text-[40px] italic  underline translate-x-[43px] mt-20">
          {book?.title}
        </p>
      </div>

      <div className="flex justify-between mt-28 mx-5">
        <div className="mt-8">
          <div className="flex justify-between w-[380px] border-b-2 border-black h-[50px] ml-5">
            <p className="uppercase text-[27px] font-bold mt-1">author</p>
            <p
              style={{ fontFamily: "myfont" }}
              className="text-[43px] text-[#3450A3]"
            >
              {book?.author}
            </p>
          </div>
          <div className="flex justify-between w-[380px] border-b-2 border-black h-[50px] ml-5">
            <p className="uppercase text-[27px] font-bold mt-1">category</p>
            <p
              style={{ fontFamily: "myfont" }}
              className="text-[43px] text-[#3450A3]"
            >
              {book?.category}
            </p>
          </div>
          <div className="flex justify-between w-[380px] border-b-2 border-black h-[50px] ml-5">
            <p className="uppercase text-[27px] font-bold mt-1">pages</p>
            <p
              style={{ fontFamily: "myfont" }}
              className="text-[43px] text-[#3450A3]"
            >
              {book?.pages} page
            </p>
          </div>
          <div className="flex justify-between w-[380px] border-b-2 border-black h-[50px] ml-5">
            <p className="uppercase text-[27px] font-bold mt-1">date</p>
            <p
              style={{ fontFamily: "myfont" }}
              className="text-[43px] text-[#3450A3]"
            >
              {book?.date}
            </p>
          </div>
          <div className="flex justify-between w-[380px] border-b-2 border-black h-[50px] ml-5">
            <p className="uppercase text-[27px] font-bold mt-1">isbn</p>
            <p
              style={{ fontFamily: "myfont" }}
              className="text-[43px] text-[#3450A3]"
            >
              {book?.isbn}
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

        <div className="w-fit rounded-sm">
          <Image
            src={book?.banner}
            alt="logo"
            width={285}
            height={90}
            className="-translate-y-[43px]"
          />
          <div className="flex justify-between -translate-y-[35px] ">
            <p className="italic font-semibold my-1">{book?.price}$</p>
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

        {/* */}

        <div className="border-b-2 border-black h-fit">
          <p className="uppercase text-[27px] font-bold mt-1 flex justify-end w-[380px]">
            Description
          </p>
          <p
            style={{ fontFamily: "myfont", lineHeight: "30px" }}
            className="text-[35px] mt-2 text-[#3450A3] w-[400px] text-left"
          >
            {book?.description}
          </p>
        </div>
      </div>

      <div className="flex justify-between mx-5 mt-20">
        <p className="text-[#F0D800]  font-medium text-[45px] mt-6">
          more books
        </p>
        <h1 className="text-black font-bold text-[80px]">SAMIR AUTHOR</h1>
      </div>

      <div className="flex justify-center items-center ml-11 mt-8 ">
        <div
          id="books_container"
          className="mx-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20 "
        >
          {currentBooks.map((t, index) => (
            <div id="book" className="">
              <div id="book_header" className="flex">
                <div
                  id="number"
                  className="rounded-full mr-2.5 bg-black text-white text-center flex justify-center items-center w-10 h-11 font-bold"
                >
                  0{index + 1}
                </div>
                <div id="1row">
                  <p className="border text-[20px] border-black rounded-full px-10 py-1.5 hover:bg-[#F0D800]">
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
            </div>
          ))}
        </div>
      </div>

      <Pagination
        totalPosts={booksbyAuthor.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      {/* <ul>
        {cart?.map((c) => (
          <li key={c?._id}>{c?.title}</li>
        ))}
      </ul>
      <span>cart : {cart.length}</span>*/}

      <Toaster richColors />
    </div>
  );
};

export default Single;
