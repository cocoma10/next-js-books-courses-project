import connectDB from "../../../libs/mongoDB"
import Contact from "../../../models/Contact";
import { NextResponse } from "next/server";

//post a contact
export async function POST(req) {
    //await for the promise
    const {
      email,
      message
    } = await req.json();
    //connect to db
    await connectDB();
    //create item + import item model
    await Contact.create({
        email,
        message
    });
    return NextResponse.json({ message: "Contact success" }, { status: 201 });
  
}

export async function GET() {
  await connectDB();
  const contacts = await Contact.find();
  return NextResponse.json({ contacts });
}

export async function DELETE(req) {
  //get id from url
  const id = req.nextUrl.searchParams.get("id");
  await connectDB();
  await Contact.findByIdAndDelete(id);
  return NextResponse.json({ message: "Contact message deleted" }, { status: 200 });
}


