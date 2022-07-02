import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  FollowerList,
  Loader,
  PostCard,
  ProfileCard,
  ProfileModal,
  Sidebar,
} from "../../Components";
import { getSingleUser } from "../../Services/getSingleUser";
import { getUserPost } from "../../Services/getUserPosts";

const Profile = () => {
  const { username } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [userProfile, setUserProfile] = useState(null);
  const [userPost, setUserPost] = useState([]);

  const { posts } = useSelector((store) => store.post);

  useEffect(() => {
    getUserPost(setUserPost, username);
    getSingleUser(setUserProfile, username);
  }, [username, posts]);

  return (
    <>
      {isOpen ? (
        <ProfileModal
          isOpen={isOpen}
          onClose={onClose}
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
      ) : null}
      <Flex justifyContent="justify-center" mt="1rem">
        <Sidebar />
        <Flex flexDir="column">
          <ProfileCard
            onOpen={onOpen}
            userProfile={userProfile}
            userPostLength={userPost?.length}
          />

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
