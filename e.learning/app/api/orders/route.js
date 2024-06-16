import connectDB from "../../../libs/mongoDB";
import Order from "../../../models/Order";
import { NextResponse } from "next/server";

export async function POST(req) {
  // await for the promise
  const { user_id, cartItems } = await req.json();

  // connect to db
  await connectDB();

  // Check if the user already has an order
  const existingOrder = await Order.findOne({ user_id }).sort({ _id: -1 });

  if (existingOrder) {
    // If the user has an existing order, push the new cart items to the existing order
    existingOrder.cartItems.push(...cartItems);
    await existingOrder.save();
    return NextResponse.json({ message: "Order updated" }, { status: 200 });
  } else {
    // If the user doesn't have an existing order, create a new order with the new cart items
    await Order.create({
      user_id,
      cartItems,
    });
    return NextResponse.json({ message: "Order created" }, { status: 201 });
  }
}

export async function GET() {
  // connect to db
  await connectDB();

  // find all orders
  const orders = await Order.find();

  // return orders as json
  return NextResponse.json({ orders });
}


export async function DELETE(req){
  //get id from url
  const id = req.nextUrl.searchParams.get('id');
  await connectDB();
  await Order.findByIdAndDelete(id);
  return NextResponse.json({message:"Order deleted"},{status:200});

}