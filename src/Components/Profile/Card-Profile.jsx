import {
  Avatar,
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUser, unfollowUser } from "../../Redux/AsyncThunk";
import { logout, updateUser } from "../../Redux/slices/authSlice";

const ProfileCard = ({ onOpen, userProfile, userPostLength }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, token } = useSelector((store) => store.auth);

  const followUserHandle = async (followUserId) => {
    const response = await dispatch(followUser({ followUserId, token }));
    dispatch(updateUser(response?.payload.data.user));
  };

  const unfollowUserHandle = async (followUserId) => {
    const response = await dispatch(unfollowUser({ followUserId, token }));
    console.log(response);
    dispatch(updateUser(response?.payload.data.user));
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <Flex flexDir="column">
        <Flex
          mt="2rem"
          flexDir="column"
          maxW="32rem"
          bgColor="grey.100"
          p="8"
          alignItems="center"
          gap="0.5rem"
        >
          <Avatar
            size="md"
            name={userProfile?.firstName + " " + userProfile?.lastName}
            src={userProfile?.avatarURL}
          />

          <Heading as="h4" size="md">
            {userProfile?.firstName}
            {userProfile?.lastName}
          </Heading>
          <Text>{userProfile?.bio}</Text>
          {userProfile?.username === user.username ? (
            <Flex gap="2rem">
              <Button
                variant="outline"
                borderColor="brand.400"
                onClick={onOpen}
              >
                Edit
              </Button>
              <IconButton
                variant="outline"
                color="red.300"
                bgColor="brand.400"
                icon={<MdLogout />}
                onClick={logoutHandler}
              ></IconButton>
            </Flex>
          ) : user.following.some(
              (item) => item.username === userProfile?.username
            ) ? (
            <Button
              variant="brand"
              onClick={() => unfollowUserHandle(userProfile._id)}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              variant="brand"
              onClick={() => followUserHandle(userProfile._id)}
            >
              Follow
            </Button>
          )}
          <Flex gap="4px">
            <Text as="span"> {userPostLength} post</Text>
            <Text as="span"> {userProfile?.followers.length} Followers </Text>
            <Text as="span"> {userProfile?.following.length} Following</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export { ProfileCard };
