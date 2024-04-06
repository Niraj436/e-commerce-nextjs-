import { getProducts } from '@/app/api/products/getProducts';
import React from 'react'
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Product from './Product';
import { IProducts } from '../../type';
import Container from './Container';



const Products = () => {
    const [products, setProducts] = useState([])
   useEffect(()=>{
    getProducts().then((data)=>{
      if(data.error){
        toast.error(data.error);
      }else{
        setProducts(data)
      }
    })
   },[])
  return (
    <Container className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 '>
        {
            products.map((item:IProducts)=>{
                return (
                    <Product item={item} key={item._id}/>
                )
            })
        }
    </Container>
  )
}

export default Products