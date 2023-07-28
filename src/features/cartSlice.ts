import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const getCart = createAsyncThunk("cart/get", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const addCart = createAsyncThunk("add/get", async (id, thunkAPI) => {
  console.log(id)
  try {
    const res = await fetch("http://localhost:4000/cart", {
      method: "PATCH",
      body: JSON.stringify({ cart: id }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    decrement(state, action) {
      state.cart = state.cart.map((item) => {
        if (item.product._id === action.payload) {
          if (item.amount > 1) {
            item.amount--;
          }
        }
        return item;
      });
    },
    increment(state, action) {
      state.cart = state.cart.map((item) => {
        if (item.product._id === action.payload) {
          if (item.amount < item.product.inStock) {
            item.amount++;
          }
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        state.cart = action.payload.cart;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.cart = state.cart.push(action.payload.cart);
      });
  },
});

export const { decrement, increment } = cartSlice.actions;
export default cartSlice.reducer;
