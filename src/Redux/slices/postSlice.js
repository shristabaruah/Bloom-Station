import { createSlice } from "@reduxjs/toolkit";
import {
  addPost,
  deletePost,
  dislikePost,
  editPost,
  getPost,
  likePost,
} from "../AsyncThunk/postThunk";

const initialState = {
  posts: [],
  isLoading: false,
  isLikeLoading: false,
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
      console.error(action.payload.data.errors[0]);
    },
    [addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [addPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [addPost.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [editPost.pending]: (state) => {
      state.isLoading = true;
    },
    [editPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [editPost.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [likePost.pending]: (state) => {
      state.isLikeLoading = true;
    },
    [likePost.fulfilled]: (state, action) => {
      state.isLikeLoading = false;
      state.posts = action.payload.data.posts;
    },
    [likePost.rejected]: (state, action) => {
      state.isLikeLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [dislikePost.pending]: (state) => {
      state.isLikeLoading = true;
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.isLikeLoading = false;
      state.posts = action.payload.data.posts;
    },
    [dislikePost.rejected]: (state, action) => {
      state.isLikeLoading = false;
      console.error(action.payload.data.errors[0]);
    },
  },
});

export const { reducer: postsReducer } = postSlice;
