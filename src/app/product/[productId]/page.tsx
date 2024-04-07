"use client";
import { getProduct, getTrendingProducts } from "@/app/api/products/getProducts";
import Container from "@/components/Container";
import Product from "@/components/Product";
import React from "react";
import { IProducts } from "../../../../type";
import ProductDesc from "@/components/ProductDesc";

interface Params {
  productId: string;
}

const ProductDetail = async ({ params }: { params: Params }) => {
  const product = getProduct(parseInt(params.productId));
  // console.log(product);

  const trending = await getTrendingProducts()
  
  return(
    
    <Container>
        <ProductDesc product={product}/>
        <p className="text-xl font-semibold py-2">Trending Products</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {
            trending.map((item:IProducts)=> (
              <Product item={item} key={item._id} />
            ))
          }
        </div>
      
    </Container>
  ) 
};

export default ProductDetail;
