"use client";
import React, { useEffect, useState } from "react";
import DeleteCourse from "./../_comps/DeleteCourse"
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
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function fetchLivres() {
      const response = await fetch("http://localhost:3000/api/formations", {
        method: "GET",
        //mode: "cors", // Specify CORS mode
      });
      const data = await response.json();
      setCourses(data.courses);
    }

    fetchLivres();
  }, []);

  return (
    <div className="mt-12 ">
      <Table>
        <TableCaption className="font-bold mb-5">
          A list of your recent books.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">TITLE</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>CATEGORY</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>formatteur</TableHead>
            <TableHead>DATE</TableHead>
            <TableHead className="text-right">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.invoice}>
              <TableCell className="font-medium">{course.title}</TableCell>
              <TableCell>{course.time}</TableCell>
              <TableCell>{course.category}</TableCell>
              <TableCell>{course.price}</TableCell>
              <TableCell>{course.formatteur}</TableCell>
              <TableCell>{course.date}</TableCell>
              <TableCell className="text-right flex translate-x-10">
                <Link href={`/dashboard/editCourse/${course._id}`}>
                  <Pencil className="mr-3" />
                </Link>

                <DeleteCourse id={course._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right ">{courses.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default page;
