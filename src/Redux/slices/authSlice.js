import { createSlice } from "@reduxjs/toolkit";
import {
  addToBookmark,
  edit,
  getUserBookmarks,
  login,
  removeBookmark,
  signup,
} from "../AsyncThunk/authThunk";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  bookmarks: [],
  isBookmarkLoading: false,
  bookmarkStatus: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.foundUser;
      state.token = action.payload.data.encodedToken;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [signup.pending]: (state) => {
      state.isLoading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.foundUser;
      state.token = action.payload.data.encodedToken;
    },
    [signup.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [edit.pending]: (state) => {
      state.isLoading = true;
    },
    [edit.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.user;
    },
    [edit.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [addToBookmark.pending]: (state) => {
      state.isBookmarkLoading = true;
    },
    [addToBookmark.fulfilled]: (state, action) => {
      state.isBookmarkloading = false;
      state.bookmarks = action.payload.data.bookmarks;
    },
    [addToBookmark.rejected]: (state, action) => {
      state.isBookmarkloading = false;
      console.error(action.payload.data.errors[0]);
    },
    [removeBookmark.pending]: (state) => {
      state.isBookmarkLoading = true;
    },
    [removeBookmark.fulfilled]: (state, action) => {
      state.isBookmarkloading = false;
      state.bookmarks = action.payload.data.bookmarks;
    },
    [removeBookmark.rejected]: (state, action) => {
      state.isBookmarkloading = false;
      console.error(action.payload.data.errors[0]);
    },
    [getUserBookmarks.pending]: (state) => {
      state.bookmarkStatus = "pending";
    },
    [getUserBookmarks.fulfilled]: (state, action) => {
      state.bookmarkStatus = "resolved";
      state.bookmarks = action.payload.data.bookmarks;
    },
    [getUserBookmarks.rejected]: (state, action) => {
      state.bookmarkStatus = "rejected";
      console.error(action.payload.data.errors[0]);
    },
  },
});

export const { logout, updateUser } = authSlice.actions;
export const { reducer: authReducer } = authSlice;
