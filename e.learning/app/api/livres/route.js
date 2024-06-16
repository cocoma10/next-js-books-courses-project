import connectDB from "../../../libs/mongoDB";
import Livre from "../../../models/Livre";
import {NextResponse} from "next/server";

export async function POST(req) {
    //await for the promise
    const {
      title,
      pages,
      category,
      price,
      author,
      date,
      isbn,
      description,
      banner,
      pdf,
    } = await req.json();
    //connect to db
    await connectDB();
    //create item + import item model
    await Livre.create({
      title,
      pages,
      category,
      price,
      author,
      date,
      isbn,
      description,
      banner,
      pdf,
    });
    return NextResponse.json({ message: "Item created" }, { status: 201 });
  
}

//route for all
export async function GET(){
  await connectDB();
  const books=await Livre.find();
  return NextResponse.json({books});
} 


export async function DELETE(req){
  //get id from url
  const id = req.nextUrl.searchParams.get('id');
  await connectDB();
  await Livre.findByIdAndDelete(id);
  return NextResponse.json({message:"Book deleted"},{status:200});

}