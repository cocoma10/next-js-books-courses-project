//api for courses
import connectDB from "./../../../libs/mongoDB";
import Cart from "../../../models/Cart";
import { NextResponse } from "next/server";

//post a book api
export async function POST(req) {
  const { Cartpath, user_id, Itemtype, title, category, price, photo } =
    await req.json();

  if (!photo) {
    return NextResponse.json({ error: "photo is required" }, { status: 400 });
  }

  await connectDB();
  await Cart.create({
    Cartpath,
    user_id,
    Itemtype,
    title,
    category,
    price,
    photo,
  });
  return NextResponse.json({ message: "Cart item created" }, { status: 201 });
}
//fetch all cart ietms api
export async function GET() {
  await connectDB();
  const carts = await Cart.find();
  return NextResponse.json({ carts });
}

export async function DELETE(req) {
  //get id from url
  const id = req.nextUrl.searchParams.get("id");
  await connectDB();
  await Cart.findByIdAndDelete(id);
  return NextResponse.json({ message: "Cart item deleted" }, { status: 200 });
}
