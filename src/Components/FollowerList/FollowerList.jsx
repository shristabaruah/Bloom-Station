import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUser, getUsers } from "../../Redux/AsyncThunk";
import { updateUser } from "../../Redux/slices/authSlice";

const FollowerList = () => {
  const { user, token } = useSelector((store) => store.auth);
  const { users } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const followUserHandle = async (followUserId) => {
    const response = await dispatch(followUser({ followUserId, token }));
    dispatch(updateUser(response?.payload.data.user));
  };

  const suggestedFollowers = users.filter(
    (item) =>
      item.username !== user.username &&
      !user.following.some((user) => user.username === item.username)
  );

  return (
    <>
      {suggestedFollowers.length !== 0 ? (
        <Box
          position="sticky"
          p="4"
          h="fit-content"
          borderRadius="8"
          maxW="20rem"
          bg="grey.100"
          top="4"
          mr="3rem"
          mt="1rem"
          ml="1rem"
        >
          <Heading as="h3" size="md" color="brand.300">
            People you may follow{" "}
          </Heading>
          <UnorderedList listStyleType="none" mt="4">
            {suggestedFollowers.map((user) => (
              <ListItem mb="4" key={user.id}>
                <Flex alignItems="center" gap="2">
                  <Avatar
                    size="sm"
                    src={user.avatarURL}
                    cursor="pointer"
                    onClick={() => navigate(`/profile/${user.username}`)}
                  />
                  <Flex flexDir="column">
                    <Box
                      cursor="pointer"
                      onClick={() => navigate(`/profile/${user.username}`)}
                    >
                      <Heading as="h4" size="sm">
                        {user.firstName}
                        {user.lastName}
                      </Heading>
                      <Text>@{user.username}</Text>
                    </Box>
                  </Flex>
                  <Button
                    leftIcon={<BsFillPersonPlusFill />}
                    variant="brand"
                    p="2"
                    ml="auto"
                    onClick={() => followUserHandle(user._id)}
                  >
                    Follow
                  </Button>
                </Flex>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      ) : null}
    </>
  );
};

export { FollowerList };
