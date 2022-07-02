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
export { login, signup, edit };
