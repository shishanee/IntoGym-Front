import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface productCategory {
  _id: string;
  name: string;
  price: number;
  inStock: number;
  rating: number;
  amount: number;
  category: string;
}

interface ProductsCategoryState {
  productCategory: productCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsCategoryState = {
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
        .addCase(fetchProductCategory.fulfilled, (state, action: PayloadAction<productCategory[]>) => {
          state.productCategory = action.payload;
        })
    }})

    export default productCategorySlice.reducer;