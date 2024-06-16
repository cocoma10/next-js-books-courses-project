"use client";
import React, { useEffect, useState } from "react";
import DeleteBook from "./../_comps/DeleteBook"
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
import { Pencil, X } from "lucide-react";
const page = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchLivres() {
      const response = await fetch("http://localhost:3000/api/livres", {
        method: "GET",
        //mode: "cors", // Specify CORS mode
      });
      const data = await response.json();
      setBooks(data.books);
    }

    fetchLivres();
  }, []);

  return (
    <div className="mt-12 w-full">
      <Table>
        <TableCaption className="font-bold mb-5">
          A list of your recent books.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">TITLE</TableHead>
            <TableHead>PAGES</TableHead>
            <TableHead>CATEGORY</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>AUTHOR</TableHead>
            <TableHead>DATE</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead className="text-right">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.invoice}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.pages}</TableCell>
              <TableCell>{book.category}</TableCell>
              <TableCell>{book.price}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.date}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell className="text-right flex translate-x-10">
                <Link href={`/dashboard/editBook/${book._id}`}>
                  <Pencil className="mr-3" />
                </Link>

                <DeleteBook id={book._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right ">{books.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default page;
