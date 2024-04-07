

import { Productdata } from "@/app/constrants/data";

export const getProducts = async () =>{
    const res= await fetch("https://fakestoreapiserver.reactbd.com/smart");
    if(!res.ok){
        throw new Error("Failed to fetch products")
    }
    return res.json()
}
export const getTrendingProducts = async () =>{
    const res= await fetch("https://fakestoreapiserver.reactbd.com/smarttrending");
    if(!res.ok){
        throw new Error("Failed to fetch products")
    }
    return res.json()
}

export const getProduct =  (_id:number) => {
    // console.log(Productdata)
    // console.log(_id)
    const item = Productdata.find((product)=> {
        return product._id === _id;
    })
    return item
}