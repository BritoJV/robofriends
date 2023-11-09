import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:''
}

const searchfieldSlice = createSlice({
  name: 'searchfield',
  initialState: initialState,
  reducers: {
    setSearchField: (state, action) => {
        state.value = action.payload;
    },
  },
});

export const { setSearchField } = searchfieldSlice.actions;

export default searchfieldSlice.reducer;