import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { builders } from "prettier/doc.js";


const initialState = {
    error: null,
    loading: false,
    article: [],
}

export const fetchArticle = createAsyncThunk(
    "article/fetch",
    async (data, thunkAPI ) => {
        try {
            const res = await fetch("http://localhost:4000/article");
            const data = await res.json();
            return data
        } catch (error) {
            thunkAPI.rejectWithValue(e)
        }
    }
);



const workoutSlice = createSlice({
    name: "article",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchArticle.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(fetchArticle.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false
        })
        .addCase(fetchArticle.fulfilled, (state, action)=> {
            state.article = action.payload;
            state.loading = false;
        })
    }
});

export default workoutSlice.reducer;