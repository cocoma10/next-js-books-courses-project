import connectDB from "../../../../libs/mongoDB";
import Livre from "../../../../models/Livre";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    try {
      const { id } = params;
      const {
        newTitle: title,
        newPages: pages,
        newCategory: category,
        newPrice: price,
        newAuthor: author,
        newDate: date,
        newISBN: isbn,
        newDescription: description,
        newPdf: pdf,
        newBanner: banner,
      } = await req.json();
  
      await connectDB();
      
      const updatedBook = await Livre.findByIdAndUpdate(
        id,
        {
          title,
          description,
          pages,
          category,
          price,
          author,
          date,
          isbn,
          pdf,
          banner,
        },
        { new: true } // This option returns the updated document
      );
  
      if (!updatedBook) {
        return NextResponse.json({ message: "Book not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Book Updated", book: updatedBook }, { status: 200 });
    } catch (error) {
      console.error('Error updating book:', error);
      return NextResponse.json({ message: "Failed to update book", error: error.message }, { status: 500 });
    }
  }

export async function GET(req, { params }) {
  const { id } = params;
  await connectDB();
  const livre = await Livre.findOne({ _id: id });
  return NextResponse.json({ livre }, { status: 200 });
}
