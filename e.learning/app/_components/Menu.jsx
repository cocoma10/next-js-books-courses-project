import React from "react";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
const Menuu = () => {
  const { user } = useUser();
  console.log(user?.id);
  return (
    <div
      className="bg-black text-white w-[1035px] mt-20 
z-10 rounded-md border
    absolute top-12 p-5 ml-5"
    >
      <div
        className="flex mr-2 text-[60px] justify-between hover:text-[#F0D901] hover:line-through"
        style={{ textDecorationThickness: "0.05em" }}
      >
        <p>
          <Link href={"/books"}>
            BOOKS <span className="text-[#606060] text-[20px] ml-1">(01)</span>{" "}
          </Link>{" "}
        </p>
        <MoveUpRight
          className="my-auto"
          size={70}
          strokeWidth={5.25}
          absoluteStrokeWidth
        />
      </div>
      <div
        className="flex mr-2 text-[60px] justify-between hover:text-[#F0D901] hover:line-through"
        style={{ textDecorationThickness: "0.05em" }}
      >
        <p>
          <Link href={"/courses"}>
            COURSES{" "}
            <span className="text-[#606060] text-[20px] ml-1">(02)</span>{" "}
          </Link>{" "}
        </p>
        <MoveUpRight
          className="my-auto"
          size={70}
          strokeWidth={5.25}
          absoluteStrokeWidth
        />
      </div>

      <div
        className="flex mr-2 text-[60px] justify-between hover:text-[#F0D901] hover:line-through"
        style={{ textDecorationThickness: "0.05em" }}
      >
        <p>
          <Link href={"/about-us"}>
            About us
            <span className="text-[#606060] text-[20px] ml-1">(04)</span>
          </Link>{" "}
        </p>
        <MoveUpRight
          className="my-auto"
          size={70}
          strokeWidth={5.25}
          absoluteStrokeWidth
        />
      </div>
      
      <div
        className="flex mr-2 text-[60px] justify-between hover:text-[#F0D901] hover:line-through"
        style={{ textDecorationThickness: "0.05em" }}
      >
        <p>
          <Link href={"/owned_books"}> 
            Your books
            <span className="text-[#606060] text-[20px] ml-1">(04)</span>
          </Link>{" "}
        </p>
        <MoveUpRight
          className="my-auto"
          size={70}
          strokeWidth={5.25}
          absoluteStrokeWidth
        />
      </div>

      <div
        className="flex mr-2 text-[60px] justify-between hover:text-[#F0D901] hover:line-through"
        style={{ textDecorationThickness: "0.05em" }}
      >
        <p>
          <Link href={"/owned_courses"}> 
            Your courses
            <span className="text-[#606060] text-[20px] ml-1">(04)</span>
          </Link>{" "}
        </p>
        <MoveUpRight
          className="my-auto"
          size={70}
          strokeWidth={5.25}
          absoluteStrokeWidth
        />
      </div>
      {user?.fullName === "Wonka factory" ? (
        <div
          className="flex mr-2 text-[60px] justify-between hover:text-[#F0D901] hover:line-through"
          style={{ textDecorationThickness: "0.05em" }}
        >
          <p>
            <Link href={"/dashboard"}>
              Dashboard
              <span className="text-[#606060] text-[20px] ml-1">(04)</span>
            </Link>{" "}
          </p>
          <MoveUpRight
            className="my-auto"
            size={70}
            strokeWidth={5.25}
            absoluteStrokeWidth
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Menuu;
