import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postsReducer, usersReducer } from "../slices";

export const store = configureStore({
  reducer: { auth: authReducer, post: postsReducer, users: usersReducer },
});
