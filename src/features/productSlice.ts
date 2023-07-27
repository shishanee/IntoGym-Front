import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    error: null
};

export const fetchProducts = createAsyncThunk(
    "products/fetch",
    async (_, thunkAPI: any) => {
      try {
        const res = await fetch("http://localhost:4000/product");
        const data = await res.json();
  
        return data;
      } catch (e) {
        thunkAPI.rejectWithValue(e);
      }
    }
  );

  export const fetchCategoryProduct = createAsyncThunk(
    'product/fetch',
    async (id, thunkAPI: any) => {
      try {
        const res = await fetch (`http://localhost:4000/product/${id}`)
        const data = await res.json();
  
        return data;
      } catch (e) {
        thunkAPI.rejectWithValue(e);
      }
    }
  )

  export const addRating = createAsyncThunk(
    "rating/add", 
    async (id, thunkAPI: any) => {
      try {
        const res = await fetch (`http://localhost:4000/product/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type':'application/json',
          Authorization: `Bearer ${thunkAPI.getState().application.token}`
        },
        body: JSON.stringify({id})
      })
        const data = await res.json();
        return data
      } catch (e) {
        thunkAPI.rejectWithValue(e);
      }
    }
  )


  const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.products = action.payload;
        })
        .addCase(fetchCategoryProduct.fulfilled, (state, action) => {
          state.products = action.payload
        })
        .addCase(addRating.fulfilled, (state, action) => {
          state.products = state.products.map((item) => {
            if (item._id === action.meta.arg) {
            item.rating = item.rating + 1;
            return item
          }
          return item
        }) 
          
        })
    }})

    export default productsSlice.reducer;