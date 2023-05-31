import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCard(state, action) {
      const product = action.payload;
      return [
        ...state,
        {
          ...product,
          qty: product?.qty,
          totalprice: product?.price,
        },
      ];
    },
    removeCart(state, action) {
      const product = action.payload;
      console.log(product)
      const newstate = state.filter((item) => {
        if (item.id === product.id) {
          if (
            JSON.stringify(item.description) !==
            JSON.stringify(product.description)
          ) {
            return item;
          }
        } else {
          return item;
        }
      });
      console.log(newstate);
      return newstate;
    },
    decCart(state, action) {
      const product = action.payload;
      console.log(product)
      state.map((i) => {
        if (
          i.name === product.name &&
          i.price === product.price &&
          JSON.stringify(i.description) === JSON.stringify(product.description)
        ) {
          i.qty -= 1;
          i.totalprice -= i.price;
        }
      });
      return state;
    },
    incCart(state, action) {
      const product = action.payload;
      console.log(product)
      return state.map((i) =>
        i.name === product.name &&
        i.price === product.price &&
        JSON.stringify(i.description) === JSON.stringify(product.description)
          ? { ...i, qty: i.qty + 1, totalprice: (i.qty + 1) * i.price }
          : null
      );
    },
    pTotal(state, action) {
      return state.reduce((x) =>
        x.length > 0
          ? {
              ...x,
              price: x.qty * x.price,
              p_total: 0,
            }
          : x
      );
    },
    clearCart(state, action) {
      return [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addPizza,
  addCard,
  removeCart,
  incCart,
  decCart,
  pTotal,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
