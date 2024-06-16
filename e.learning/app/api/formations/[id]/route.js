import connectDB from "../../../../libs/mongoDB";
import Formation from "../../../../models/Formation";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    try {
      const { id } = params;
      const {
        newTitle: title,
        newTime: time,
        newCategory: category,
        newPrice: price,
        newFormatteur: formatteur,
        newDate: date,
        newDescription: description,
        newBanner: banner,
        newVideo: video,
      } = await req.json();
  
      await connectDB();
      
      const updatedCourse = await Formation.findByIdAndUpdate(
        id,
        {
          title,
          description,
          time,
          category,
          price,
          formatteur,
          date,
          banner,
          video,

        },
        { new: true } // This option returns the updated document
      );
  
      if (!updatedCourse) {
        return NextResponse.json({ message: "Course not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Course Updated", book: updatedCourse }, { status: 200 });
    } catch (error) {
      console.error('Error updating course:', error);
      return NextResponse.json({ message: "Failed to update course", error: error.message }, { status: 500 });
    }
  }



export async function GET(req, { params }) {
    const { id } = params;
    await connectDB();
    const course = await Formation.findOne({ _id: id });
    return NextResponse.json({ course }, { status: 200 });
  }
  