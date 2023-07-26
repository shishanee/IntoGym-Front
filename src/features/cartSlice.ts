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
  try {
    const res = await fetch("http://localhost:4000/cart", {
      method: "PATCH",
      body: JSON.stringify({ product: id }),
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

const followSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
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

export default followSlice.reducer;
