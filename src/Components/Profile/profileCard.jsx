import {
  Avatar,
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/slices/authSlice";
import { PostCard } from "../PostCard/PostCard";
import { ProfileModal } from "./ProfileModal";

const ProfileCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const {isOpen , onOpen , onClose } = useDisclosure()

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
    <ProfileModal isOpen={isOpen} onClose={onClose} />
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
          <Avatar size="md" />

          <Heading as="h4" size="md">
            Guest User
          </Heading>
          <Text>{user.bio}</Text>

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
          <Flex gap="4px">
            <Text as="span"> 2 post</Text>
            <Text as="span"> 1 Follwers </Text>
            <Text as="span"> 2 Follwing</Text>
          </Flex>
        </Flex>
        <PostCard />
      </Flex>
    </>
  );
};
export { ProfileCard };
