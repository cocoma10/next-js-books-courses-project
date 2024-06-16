"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
function MyComponent() {
  const { user, isLoading } = useUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!isLoading && user) {
        const response = await fetch("/api/orders");
        const data = await response.json();
        const userOrders = data.orders.filter((order) => {
          const hasBook = order.cartItems.some(
            (item) => item.Itemtype === "course"
          );
          return order.user_id === user.id && hasBook;
        });
        setOrders(userOrders);
        setLoading(false);
      }
    }

    fetchData();
  }, [user, isLoading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-hidden">
      <header className="text-center mt-12 mb-3">
        <p className="text-[45px] font-bold text-gray-900 sm:text-3xl uppercase">
          Owned Items
        </p>
        <p className="text-[13px] md:text-[17px] lg:text-[19px] font-medium text-blue-600 sm:text-3xl uppercase">
          Click on any of your books
        </p>
      </header>
      {orders.length > 0 ? (
        <div className="">
          {orders.map((order) => (
            <div
              key={order._id}
              className="p-10 "
            >
              {order.cartItems
                .filter((item) => item.Itemtype === "book")
                .map((item) => (
                  <div
                    className="rounded overflow-hidden shadow-lg mb-5"
                    key={item._id}
                  >
                    <Link href={item.Itempath}>
                      <article className="flex bg-white transition hover:shadow-xl">
                        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                          <time
                            datetime="2022-10-10"
                            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                          >
                            <span>{item.category}</span>
                            <span className="w-px flex-1 bg-gray-900/10"></span>
                            <span>{item.price}$</span>
                          </time>
                        </div>

                        <div className="hidden sm:block sm:basis-56">
                          <img
                            alt=""
                            src={item.photo}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <a href="#">
                              <h3 className="font-bold uppercase text-gray-900">
                                {item.title}
                              </h3>
                            </a>

                            <p className="text-gray-400">click to read your pdf</p>

    
                          </div>

                          <div className="sm:flex sm:items-end sm:justify-end">
                            <a
                              href="#"
                              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                            >
                              Read PDF
                            </a>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </div>
                ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-400 text-center"> No Items !!</div>
      )}
    </div>
  );
}

export default MyComponent;
