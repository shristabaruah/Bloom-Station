import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const login = createAsyncThunk("auth/login", async (user) => {
  const response = await axios.post("/api/auth/login", user);

  const data = { data: response.data, status: response.status };
  return data;
});

const signup = createAsyncThunk("auth/signup", async (user) => {
  const response = await axios.post("/api/auth/signup", user);
  const data = { data: response.data, status: response.status };
  return data;
});

const edit = createAsyncThunk(
  "auth/edit",
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/api/users/edit",
        { userData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const addToBookmark = createAsyncThunk(
  "user/addBookmark",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const removeBookmark = createAsyncThunk(
  "user/removeBookmark",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const getUserBookmarks = createAsyncThunk(
  "user/bookmarks",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/users/bookmark", {
        headers: { authorization: token },
      });
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);
export { login, signup, edit, addToBookmark, removeBookmark, getUserBookmarks };
