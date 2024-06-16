import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    Cartpath: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  
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
   
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
