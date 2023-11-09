import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchField: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSearchField } = searchSlice.actions;
// export const selectSearchField = (state) => state.search;

export default searchSlice.reducer;