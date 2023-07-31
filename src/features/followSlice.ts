import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  follow: [],
  message: null,
};

export const getFollow = createAsyncThunk("get/follow", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/follow");
    const data = await res.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const addFollow = createAsyncThunk(
  "add/follow",
  async (id, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/user", {
        method: "PATCH",
        body: JSON.stringify({ follow: id }),
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

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFollow.fulfilled, (state, action) => {
        state.follow = action.payload;
      })
      .addCase(addFollow.fulfilled, (state, action) => {
        state.message = action.payload;
      });
  },
});

export default followSlice.reducer;
