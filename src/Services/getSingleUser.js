import axios from "axios";

const getSingleUser = async (setUserProfile, username) => {
  try {

    const response = await axios.get(`/api/users/${username}`);

    setUserProfile(response.data.user);

  } catch (e) {
    console.error("error:", e);
  }
};

export { getSingleUser };
