import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="h-20">
      <Container className="h-full flex items-center justify-between md:gap-x-10 md:justify-start">
        <Logo />

        <div className="w-full items-center md:flex gap-x-1 border-[1px]  bg-white rounded-full px-4 py-1.5 focus-within:border-orange-300">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for products"
            className="px-2 outline-none placeholder:text-sm flex-1"
          />
        </div>

        <div className="text-white flex justify-center items-center bg-gray-400 rounded-full p-2 hover:cursor-pointer hover:bg-orange-300">
          <FaUser className="pr-1" />
          <p>Login/Register</p>
        </div>

        <div className="flex  relative justify-center items-center gap-x-1 bg-black text-slate-100 rounded-full p-2 cursor-pointer hover:bg-slate-800 ">
            <FaShoppingCart className=" text-xl" />
            <p>Cart</p>
            <span className="absolute -right-2 -top-1 bg-white rounded-full text-orange-500 flex items-center justify-center shadow-lg text-xs px-1" >0.0</span>
        </div>
      </Container>
    </div>
  );
};

export default Header;
