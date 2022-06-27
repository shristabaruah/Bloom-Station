import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  FollowerList,
  Loader,
  PostCard,
  ProfileCard,
  Sidebar,
} from "../../Components";
import { getSingleUser } from "../../Services/getSingleUser";
import { getUserPost } from "../../Services/getUserPosts";

const Profile = () => {
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState("");
  const [userPost, setUserPost] = useState([]);

  const { posts} = useSelector((store) => store.post);
  console.log(userPost.length > 0)

  useEffect(() => {
    getUserPost(setUserPost, username);
    getSingleUser(setUserProfile, username);
  }, [username, posts]);

  return (
    <>
      <Flex justifyContent="space-between" mt="1rem">
        <Sidebar />
        <Flex flexDir="column">
          <ProfileCard />

          {userPost && userPost?.length > 0 ? (
            userPost?.map((post) => <PostCard key={post._id} post={post} />)
          ) : (
            <Text> No post</Text>
          )}
        </Flex>

        <FollowerList />
      </Flex>
    </>
  );
};
export { Profile };
