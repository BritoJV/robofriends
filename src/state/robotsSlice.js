import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    value:[]
}

const robotsSlice = createSlice({
    name: "robots",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchRobots.pending, () =>{
            console.log("Fetching Robots");
        })
        .addCase(fetchRobots.fulfilled, (state,action) =>{
            state.value = action.payload;
        })
    }
})

export const fetchRobots = createAsyncThunk(
    "robots/fetchRobots",
    async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        return users
    }
)

export default robotsSlice.reducer;
