import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    productCategory: [],
    loading: false,
    error: null
};

export const fetchProductCategory = createAsyncThunk(
    "productCategory/fetch",
    async (_, thunkAPI: any) => {
      try {
        const res = await fetch("http://localhost:4000/productCategory");
        const data = await res.json();
  
        return data;
      } catch (e) {
        thunkAPI.rejectWithValue(e);
      }
    }
  );


  const productCategorySlice = createSlice({
    name: "productCategory",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProductCategory.fulfilled, (state, action) => {
          state.productCategory = action.payload;
        })
    }})

    export default productCategorySlice.reducer;