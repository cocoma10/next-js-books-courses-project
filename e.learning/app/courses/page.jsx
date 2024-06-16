"use client";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Courses from "./../_components/Courses";
import Pagination from "./../_components/Pagination";

const page = () => {
  const [courses, setCourses] = useState([]);
  const [clickedButton, setClickedButton] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  //for pagination-------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentCourses = filteredCourses.slice(firstPostIndex, lastPostIndex);
  //-------------------------------

  useEffect(() => {
    fetchBooks();
  }, []);
  useEffect(() => {
    filterBooksByCategory();
  }, [selectedCategory]);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/formations", {
        method: "GET",
      });
      const data = await response.json();
      console.log("Fetched books:", data.courses); // Log fetched books
      setCourses(data.courses);
      setFilteredCourses(data.courses); // Set filteredCourses to all courses by default
    } catch (error) {
      console.error("Error fetching books:", error); // Log error
    }
  };
  //filtering by category
  const filterBooksByCategory = () => {
    if (selectedCategory && selectedCategory !== "all") {
      const filteredList = courses.filter(
        (course) => course.category === selectedCategory
      );
      setFilteredCourses(filteredList);
    } else {
      setFilteredCourses(courses);
    }
  };

  //the button style
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === "all" ? "" : category);
    setClickedButton(category);
  };

  return (
    <div>
      

      {/*  Categories */}
      <div className="flex justify-center items-center text-[#0A3AE3] text-[20px] font-bold">
        <button
          className={`mr-2  ${clickedButton === "all" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("all")}
        >
          ALL
        </button>
        <p className="font-bold text-[30px] -translate-y-2">.</p>
        <button
          className={`mx-2 ${clickedButton === "design" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("design")}
        >
          DESIGN
        </button>
        <p className="font-bold text-[30px] -translate-y-2">.</p>
        <button
          className={`mx-2 ${clickedButton === "science" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("science")}
        >
          SCIENCE
        </button>
        <p className="font-bold text-[30px] -translate-y-2">.</p>
        <button
          className={`mx-2${
            clickedButton === "computer science" ? "underline" : ""
          }`}
          onClick={() => handleCategoryClick("computer science")}
        >
          COMPUTER SCIENCE
        </button>
        <p className="font-bold text-[30px] -translate-y-2">.</p>
        <button
          className={`mx-2 ${clickedButton === "business" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("business")}
        >
          BUSINESS
        </button>
        <p className="font-bold text-[30px] -translate-y-2">.</p>
        <button
          className={`mx-2 ${clickedButton === "language" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("language")}
        >
          LANGUAGE
        </button>
        <p className="font-bold text-[30px] -translate-y-2">.</p>
        <button
          className={`mx-2 ${clickedButton === "history" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("history")}
        >
          HISTORY
        </button>
      </div>

      {/* Display books */}
      <Courses currentCourses={currentCourses} />

      <Pagination
        totalPosts={filteredCourses.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <div className="flex justify-center items-center text-[13px] text-[#504C4C] -translate-x-1 mt-2">
        <span>{"{"}</span>
        <p>{`${filteredCourses.length} books`}</p>
        <span>{"}"}</span>
      </div>
    </div>
  );
};

export default page;
