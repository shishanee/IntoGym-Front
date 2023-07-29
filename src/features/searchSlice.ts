import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
  },
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { updateQuery } = searchSlice.actions;
export default searchSlice.reducer;
