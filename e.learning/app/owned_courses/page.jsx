"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";


function MyComponent() {
  //pagination

  const { user, isLoading } = useUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!isLoading && user) {
        const response = await fetch("/api/orders");
        const data = await response.json();
        const userOrders = data.orders.filter(
          (order) =>
            order.user_id === user.id &&
            order.cartItems.some((item) => item.Itemtype === "course")
        );
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
    <div className="">
      <header className="text-center mt-12 mb-3">
        <p className="text-[45px] font-bold text-gray-900 sm:text-3xl uppercase">
          Owned Items
        </p>
        <p className="text-[13px] md:text-[17px] lg:text-[19px] font-medium text-blue-600 sm:text-3xl uppercase">
          Click on any of your courses
        </p>
      </header>
      {orders.length > 0 ? (
        <div className="">
          {orders.map((order) => (
            <div
              key={order._id}
              className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6"
            >
              {order.cartItems.filter((item) => item.Itemtype === "course")
                .map((item) => (
                  <div
                    className="rounded overflow-hidden shadow-lg"
                    key={item._id}
                  >
                    <Link href='/vids/vid.mp4'>
                      <img
                        className="w-full"
                        src={item.photo}
                        alt={item.title}
                      />
                      <div className="px-6 py-4">
                        <div className="text-[15px] md:text-[15px] mt-3 text-center uppercase font-medium">
                          {item.title}
                        </div>
                        <p className="text-gray-700 text-base">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-400 text-center"> No Items !!</div>
      )}

      {/*
      <a href="/vids/vid.mp4" target="_blank" rel="noopener noreferrer">
        Visit PDF
      </a>{" "}
      <br />
      <a
        href="/pdfs/Atomic_Habits_James_Clear.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit PDF
      </a>
      <embed src="vid.mp4"  type="application/pdf"  height="200px" className="bg-black text-white rounded-lg"/>
                    <embed src="Atomic_Habits_James_Clear.pdf"  type="application/pdf" width="50%" height="200px" className="bg-black text-white"/>
     */}
    </div>
  );
}

export default MyComponent;
