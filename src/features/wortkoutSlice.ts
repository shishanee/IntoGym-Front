import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface ArticleState {
    error: string | null | unknown,
    loading: boolean,
    article: ArticleItem[]    
}

export interface ArticleItem {
    _id: string;
    image: string;
    title: string;
    info: string;
    data: number;
    __v: number;
}

const initialState:  ArticleState = {
    error: null,
    loading: false,
    article: [],
}

export const fetchArticle = createAsyncThunk<ArticleItem[], void, {}>(
    "article/fetch",
    async (_, thunkAPI ) => {
        try {
            const res = await fetch("http://localhost:4000/article");
            const data = await res.json();
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e as any)
        }
    }
);



const workoutSlice = createSlice({
    name: "article",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchArticle.pending, (state ) => {
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