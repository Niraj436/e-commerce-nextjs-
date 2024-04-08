"use client"
import React from "react";
import { ItemProps } from "../../type";
import { IoMdStar } from "react-icons/io";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const Product = ({ item }: ItemProps) => {
  const dispatch = useDispatch()

  const handleAdd = (item:any) => {
     dispatch(addToCart(item))
     toast.success(`${item.title} added to cart`)
  }
  return (
    <div className="w-full rounded-lg overflow-hidden cursor-pointer border">
      <Link href={`/product/${item._id}`}>
        <div className="w-full h-96 group overflow-hidden relative ">
          <img
            src={item?.image}
            alt="Product image"
            className="w-full h-full object-cover group-hover:scale-105 duration-200 rounded-t-lg"
          />
          {item.isNew && (
            <span className="absolute top-2 right-2  font-medium shadow-md text-xs py-1 px-2 rounded-full bg-slate-50 group-hover:bg-orange-500 group-hover:text-white ">
              {" "}
              New arrival
            </span>
          )}
        </div>
        </Link>
        <div className="px-4 py-4 flex flex-col gap-y-2  ">
          <div className="flex justify-between">
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
          <div className="flex justify-between">
            <button onClick={()=> handleAdd(item)} className="px-3 py-1 t text-white rounded-full bg-orange-500 hover:bg-orange-700">
              Add to cart
            </button>
            <div className="flex">
              {[...Array(item.rating)].map((star, index) => (
                <IoMdStar className="text-yellow-400" key={index} />
              ))}
            </div>
          </div>
        </div>
     <Toaster/>
    </div>
  );
};

export default Product;
