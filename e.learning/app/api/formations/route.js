//api for courses
import connectDB from "./../../../libs/mongoDB"
import Formation from "../../../models/Formation";
import { NextResponse } from "next/server";

//post a book api
export async function POST(req) {
    //await for the promise
    const {
      title,
      time,
      category,
      price,
      formatteur,
      date,
      description,
      banner,
      video,
    } = await req.json();
    //connect to db
    await connectDB();
    //create item + import item model
    await Formation.create({
        title,
        time,
        category,
        price,
        formatteur,
        date,
        description,
        banner,
        video,
    });
    return NextResponse.json({ message: "Course created" }, { status: 201 });
  
}
//fetch all books api
export async function GET(){
    await connectDB();
    const courses=await Formation.find();
    return NextResponse.json({courses});
  }


  export async function DELETE(req){
    //get id from url
    const id = req.nextUrl.searchParams.get('id');
    await connectDB();
    await Formation.findByIdAndDelete(id);
    return NextResponse.json({message:"Course deleted"},{status:200});
  
  }