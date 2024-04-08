import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IProducts, IStateProps } from "../../type";

const CartTotal = () => {
  const { productData, userInfo } = useSelector(
    (state: IStateProps) => state.cart
  );
  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    const calculatedAmt = productData.reduce((acc: number, item: IProducts) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalAmt(calculatedAmt.toFixed(2) as any);
  }, [productData]);
  return (
    <div className="bg-white my-3">
      <div className="flex px-3 py-6 gap-x-2 justify-between items-center">
        <div className="flex gap-x-2">
          <p>Total amount: </p>
          <p className="font-bold">{totalAmt == 0 ? "$0" : `$${totalAmt}`}</p>
        </div>

        {userInfo ? (
            <div>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-500 hover:border-orange-700 rounded">
            Checkout
          </button>
            </div>
        ) : (
          <div>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-500 hover:border-orange-700 rounded disabled cursor-not-allowed">
              Checkout
            </button>
            <p>Please login  to continue</p>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default CartTotal;
