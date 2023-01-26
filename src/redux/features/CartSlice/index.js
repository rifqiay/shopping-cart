import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {
    items: [
      {
        productId: "uuid1",
        name: "Black Hoddie",
        type: "Hodie black",
        color: "Black",
        size: "M",
        price: 2000,
        photo:
          "https://media.istockphoto.com/id/1436346820/id/foto/kaus-berkerudung-warna-hitam-wanita.jpg?s=612x612&w=0&k=20&c=mMnuoflf3lTGEe-wx6O_3lN7cDWImF5aABdOhscjV1Q=",
        quantity: 1,
        totalPrice: null,
      },
      {
        productId: "uuid2",
        name: "Blue Hoddie",
        type: "Hodie blue",
        color: "blue",
        size: "M",
        price: 1500,
        photo:
          "https://media.istockphoto.com/id/1142211730/id/foto/depan-kaus-dengan-tudung-terisolasi-di-latar-belakang-putih.jpg?s=612x612&w=0&k=20&c=Ni5axCQIrSwlXu2U_TlqWWrpI4OdSquYJ8TGry7XEq4=",
        quantity: 1,
        totalPrice: null,
      },
    ],
    totalAmount: 0,
  },
  wishList: [],
  checkout: [],
};

let totalAmount = 0;
for (let i = 0; i < initialState.cart.items.length; i++) {
  totalAmount += initialState.cart.items[i].price;
}
initialState.cart.totalAmount = totalAmount;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementPrice: (state, action) => {
      const { productId } = action.payload;
      const item = state.cart.items.find(
        (item) => item.productId === productId
      );
      if (item.totalPrice === null) {
        item.totalPrice += item.price;
      } else {
        item.quantity++;
        item.totalPrice += item.price;
        state.cart.totalAmount += item.price;
      }
    },
    decrementPrice: (state, action) => {
      const { productId } = action.payload;
      const item = state.cart.items.find(
        (item) => item.productId === productId
      );

      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice -= item.price;
        state.cart.totalAmount -= item.price;
      }
    },
    addToWishList: (state, action) => {
      state.wishList.push(action.payload);
      const { productId } = action.payload;
      const item = state.cart.items.find(
        (item) => item.productId === productId
      );
      const objWithIdIndex = state.cart.items.findIndex(
        (obj) => obj.productId === productId
      );

      if (objWithIdIndex > -1) {
        state.cart.items.splice(objWithIdIndex, 1);
        if (item.totalPrice === null) {
          state.cart.totalAmount -= item.price;
        } else {
          state.cart.totalAmount -= item.totalPrice;
        }
      }
    },
    removeItem: (state, action) => {
      const { productId } = action.payload;
      const item = state.cart.items.find(
        (item) => item.productId === productId
      );
      const objWithIdIndex = state.cart.items.findIndex(
        (obj) => obj.productId === productId
      );

      if (objWithIdIndex > -1) {
        state.cart.items.splice(objWithIdIndex, 1);
        if (item.totalPrice === null) {
          state.cart.totalAmount -= item.price;
        } else {
          state.cart.totalAmount -= item.totalPrice;
        }
      }
    },
    checkoutItems: (state, action) => {
      state.checkout.push(state.cart);
    },
  },
});

export const {
  incrementPrice,
  decrementPrice,
  addToWishList,
  removeItem,
  checkoutItems,
} = cartSlice.actions;

export default cartSlice.reducer;
