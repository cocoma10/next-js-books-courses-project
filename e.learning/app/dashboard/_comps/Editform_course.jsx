"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Textarea } from "../../../@/components/ui/textarea";
import { Button } from "../../../@/components/ui/button";
import { NotebookPen } from "lucide-react";
import { Toaster, toast } from "sonner";
import { Input } from "../../../@/components/ui/input";

const Editform_course = ({
  id,
  title,
  time,
  category,
  price,
  formatteur,
  date,
  description,
  banner,
  video,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newTime, setNewTime] = useState(time);
  const [newCategory, setNewCategory] = useState(category);
  const [newPrice, setNewPrice] = useState(price);
  const [newFormatteur, setNewFormatteur] = useState(formatteur);
  const [newDate, setNewDate] = useState(date);
  const [newDescription, setNewDescription] = useState(description);

  const [newBanner, setNewBanner] = useState(banner);
  const [newVideo, setNewVideo] = useState(video);


  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/formations/${id}`, {
        cache: "no-store",
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newTime,
          newCategory,
          newPrice,
          newFormatteur,
          newDate,
          newDescription,
          newBanner,
          newVideo,

        }),
      });
      if (!res.ok) {
        toast("Something went wrong ", {
          style: {
            backgroundColor: "#f44336",
            color: "#fff",
          },
        });
        throw new Error("Failed to update Course");
      }
      router.push("/dashboard/all_courses");
      toast("Course updated", {
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
      <p className="underline">Edit Course </p>
      <form onSubmit={handleSubmit}>
       
        <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} /> <br/>
        <Input value={newTime} onChange={(e) => setNewTime(e.target.value)} /><br/>
        <Input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} /><br/>
        <Input value={newPrice} onChange={(e) => setNewPrice(e.target.value)} /><br/>

        <Input
          value={newFormatteur}
          onChange={(e) => setNewFormatteur(e.target.value)}
        /><br/>
        <Input value={newDate} onChange={(e) => setNewDate(e.target.value)} /><br/>
        <Textarea
          onChange={(e) => setNewDescription(e.target.value)}
          className="w-[500px] h-[200px] text-[15px] italic"
          value={newDescription}
        />
       
        <Input
          value={newBanner}
          onChange={(e) => setNewBanner(e.target.value)}
        /><br/>
                <Input value={newVideo} onChange={(e) => setNewVideo(e.target.value)} /><br/>

        <br />
        <p className="text-sm text-muted-foreground ml-6">
          to update hit the edit course button.
        </p>
        <div className="flex ml-6 justify-end -translate-x-9">
          <Button variant="ghost">
            <a href="/dashboard"></a> go back
          </Button>

          <button
            type="submit"
            className="bg-black rounded-sm p-1 px-2 text-white "
          >
            edit course
          </button>
        </div>{" "}
      </form>
      <Toaster />
    </div>
  );
};

export default Editform_course;
