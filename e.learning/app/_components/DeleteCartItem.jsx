import React from 'react'
import { X } from "lucide-react";

const DeleteCartItem = ({id}) => {
    const removeItem = async () => {
        const res = await fetch(`http://localhost:3000/api/cart?id=${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          window.location.reload();
        }
      };
  return (
    <a onClick={removeItem}>
      <X />
    </a>
  )
}

export default DeleteCartItem
