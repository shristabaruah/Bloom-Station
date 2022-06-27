import axios from "axios";

const getUserPost = async (setUserPost, username) => {
  try {
    const response = await axios.get(`/api/posts/user/${username}`);
    setUserPost(response.data.posts);
  } catch (e) {
    console.error("Error", e);
  }
};
export { getUserPost };
