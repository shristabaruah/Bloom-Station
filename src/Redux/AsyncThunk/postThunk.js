import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getPost = createAsyncThunk("posts/allPosts", async ()=>{
    const response = await axios.get("/api/posts");
    const data = {data:response.data , status:response.status}
    return data;
})

export {getPost};