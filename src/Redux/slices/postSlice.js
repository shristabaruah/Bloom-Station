import { createSlice } from "@reduxjs/toolkit";
import { getPost } from "../AsyncThunk/postThunk";

const initialState = {
  posts: [],
  isLoading: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [getPost.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.error.message);
    },
  },
});

export const { reducer: postsReducer } = postSlice;
