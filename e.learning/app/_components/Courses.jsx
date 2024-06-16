import React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "../../@/lib/utils";
import { Button } from "../../@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
const Courses = ({ currentCourses }) => {
  return (
    <div className="container grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-8">
      {currentCourses.map((course) => (
        <Card key={course.title} className={cn("w-[330px] h-[285px] mx-auto mb-12  hover:text-white hover:bg-[#0A3AE3] ")}>
          <CardContent className="grid gap-4 italic ">
            <div className="flex ">
              <p className="font-bold  text-[16px] uppercase ml-1 w-[70px]">
                TItle :
              </p>{" "}
              <p className="font-medium text-[13px] uppercase ml-2 translate-y-1">
                {course.title}
              </p>
            </div>
            <div className="flex -translate-y-4 ml-1">
              <p className="font-bold  text-[16px] uppercase ">
                Creator :
              </p>{" "}
              <p className="font-medium text-[13px] uppercase ml-2 translate-y-1">
              {course.formatteur}
              </p>
            </div>
            <div className="flex -translate-y-8 ml-1">
              <p className="font-bold  text-[16px] uppercase ">
                Time :
              </p>{" "}
              <p className="font-medium  text-[13px] uppercase ml-2 translate-y-1">
              {course.time}
              </p>
            </div>
            <div className="flex -translate-y-12 ml-1 w-full">
              <p className="font-bold  text-[16px] uppercase ">
                Category :
              </p>{" "}
              <p className="font-medium  text-[13px] uppercase ml-2 translate-y-1">
              {course.category}
              </p>
            </div>

            <div className=" flex items-center space-x-4 -translate-y-16">
              <div className="flex-1 space-y-1">
                <Link
                   href={`/single_course/${course._id}`}
                  className="w-64 img filter grayscale hover:filter-none transition duration-300 ease-in-out"
                >
                  {" "}
                  <Image
                    src={course.banner}
                    alt="logo"
                    width={100}
                    height={80}
                    className="p-2"
                    style={{ width: "100%" }}
                  />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Courses;
