"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function add() {
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [isbn, setIsbn] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState("");
  const [pdf, setPdf] = useState("");
  const router = useRouter();

  //fetching
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !title ||
      !pages ||
      !category ||
      !price ||
      !author ||
      !date ||
      !isbn ||
      !description ||
      !banner ||
      !pdf
    ) {
      alert("All fields are mandatory");
    }
    try {
      const res = await fetch("http://localhost:3000/api/livres", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          pages,
          category,
          price,
          author,
          date,
          isbn,
          description,
          banner,
          pdf,
        }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to Add the book");
      }
    } catch (error) {
      console.error("Error while adding book:", error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border border-black"
        />{" "}
        <br />
        <input
          type="number"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          placeholder="Pages"
          className="border border-black"
        />{" "}
        <br />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="border border-black"
        />{" "}
        <br />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="border border-black"
        />{" "}
        <br />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className="border border-black"
        />{" "}
        <br />
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          className="border border-black"
        />{" "}
        <br />
        <input
          type="number"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          placeholder="ISBN"
          className="border border-black"
        />{" "}
        <br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border border-black"
        ></textarea>{" "}
        <br />
        <input
          type="text"
          value={banner}
          onChange={(e) => setBanner(e.target.value)}
          placeholder="Banner"
          className="border border-black"
        />{" "}
        <br />
        <input
          type="text"
          value={pdf}
          onChange={(e) => setPdf(e.target.value)}
          placeholder="PDF"
          className="border border-black"
        />
        <br />
        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
