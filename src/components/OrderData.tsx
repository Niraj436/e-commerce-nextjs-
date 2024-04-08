"use client";
import { resetOrder } from "@/app/redux/cartSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const OrderData = () => {
  const dispatch = useDispatch();
  const { orderData } = useSelector((state: any) => state.cart);
  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    const calculatedAmt = orderData?.order?.reduce((acc: number, item: any) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalAmt(calculatedAmt?.toFixed(2) as any);
  }, [orderData.order]);

  const handleReset = () => {
    dispatch(resetOrder());
    toast.success("Order reset successfull")
  };
  return (
    <div>
       {
        orderData.order && orderData.order.length > 0 ? (
          <div className="flex flex-col  gap-y-2 ">
          <div className="flex  items-center  justify-between bg-white p-2 font-semibold">
            <p className="w-1/4">Product</p>
            <p className="w-1/4 flex items-center justify-center">Quantity</p>
            <p className="w-1/4 flex items-center justify-center">Unit price</p>
            <p className="w-1/4 flex items-center justify-center">Subtotal</p>
          </div>
          {orderData.order.map((item: any) => {
            return (
              <div
                className="flex  items-center justify-between bg-white px-1 py-2"
                key={item._id}
              >
                <div className="flex items-center gap-x-3 w-1/3 pl-3">
                  <img src={item.image} alt="" className="size-16 object-cover" />
                  <p className="">{item.title}</p>
                </div>
                <div className="w-1/3 flex items-center justify-center">
                  <p>{item.quantity}</p>
                </div>
                <p className="w-1/3 flex items-center justify-center cursor-pointer">
                  ${item?.price}
                </p>
                <p className="w-1/3 flex items-center justify-center">
                  ${item.price * item.quantity}
                </p>
              </div>
            );
          })}
          <div className="flex items-center justify-between bg-gray-200 py-3 px-8 font-semibold my-4">
            <p>Payment Details</p>
            <p>Total amount paid : ${totalAmt}</p>
          </div>
          <div>
            <button
              className="px-3 py-2 bg-slate-900 text-white rounded-lg hover:bg-orange-500"
              onClick={() => handleReset()}
            >
              Reset order
            </button>
          </div>
        </div>
        ): (
          <div className="h-36 bg-white flex flex-col justify-center items-center  text-red-500 gap-y-3">
            <p className="text-2xl  font-bold">No orders done yet</p>
            <Link href={"/"} className='px-3 py-2 bg-slate-900 text-white rounded-lg hover:bg-orange-500'>Shop now</Link>
          
          </div>
        )
       }
       <Toaster/>
    </div>
   
  );
};

export default OrderData;
