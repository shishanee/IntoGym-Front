import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  follow: [],
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

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFollow.fulfilled, (state, action) => {
      state.follow = action.payload;
    });
  },
});

export default followSlice.reducer;
