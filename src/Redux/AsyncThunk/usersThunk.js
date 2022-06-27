import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getUsers = createAsyncThunk("users/allUsers", async () => {
  const response = await axios.get("/api/users");
  const data = { data: response.data, status: response.status };
  return data;
});
export { getUsers}