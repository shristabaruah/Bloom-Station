import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Heading,
  Text,
  Flex,

} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = () => {
  const navigate = useNavigate();
  const [searchUsers, setSearchUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { users } = useSelector((store) => store.users);

  useEffect(() => {
    const userFound = users.filter(
      (user) =>
        user.firstName
          .trim()
          .toLowerCase()
          .includes(searchQuery.trim().toLowerCase()) ||
        user.lastName
          .trim()
          .toLowerCase()
          .includes(searchQuery.trim().toLowerCase()) ||
        user.username
          .trim()
          .toLowerCase()
          .includes(searchQuery.trim().toLowerCase())
    );
    setSearchUsers(userFound);
  }, [users, searchQuery]);

  return (
    <>
      <Box w="80%" position="relative">
        <InputGroup alignItems="center" display="flex">
          <InputLeftElement children={<BsSearch />} />
          <Input
            type="search"
            placeholder="search users"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>
       
          {searchUsers.length > 0 && searchQuery.length > 0 ? (
            <Flex
              flexDir="column"
              p="0.5rem"
              borderRadius="5px"
              w="100%"
              bgColor="grey.200"
              mt="1rem"
              gap="2"
              zIndex="1"
              position="absolute"
            >
              {searchUsers.map((user) => (
                <Flex
                  cursor="pointer"
                  key={user._id}
                  gap="2"
                  px="2"
                  onClick={() => navigate(`/profile/${user.username}`)}
                >
                  <Avatar
                    size="sm"
                    name={user.firstName + " " + user.lasttName}
                    src={user.avatarURL}
                    mr="0.5rem"
                  />
                  <Box>
                    <Heading as="h4" size="sm">
                      {user.firstName + " " + user.lastName}
                    </Heading>
                    <Text fontSize="0.8rem">@{user.username}</Text>
                  </Box>
                </Flex>
              ))}
            </Flex>
          ) : null}
      </Box>
    </>
  );
};

export { Search };
