import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  follow: [],
  loading: false,
};

export const fetchUser = createAsyncThunk("fetch/uesr", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const addMoney = createAsyncThunk(
  "add/money",
  async ({ balance }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/balance", {
        method: "PATCH",
        body: JSON.stringify({ balance }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });
      const data = await res.json();

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.follow = action.payload.follow;
        state.loading = false;
      })
      .addCase(addMoney.fulfilled, (state, action) => {
        console.log(action.meta.arg.balance);
        state.user.balance += Number(action.meta.arg.balance);
      });
  },
});

export default productsSlice.reducer;
