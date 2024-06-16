"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Textarea } from "../../../@/components/ui/textarea";
import { Button } from "../../../@/components/ui/button";
import { NotebookPen } from "lucide-react";
import { Toaster, toast } from "sonner";
import { Input } from "../../../@/components/ui/input";

const Editform = ({
  id,
  title,
  pages,
  category,
  price,
  author,
  date,
  isbn,
  description,
  pdf,
  banner,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newPages, setNewPages] = useState(pages);
  const [newCategory, setNewCategory] = useState(category);
  const [newPrice, setNewPrice] = useState(price);
  const [newAuthor, setNewAuthor] = useState(author);
  const [newDate, setNewDate] = useState(date);
  const [newIsbn, setNewIsbn] = useState(isbn);
  const [newDescription, setNewDescription] = useState(description);

  const [newPdf, setNewPdf] = useState(pdf);
  const [newBanner, setNewBanner] = useState(banner);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/livres/${id}`, {
        cache: "no-store",
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newPages,
          newCategory,
          newPrice,
          newAuthor,
          newDate,
          newIsbn,
          newDescription,
          newPdf,
          newBanner,
        }),
      });
      if (!res.ok) {
        toast("Something went wrong ", {
          style: {
            backgroundColor: "#f44336",
            color: "#fff",
          },
        });
        throw new Error("Failed to update Book");
      }
      router.push("/dashboard/all_books");
      toast("Book updated", {
        style: {
          backgroundColor: "#4caf50",
          color: "#fff",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto mt-6">
      <p className="underline">Edit Book </p>
      <form onSubmit={handleSubmit}>
       
        <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} /> <br/>
        <Input value={newPages} onChange={(e) => setNewPages(e.target.value)} /><br/>
        <Input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} /><br/>
        <Input value={newPrice} onChange={(e) => setNewPrice(e.target.value)} /><br/>

        <Input
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        /><br/>
        <Input value={newDate} onChange={(e) => setNewDate(e.target.value)} /><br/>
        <Input value={newIsbn} onChange={(e) => setNewIsbn(e.target.value)} /><br/>
        <Textarea
          onChange={(e) => setNewDescription(e.target.value)}
          className="w-[500px] h-[200px] text-[15px] italic"
          value={newDescription}
        />
        <Input value={newPdf} onChange={(e) => setNewPdf(e.target.value)} /><br/>
       
        <Input
          value={newBanner}
          onChange={(e) => setNewBanner(e.target.value)}
        /><br/>
        <br />
        <p className="text-sm text-muted-foreground ml-6">
          to update hit the edit book button.
        </p>
        <div className="flex ml-6 justify-end -translate-x-9">
          <Button variant="ghost">
            <a href="/dashboard"></a> go back
          </Button>

          <button
            type="submit"
            className="bg-black rounded-sm p-1 px-2 text-white "
          >
            edit book
          </button>
        </div>{" "}
      </form>
      <Toaster />
    </div>
  );
};

export default Editform;
