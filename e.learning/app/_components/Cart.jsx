"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Cart = () => {
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
    <div
      className="
    rounded-md border shadow-sm
     bg-black p-4 h-[370px] overflow-scroll"
    >
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart.map((item) => (
            <li className="flex items-center gap-4 border border-white p-2">
              <img
                src={item.photo}
                alt=""
                className=" rounded"
                width={50}
                height={80}
              />

              <div>
                <h3 className="text-sm text-white line-clamp-1">{item.title}</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-white">
                  <div>
                    <dt className="inline text-[#F0D800] mr-1 uppercase">
                      Category:
                    </dt>
                    <dd className="inline">{item.category}</dd>
                  </div>

                  <div>
                    <dt className="inline text-[#F0D800] mr-1 uppercase">
                      Price:
                    </dt>
                    <dd className="inline">{item.price}$</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>

        <div className="space-y-4 text-center">
          <Link
            href="/cart_page"
            className="block px-1 py-2 text-[13px] text-black transition bg-[#F0D800] rounded hover:bg-[#ffef62]"
          >
            View my cart({cart.length}) {/*({cart?.length}) */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
