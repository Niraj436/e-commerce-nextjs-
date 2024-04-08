import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../../../type";
interface StateStore {
  productData: IProducts[];
  userInfo: null | string;
  orderData: [];
}
const initialState: StateStore = {
  productData: [],
  userInfo: null,
  orderData: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find((item) => {
        return item._id === action.payload._id;
      });
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find((item) => {
        return item._id === action.payload._id;
      });
      if (existingProduct) {
        existingProduct.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find((item) => {
        return item._id === action.payload._id;
      });
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },
    addUSer: (state, action) => {
      state.userInfo = action.payload;
    },
    deleteUser: (state) => {
      state.userInfo = null;
    },
    resetCart: (state) => {
      state.productData = [];
    },
    saveOrder: (state, action) => {
      state.orderData = action.payload;
    },
    resetOrder: (state) => {
      state.orderData = [];
    },
  },
});

export const {
  addToCart,
  deleteProduct,
  increaseQuantity,
  decreaseQuantity,
  addUSer,
  deleteUser,
  resetCart,
  saveOrder,
  resetOrder,
} = cartSlice.actions;

export default cartSlice.reducer;
