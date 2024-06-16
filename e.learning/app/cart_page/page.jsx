"use client";

import React from "react";
import { useState, useEffect } from "react";
import DeleteCartItem from "../_components/DeleteCartItem";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const page = () => {
  const { user } = useUser();

  //fetch cart items
  const [cart, setCart] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch("http://localhost:3000/api/cart");
      const data = await res.json();
      setCart(data.carts);
      console.log(cart);
    };
    fetchCart();
  }, []);
  const totalPrice = cart.reduce((acc, item) => {
    const price = parseFloat(item.price);
    return acc + (price || 0);
  }, 0);
  return (
    <div>
      <div id="content">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <header className="text-center">
                <p className="text-[45px] font-bold text-gray-900 sm:text-3xl uppercase">
                  Shopping cart
                </p>
              </header>

              <div className="mt-8">
                {cart.length === 0 ? (
                  <div className="text-gray-400"> No Items !!</div>
                ) : (
                  <ul className="space-y-4">
                    {cart.map((item) => (
                      <li className="flex items-center gap-4 border border-black pr-3">
                        <img
                          src={item.photo}
                          alt=""
                          className="size-[100px] object-cover p-1 px-4"
                        />

                        <div>
                          <h3 className="text-[20px] font-semibold text-gray-900">
                            {item.title}
                          </h3>

                          <dl className="mt-0.5 space-y-px text-[12px] text-black ">
                            <div className="border border-black p-1 w-fit px-4 uppercase mb-1">
                              <dt className="inline ">category:</dt>
                              <dd className="inline">{item.category}</dd>
                            </div>

                            <div className="border border-black p-1 w-fit px-4 uppercase">
                              <dt className="inline">Price:</dt>
                              <dd className="inline">{item.price}£</dd>{" "}
                            </div>
                          </dl>
                        </div>

                        <div className="flex flex-1 items-center justify-end gap-2">
                          <button className="text-gray-600 transition hover:text-red-600">
                            <span className="sr-only">Remove item</span>
                            <DeleteCartItem id={item._id} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-between !text-base font-medium">
                        <dt className="font-bold uppercase">Total</dt>
                        <dd>£{totalPrice}</dd>
                      </div>
                    </dl>

                    <div className="flex justify-end">
                      <button
                        onClick={() =>
                          router.push(`/checkout?amount=${totalPrice}`)
                        }
                        className="block px-5 py-3 text-sm text-black transition rounded bg-[#F0D800]  hover:bg-[#f5e768]"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
