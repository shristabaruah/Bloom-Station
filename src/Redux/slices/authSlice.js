import { createSlice } from "@reduxjs/toolkit";
import { edit, login, signup } from "../AsyncThunk/authThunk";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  // error: null,
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
      state.error = action.error.message;
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
      state.isLoading=false;
      console.error(action.error.message);
    },
    [edit.pending]: (state) => {
      state.isLoading = true;
    },
    [edit.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.user;
    },
    [edit.rejected]:(state,action)=>{
      state.isLoading=false;
      console.error(action.error.message)
    }
  },
});

export const { logout } = authSlice.actions;
export const { reducer: authReducer } = authSlice;
