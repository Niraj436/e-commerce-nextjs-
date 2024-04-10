"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa"
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { IProducts, IStateProps } from "../../type";
import Link from "next/link";
import { addUSer, deleteUser } from "@/app/redux/cartSlice";

const Header = () => {
  const dispatch = useDispatch()
  const { data: session } = useSession();
  const {productData, orderData} = useSelector((state:IStateProps)=>state.cart)
  const [totalAmt, setTotalAmt] = useState(0)
  useEffect(()=>{
     const calculatedAmt = productData.reduce((acc:number, item:IProducts) =>{
      return acc + (item.price * item.quantity)
     },0)
     setTotalAmt(calculatedAmt.toFixed(2) as any)
  },[productData])
  useEffect(()=>{
    if(session){
      dispatch(addUSer({
        name:session.user?.name,
        email:session.user?.email,
        image: session.user?.image
      }))
    }else{
      dispatch(deleteUser())
    }
  },[session,dispatch])
  return (
    <div className="h-20 sticky top-0 z-50 bg-orange-50">
      <Container className="h-full flex items-center justify-between md:gap-x-10 md:justify-start ">
        <Logo />

        <div className="w-full hidden items-center md:flex gap-x-1 border-[1px]  bg-white rounded-full px-4 py-1.5 focus-within:border-orange-300">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for products"
            className="px-2 outline-none placeholder:text-sm flex-1"
          />
        </div>
        {!session && (
          <div
            className="text-white flex justify-center items-center bg-gray-400 rounded-full p-2 hover:cursor-pointer hover:bg-orange-300"
            onClick={() => signIn()}
          >
            <FaUser className="pr-1" />
            <p>Login/Register</p>
          </div>
        )}
        {
          session && <img src={session?.user?.image as string} alt="User image"  className="rounded-full size-10 cursor-pointer object-cover"/>
        }
      <Link href={"/cart"}>
        <div className="flex  relative justify-center items-center gap-x-1 bg-black text-slate-100 rounded-full p-2 cursor-pointer hover:bg-slate-800 ">
          <FaShoppingCart className=" text-xl" />
          <p>{totalAmt == 0 ? "Cart" : `$${totalAmt}`}</p>
          <span className="absolute -right-2 -top-1 bg-white rounded-full text-orange-500 flex items-center justify-center shadow-lg text-xs py-1 px-1.5">
            {productData && productData.length}
          </span>
        </div>
        </Link>
        {
          
          // @ts-ignore
          orderData?.order?.length > 0 && session && (
            <Link href={"/order"}>
            <div
            className="text-white flex justify-center items-center bg-slate-900 rounded-full p-2 hover:cursor-pointer hover:bg-slate-700"
           
          >
            <FaBookmark className="pr-1 text-lg" />
            <p>Order</p>
          </div>
          </Link>
          )
        }
        {session && (
          <div
            className="text-white flex justify-center items-center bg-gray-400 rounded-full p-2 hover:cursor-pointer hover:bg-orange-300"
            onClick={() => signOut()}
          >
            <RiLogoutBoxRLine className="pr-1 text-2xl" />
            <p>Logout</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
