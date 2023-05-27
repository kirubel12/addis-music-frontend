import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
    name: 'song',
    initialState: {
        loader: true,
        data: [],
        error: false
    },
    reducers :{
       
        SONGS_LOADER: (state) => {
            state.loader = true;
        },
        FETCH_SONGS: (state, action) => {
            state.data = action.payload;
            state.error = false;
            state.loader = false;
        },
        SONGS_ERROR: (state,action) => {
 state.error = action.payload;
            state.loader = false;
        }
    }
})

export const { FETCH_SONGS,SONGS_ERROR, SONGS_LOADER  } = songSlice.actions;

export default songSlice.reducer;