import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    carts: [],
    count : 0
  },
  reducers: {

    addCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    },
    removeCart: (state, action) => {
      state.count = state.count - 1;
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    },
    removeCartItems: (state, action) => {
      const itemIndex_desc = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndex_desc].qty >= 1) {
        const delete_item = (state.carts[itemIndex_desc].qty -= 1);
        console.log([...state.carts, delete_item]);
        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemIndex_desc].qty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload.id);
        return {
          ...state,
          carts: data,
        };
      }
    },
  },
});

const { actions, reducer } = slice;
const { removeCartItems, removeCart, addCart } = actions;

export { removeCartItems, removeCart, addCart };
export default reducer;
