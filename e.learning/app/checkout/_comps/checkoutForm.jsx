import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
//import OrderApi from '../../_utils/OrderApis'
//import CartApis from '../../_utils/CartApis';

const CheckoutForm = ({ amount }) => {
  const { cart, setCart } = useState([]);

  const { user } = useUser();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrorMessage] = useState();

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };
    // Create New Order
    createOrder();

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    const res = await fetch("api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });
    const clientSecret = await res.json();

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
    }
  };
  const createOrder = async () => {
    // Fetch all cart items
    const res = await fetch("/api/cart");
    const cartItems = await res.json();

    // Fetch all orders
    const ordersRes = await fetch("/api/orders");
    const orders = await ordersRes.json();

    // Filter orders based on the authenticated user's ID
    const userOrders = orders.orders.filter(
      (order) => order.user_id === user.id
    );

    // Create a new order with the user ID and cart items
    const newOrder = {
      user_id: user.id,
      cartItems: cartItems.carts.map((item) => ({
        title: item.title,
        category: item.category,
        price: item.price,
        photo: item.photo,
        Itemtype: item.Itemtype,
        Itempath: item.Cartpath,
      })),
    };

    // Add the new order to the filtered orders
    userOrders.push(newOrder);

    // Send a POST request to the orders API
    await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });

    // Delete each cart item
    for (const item of cartItems.carts) {
      await fetch(`/api/cart?id=${item._id}`, {
        method: "DELETE",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-32 md:mx-[320px] mt-12">
        <PaymentElement />
        <button className="w-full p-2 mt-4 text-white rounded-md bg-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
