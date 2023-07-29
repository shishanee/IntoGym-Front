import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  message: null,
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

export const addPlus = createAsyncThunk("add/plus", async (id, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:4000/cartplus/${id}`, {
      method: "PATCH",
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
export const addMinus = createAsyncThunk("add/minus", async (id, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:4000/cartminus/${id}`, {
      method: "PATCH",
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

export const deleteCart = createAsyncThunk(
  "delete/cart",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/cartdelete/${id}`, {
        method: "PATCH",
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
  }
);

export const cartPay = createAsyncThunk(
  "cart/pay",
  async (result, thunkAPI) => {
    console.log(result);
    try {
      const res = await fetch("http://localhost:4000/cartpay", {
        method: "PATCH",
        body: JSON.stringify({ result: result }),
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
  }
);

export const addCart = createAsyncThunk("add/get", async (id, thunkAPI) => {
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.cart = state.cart.filter((item) => item._id !== action.meta.arg);
      })
      .addCase(cartPay.fulfilled, (state, action) => {
        state.message = action.payload;
        state.cart = [];
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.cart = action.payload.cart;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.cart = action.payload.cart;
      })

      .addCase(addPlus.fulfilled, (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item._id === action.payload._id) {
            if (item.amount < item.inStock) {
              item.amount++;
            }
          }
          return item;
        });
      })
      .addCase(addMinus.fulfilled, (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item._id === action.payload._id) {
            if (item.amount > 1) {
              item.amount--;
            }
          }
          return item;
        });
      });
  },
});

export default cartSlice.reducer;
