import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: false,
};

export const questionCreate = createAsyncThunk(
  "post/question",
  async ({ fullName, email, phone, subjects, message }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/questions", {
        method: "POST",
        body: JSON.stringify({ fullName, email, phone, subjects, message }),
        headers: {
          "Content-type": "application/json",
        },
      });

      const json = await res.json();

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
      }

      return json;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(questionCreate.pending, (state) => {
        state.loading = true;
      })
      .addCase(questionCreate.rejected, (state, action) => {
        state.error = action.payload;
        state.loading - true;
      })
      .addCase(questionCreate.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

export default questionSlice.reducer;
