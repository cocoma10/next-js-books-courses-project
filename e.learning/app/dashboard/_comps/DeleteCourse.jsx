import React from "react";
import { CircleX } from "lucide-react";
const DeleteBook = ({ id }) => {
  const removeTask = async () => {
    const res = await fetch(`http://localhost:3000/api/formations?id=${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      window.location.reload();
    }
  };
  return (
    <a onClick={removeTask} className=" text-black font-bold -translate-y-3 ">
      <CircleX size={25} className="translate-y-3 cursor-pointer" />
    </a>
  );
};

export default DeleteBook;
