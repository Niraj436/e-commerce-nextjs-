"use client";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
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

        <div className="flex  relative justify-center items-center gap-x-1 bg-black text-slate-100 rounded-full p-2 cursor-pointer hover:bg-slate-800 ">
          <FaShoppingCart className=" text-xl" />
          <p>Cart</p>
          <span className="absolute -right-2 -top-1 bg-white rounded-full text-orange-500 flex items-center justify-center shadow-lg text-xs px-1">
            0.0
          </span>
        </div>

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
