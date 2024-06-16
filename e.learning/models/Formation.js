import mongoose from "mongoose";

const formationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    time: {
      type: String,
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
    formatteur: {
      type: String,
      required: true,
    },
    date: {
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
    video: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Formation = mongoose.models.Formation || mongoose.model("Formation", formationSchema);

export default Formation;
