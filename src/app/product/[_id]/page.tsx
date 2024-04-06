

import React from 'react'
interface Params {
    _id: number; 
}

const ProductDetail = ({params}: {params: Params}) => {
  
    return <p>Product id {params._id}</p>
  }

export default ProductDetail