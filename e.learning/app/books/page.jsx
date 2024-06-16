"use client";
import React, { useEffect, useState } from "react";
//import Hero2 from "../_components/Hero2";
import { Search } from "lucide-react";
import Books from "./../_components/Books";
import Pagination from "./../_components/Pagination";
const page = () => {
  const [books, setBooks] = useState([]);
  const [clickedButton, setClickedButton] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  //for pagination-------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredBooks.slice(firstPostIndex, lastPostIndex);
  //-------------------------------

  useEffect(() => {
    fetchBooks();
  }, []);
  useEffect(() => {
    filterBooksByCategory();
  }, [selectedCategory]);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/livres", {
        method: "GET",
      });
      const data = await response.json();
      console.log("Fetched books:", data.books); // Log fetched books
      setBooks(data.books);
      setFilteredBooks(data.books);

      // Inside the fetchBooks function
      console.log("Fetched books:", data.books); // Log fetched books

      // Inside the filterBooksByCategory function
      console.log("Filtered books:", filteredBooks); // Log filtered books
    } catch (error) {
      console.error("Error fetching books:", error); // Log error
    }
  };
  //filtering by category
  const filterBooksByCategory = () => {
    if (selectedCategory && selectedCategory !== "all") {
      const filteredList = books.filter(
        (book) => book.category === selectedCategory
      );
      setFilteredBooks(filteredList);
    } else {
      setFilteredBooks(books);
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
          className={`mx-2 ${clickedButton === "fiction" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("fiction")}
        >
          FICTION
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
          className={`mx-2${clickedButton === "fantasy" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("fantasy")}
        >
          FANTASY
        </button>
        <p className="font-bold text-[30px] -translate-y-2">.</p>
        <button
          className={`mx-2 ${
            clickedButton === "philosophy" ? "underline" : ""
          }`}
          onClick={() => handleCategoryClick("philosophy")}
        >
          PHILOSOPHY
        </button>
        <p className="font-bold text-[30px] -translate-y-2">.</p>
        <button
          className={`mx-2 ${clickedButton === "children" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("children")}
        >
          CHILDREN
        </button>
        <p className="font-bold text-[30px] -translate-y-2">.</p>
        <button
          className={`mx-2 ${clickedButton === "horror" ? "underline" : ""}`}
          onClick={() => handleCategoryClick("horror")}
        >
          HORROR
        </button>
      </div>

      {/* Display books */}

      <Books currentPosts={currentPosts} />
      <Pagination
    
        totalPosts={filteredBooks.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        
      />
      <div className="flex justify-center items-center text-[13px] text-[#504C4C] -translate-x-1 mt-2">
        <span>{"{"}</span>
        <p>{`${filteredBooks.length} books`}</p>
        <span>{"}"}</span>
      </div>
    </div>
  );
};

export default page;
