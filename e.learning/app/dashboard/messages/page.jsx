"use client";
import React, { useEffect, useState } from "react";
import DeleteContact from "../../_components/DeleteContact";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../@/components/ui/table";
import { Pencil, X } from "lucide-react";
const page = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    async function fetchLivres() {
      const response = await fetch("http://localhost:3000/api/contacts", {
        method: "GET",
        //mode: "cors", // Specify CORS mode
      });
      const data = await response.json();
      setContacts(data.contacts);
    }

    fetchLivres();
  }, []);

  return (
    <div className="mt-12 w-full">
      <Table>
        <TableCaption className="font-bold mb-5">
          A list of recent messages.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>MESSAE</TableHead>    
            <TableHead className="text-right">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((msg) => (
            <TableRow key={msg.invoice}>
              <TableCell className="font-medium">{msg._id}</TableCell>
              <TableCell>{msg.email}</TableCell>
              <TableCell>{msg.message}</TableCell>
             
              <TableCell className="text-right flex translate-x-10">
                <DeleteContact id={msg._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right ">{contacts.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default page;
