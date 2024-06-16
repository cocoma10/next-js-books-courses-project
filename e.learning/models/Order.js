import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    cartItems: [
      {
        title: {
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
        photo: {
          type: String,
          required: true,
        },
        Itemtype: {
          type: String,
          required: true,
        },
        Itempath: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
