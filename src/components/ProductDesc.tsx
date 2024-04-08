"use client"
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { addToCart } from '@/app/redux/cartSlice';

const ProductDesc = ({product}:any) => {
    const dispatch = useDispatch()
    const handleAdd = (product:any) => {
        dispatch(addToCart(product))
        toast.success(`${product.title} added to cart`)
     }

  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 p-4 gap-4 bg-white'>
        <div>
            <img src={product.image} alt="Product image" className='w-full h-full object-cover max-h-[700px] rounded-lg' />
        </div>
        <div className='flex flex-col justify-center gap-y-10'>
            <div>
                <p className='text-3xl font-semibold'>{product.title}</p>
                <p className='text-xl '>${product.price}</p>
            </div>
            <p className='text-gray-600'>{product.description}</p>
            

            <p>Category: {product.category}</p>

            <div className='flex items-center group cursor-pointer' onClick={()=> handleAdd(product)}>
                <button className='bg-slate-900 px-4 py-3 text-slate-100 rounded-sm border-r-2 border-slate-400'>Add to cart</button>
                <span className='bg-slate-900 px-4 py-3.5 group-hover:bg-orange-500'><FaShoppingCart className='text-white text-xl' /></span>
            </div>
            <p className='flex items-center gap-x-1 group'>
                <FaHeart className='group-hover:text-red-500'/>
                Add to wishlist</p>
           

        </div>
        <Toaster/>
    </div>
  )
}

export default ProductDesc