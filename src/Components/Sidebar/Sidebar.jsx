import {
  Box,
  Image,
  ListIcon,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { logo } from "../../Assets";
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
      <Image align="center" src={logo} h="50" />

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
          color={`${pathname === "/home" ? "brand.500" : "brand.200"}`}
          _hover={{ color: "brand.500", fontWeight: "bold" }}
          onClick={() => navigate("/home")}
        >
          <ListIcon
            as={MdHome}
            color="brand.200"
            _hover={{ color: "brand.500", fontWeight: "bold" }}
          />
          Home
        </ListItem>
        <ListItem
          cursor="pointer"
          fontWeight="bold"
          color={`${pathname === "/explore" ? "brand.500" : "brand.200"}`}
          _hover={{ color: "brand.500", fontWeight: "bold" }}
          onClick={() => navigate("/explore")}
        >
          <ListIcon
            as={FaHashtag}
            color="brand.200"
            _hover={{ color: "brand.500", fontWeight: "bold" }}
          />
          Explore
        </ListItem>
        <ListItem
          cursor="pointer"
          fontWeight="bold"
          color={`${pathname === "/bookmark" ? "brand.500" : "brand.200"}`}
          _hover={{ color: "brand.500", fontWeight: "bold" }}
          onClick={() => navigate("/")}
        >
          <ListIcon
            as={MdOutlineBookmark}
            color="brand.200"
            _hover={{ color: "brand.500", fontWeight: "bold" }}
          />
          Bookmark
        </ListItem>
        <ListItem
          cursor="pointer"
          fontWeight="bold"
          color={`${pathname === "/profile" ? "brand.500" : "brand.200"}`}
          _hover={{ color: "brand.500", fontWeight: "bold" }}
          onClick={() => navigate(`/profile/${user.username}`)}
        >
          <ListIcon
            as={FaUserCircle}
            color="brand.200"
            _hover={{ color: "brand.500", fontWeight: "bold" }}
          />
          Profile
        </ListItem>
      </UnorderedList>
    </Box>
  );
};
export { Sidebar };
