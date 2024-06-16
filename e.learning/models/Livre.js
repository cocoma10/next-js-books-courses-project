import mongoose from "mongoose";

const livreSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
    },
    pdf: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Livre = mongoose.models.Livre || mongoose.model("Livre", livreSchema);

export default Livre;
