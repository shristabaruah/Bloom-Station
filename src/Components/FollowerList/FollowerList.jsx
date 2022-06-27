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
import { getUsers } from "../../Redux/AsyncThunk";

const FollowerList = () => {
  const { user } = useSelector((store) => store.auth);
  const { users } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const otherUsers = users.filter((item) => item.username !== user.username);

  const suggestedFollowers = users.filter(
    (item) =>
      item.username !== user.username &&
      !user.following.some((user) => user.username === item.username)
  );

  return (
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
              <Avatar size="sm" src={user.avatarURL} />
              <Flex flexDir="column">
                <Box>
                  <Heading as="h4" size="sm">
                    {user.firstName}
                    {user.lastName}
                  </Heading>
                  <Text>@{user.username}</Text>
                </Box>
              </Flex>
              <Button leftIcon={<BsFillPersonPlusFill />} variant="brand">
                Follow
              </Button>
            </Flex>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export { FollowerList };
