"use client"
import Container from '@/components/Container'
import React from 'react'
import { useSelector } from 'react-redux'
import { IStateProps } from '../../../type'
import CartItem from '@/components/CartItem'
import CartTotal from '@/components/CartTotal'

const CartPage = () => {
    const {productData} = useSelector((state:IStateProps)=>state.cart)

  return (
    <Container>
        <p className='text-2xl font-semibold mb-2'>Cart </p>
        <div>{
             productData && productData.length > 0 ?  <>
                
             <CartItem/>
             <CartTotal/>
             </>
: (
          <div className='bg-white h-36 flex items-center justify-center text-2xl text-red-600 font-semibold'>
             <h1>Your cart is empty</h1>
          </div>
             )
            }
        </div>
    </Container>
  )
}

export default CartPage