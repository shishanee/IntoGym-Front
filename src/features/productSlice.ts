import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  _id: string;
  name: string;
  price: number;
  inStock: number;
  rating: number;
  amount: number;
  category: string;
}

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null
};

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, thunkAPI) => {
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
  async (id: string, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/product/${id}`);
      const data = await res.json();

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const addRating = createAsyncThunk(
  "rating/add", 
  async (id: string, thunkAPI: any) => {
    try {
      const res = await fetch(`http://localhost:4000/product/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${thunkAPI.getState().application.token}`
        },
        body: JSON.stringify({ id })
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
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      })
      .addCase(fetchCategoryProduct.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      })
      .addCase(addRating.fulfilled, (state, action: PayloadAction<Product[], string, { arg: string }>) => {
        state.products = state.products.map((item) => {
          if (item._id === action.meta.arg) {
            item.rating = item.rating + 1;
            return item;
          }
          return item;
        });
      });
  }
});

export default productsSlice.reducer;