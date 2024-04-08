import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProducts, IStateProps } from "../../type";
import { BsFillTrashFill } from "react-icons/bs";
import { decreaseQuantity, deleteProduct, increaseQuantity } from "@/app/redux/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const CartItem = () => {
    const dispatch = useDispatch()
  const { productData } = useSelector((state: IStateProps) => state.cart);

  const handleIncrease = (item:any) =>{
    dispatch(increaseQuantity(item))
  }
  const handleDecrease = (item:any) =>{
    dispatch(decreaseQuantity(item))
  }
  const handleRemove = (id:any) =>{
    dispatch(deleteProduct(id))
    toast.success(` Removed from cart`)
  }

  return (
    <div className="flex flex-col  gap-y-2 ">
      <div className="flex  items-center  justify-between bg-white p-2 font-semibold">
        <p className="w-1/4">Product</p>
        <p className="w-1/4 flex items-center justify-center">Quantity</p>
        <p className="w-1/4 flex items-center justify-center">SubTotal</p>
        <p className="w-1/4 flex items-center justify-center">Remove</p>
      </div>
      {productData.map((item:IProducts, i) => {
        return (
          <div
            className="flex  items-center justify-between bg-white px-1 py-2"
            key={item._id}
          >
            <div className="flex items-center gap-x-3 w-1/3 pl-3">
              <img src={item.image} alt="" className="size-16 object-cover" />
              <p className="">{item.title}</p>

            </div>
            <div className="w-1/3 flex items-center justify-center">
                <div className="flex gap-x-6 border-1 py-2 px-3 bg-slate-100 rounded-lg cursor-pointer ">
                    <p className="font-semibold" onClick={()=> handleDecrease(item)}>
                    &lt;
                    </p>
                    <p>{item.quantity}</p>
                    <p className="font-semibold" onClick={()=> handleIncrease(item)}>
                        &gt;
                    </p>
                </div>
            </div>
            <p className="w-1/3 flex items-center justify-center">
                ${item.price * item.quantity}
            </p>
            <p className="w-1/3 flex items-center justify-center cursor-pointer" onClick={()=> handleRemove(item._id)}>
               <BsFillTrashFill className="text-2xl text-red-600"/>
            </p>
          </div>
        );
      })}
      <Toaster/>
    </div>
  );
};

export default CartItem;
