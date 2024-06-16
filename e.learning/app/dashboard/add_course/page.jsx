"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Textarea } from "../../../@/components/ui/textarea";
import { Button } from "../../../@/components/ui/button";
import { NotebookPen } from "lucide-react";
import { Toaster, toast } from "sonner";
import { Input } from "../../../@/components/ui/input";

const page = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [formatteur, setFormatteur] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [banner, setBanner] = useState("");
  const [video, setViedo] = useState("");

  const router = useRouter();
  const [succ, setSucc] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/formations", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          time,
          category,
          price,
          formatteur,
          date,
          description,
          banner,
          video,
        }),
      });
      if (res.ok) {
        setSucc(true);
        router.push("/dashboard/all_courses");
      } else {
        setErr(true);
      }
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };

  useEffect(() => {
    if (succ) {
      toast("Course created", {
        style: {
          backgroundColor: "#4caf50",
          color: "#fff",
        },
      });
    } else if (err) {
      toast("Error occurred", {
        style: {
          backgroundColor: "#f44336",
          color: "#fff",
        },
      });
    }
  }, [succ, err]);

  return (
    <div className="mx-auto mt-6">
      <p className="underline">Add Course </p>
      <form onSubmit={handleSubmit}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />{" "}
        <br />
        <Input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="time"
        />
        <br />
        <Input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="category"
        />
        <br />
        <Input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
        />
        <br />
        <Input
          value={formatteur}
          onChange={(e) => setFormatteur(e.target.value)}
          placeholder="formatteur"
        />
        <br />
        <Input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="date"
        />
        <br />
        <Textarea
          onChange={(e) => setDescription(e.target.value)}
          className="w-[500px] h-[200px] text-[15px] italic"
          value={description}
          placeholder="description"
        />{" "}
        <br />
        <Input
          value={banner}
          onChange={(e) => setBanner(e.target.value)}
          placeholder="banner path"
        />
        <br />
        <Input
          value={video}
          onChange={(e) => setViedo(e.target.value)}
          placeholder="video path"
        />
        <br />
        <br />
        <p className="text-sm text-muted-foreground ml-6">
          to update hit the add course button.
        </p>
        <div className="flex ml-6 justify-end -translate-x-9">
          <Button variant="ghost">
            <a href="/dashboard"></a> go back
          </Button>

          <button
            type="submit"
            className="bg-black rounded-sm p-1 px-2 text-white "
          >
            add course
          </button>
        </div>{" "}
      </form>
      <Toaster />
    </div>
  );
};

export default page;
