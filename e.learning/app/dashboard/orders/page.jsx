"use client";
import React, { useEffect, useState } from "react";
import DeleteBook from "./../_comps/DeleteBook";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../@/components/ui/table";
const page = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function fetchLivres() {
      const response = await fetch("http://localhost:3000/api/orders", {
        method: "GET",
        //mode: "cors", // Specify CORS mode
      });
      const data = await response.json();
      setOrders(data.orders);
    }

    fetchLivres();
  }, []);

  return (
    <div className="mt-12 w-full">
      <Table>
        <TableCaption className="font-bold mb-5">
          A list of recent orders.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">user_id</TableHead>
            <TableHead>Total items</TableHead>
            <TableHead>Transaction date</TableHead>
            <TableHead className="text-right">ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.invoice}>
              <TableCell className="font-medium">{order.user_id}</TableCell>
              <TableCell>{order.pages}</TableCell>
              <TableCell>{order.cartItems.length}</TableCell>
              <TableCell className="text-right">
                {order.createdAt}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right ">{orders.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default page;
