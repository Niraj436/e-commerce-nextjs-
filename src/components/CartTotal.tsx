"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProducts, IStateProps } from "../../type";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { resetCart, saveOrder } from "@/app/redux/cartSlice";

const CartTotal = () => {
  const dispatch = useDispatch();
  const { productData, userInfo } = useSelector(
    (state: IStateProps) => state.cart
  );
  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    const calculatedAmt = productData.reduce((acc: number, item: IProducts) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalAmt(calculatedAmt.toFixed(2) as any);
  }, [productData]);

  // stripe

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  const { data: session } = useSession();

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: productData,
        email: session?.user?.email,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(
        saveOrder({
          order: productData,
          id: data.id,
        })
      );
      stripe?.redirectToCheckout({ sessionId: data.id });
      dispatch(resetCart());
    }else{
      throw new Error("Failed to create stripe")
    }
  };
  return (
    <div className="bg-white my-3">
      <div className="flex px-3 py-6 gap-x-2 justify-between items-center">
        <div className="flex gap-x-2">
          <p>Total amount: </p>
          <p className="font-bold">{totalAmt == 0 ? "$0" : `$${totalAmt}`}</p>
        </div>

        {userInfo ? (
          <div>
            <button
              onClick={() => handleCheckout()}
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-500 hover:border-orange-700 rounded"
            >
              Checkout
            </button>
          </div>
        ) : (
          <div>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-500 hover:border-orange-700 rounded disabled cursor-not-allowed">
              Checkout
            </button>
            <p>Please login to continue</p>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default CartTotal;
