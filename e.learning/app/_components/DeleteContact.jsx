import React from 'react'
import { X } from "lucide-react";

const DeleteContact = ({id}) => {
    const removeItem = async () => {
        const res = await fetch(`http://localhost:3000/api/contacts?id=${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          window.location.reload();
        }
      };
  return (
    <a onClick={removeItem} className='cursor-pointer'>
      <X />
    </a>
  )
}

export default DeleteContact
