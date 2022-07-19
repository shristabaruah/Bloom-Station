import {
  Box,
  ListIcon,
  ListItem,
  UnorderedList,
  Heading
} from "@chakra-ui/react";
import { MdHome, MdOutlineBookmark } from "react-icons/md";
import { FaHashtag, FaUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  return (
    <Box position="sticky" top="16px" h="fit-content" m="1rem" ml="3rem">
      <Heading  color="brand.400"  >Bloom-Station</Heading>

      <UnorderedList
        listStyleType="none"
        spacing={5}
        fontSize="1.3rem"
        w="100%"
        mt="2rem"
      >
        <ListItem
          cursor="pointer"
          fontWeight="bold"
          borderRadius="5px"
          p="5px"
          w="10rem"
          textAlign="center"
          color={`${pathname === "/home" ? "brand.500" : "brand.200"}`}
          bgColor={`${pathname === "/home" ? "gray.200" : null}`}
          onClick={() => navigate("/home")}
        >
          <ListIcon
            as={MdHome}
          />
          Home
        </ListItem>
        <ListItem
          cursor="pointer"
          borderRadius="5px"
          w="10rem"
          p="5px"
          textAlign="center"
          fontWeight="bold"
          color={`${pathname === "/explore" ? "brand.500" : "brand.200"}`}
          bgColor={`${pathname === "/explore" ? "gray.200" : null}`}
          onClick={() => navigate("/explore")}
        >
          <ListIcon
            as={FaHashtag}
          />
          Explore
        </ListItem>
        <ListItem
          cursor="pointer"
          fontWeight="bold"
          borderRadius="5px"
          p="5px"
          w="10rem"
          textAlign="center"
          color={`${pathname === "/bookmarks" ? "brand.500" : "brand.200"}`}
          bgColor={`${pathname === "/bookmarks" ? "gray.200" : null}`}
         onClick={() => navigate("/bookmarks")}
        >
          <ListIcon
            as={MdOutlineBookmark}
          />
          Bookmark
        </ListItem>
        <ListItem
          cursor="pointer"
          fontWeight="bold"
          borderRadius="5px"
          p="5px"
          w="10rem"
          textAlign="center"
          color={`${pathname.includes("/profile")  ? "brand.500" : "brand.200"}`}
          bgColor={`${pathname.includes("/profile") ? "gray.200" : null}`}
          onClick={() => navigate(`/profile/${user.username}`)}
        >
          <ListIcon
            as={FaUserCircle}
          />
          Profile
        </ListItem>
      </UnorderedList>
    </Box>
  );
};
export { Sidebar };
