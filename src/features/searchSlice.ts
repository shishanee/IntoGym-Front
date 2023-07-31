import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: '',
};

type UpdateQueryAction = PayloadAction<string>;

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateQuery: (state, action: UpdateQueryAction) => {
      state.query = action.payload;
    },
  },
});

export const { updateQuery } = searchSlice.actions;
export default searchSlice.reducer;
