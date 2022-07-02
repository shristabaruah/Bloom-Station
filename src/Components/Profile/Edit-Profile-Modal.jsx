import {
  Avatar,
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { edit } from "../../Redux/AsyncThunk";
import { toast } from "react-toastify";
import { updateUser } from "../../Redux/slices";

const ProfileModal = ({ isOpen, onClose, userProfile, setUserProfile }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);
  const [userData, setUserData] = useState({ ...userProfile, avatarFile: {} });
  const reader = new FileReader();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const updateAvatar = (e) => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserData({
          ...userData,
          avatarURL: reader.result,
          avatarFile: e.target.files[0],
        });
      } else {
        reader.abort();
        setUserData({
          ...userData,
          avatarURL: "",
          avatarFile: "",
        });
      }
    };
  };

  const editHandler = async () => {
    const response = await dispatch(edit({ userData, token }));

    if (response.payload.status === 201) {
      setUserData(() => response?.payload.data.user);
      setUserProfile(response?.payload.data.user);
      dispatch(updateUser(response?.payload.data.user));
      toast.success("Profile updated successfully");
    } else {
      toast.error(`${response?.payload.data.errors[0]}`);
    }
    onClose();
  };
  const closeClickHandler = () => {
    setUserData(() => userProfile);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton onClick={closeClickHandler} />
        <ModalBody>
          <Box p="2">
            <Flex gap="3rem" mb="1rem">
              <Text>Avatar:</Text>
              <Box position="relative">
                <Avatar
                  name={userData?.firstName + " " + userData?.lastName}
                  src={userData.avatarURL || userProfile?.avatarURL}
                  size="md"
                />
                <Box position="absolute" top="54%" left="59%">
                  <FormLabel
                    cursor="pointer"
                    background="white"
                    borderRadius="50%"
                    p="6px"
                  >
                    <Input
                      type="file"
                      position="absolute"
                      opacity="0"
                      bgColor="red.100"
                      p="0"
                      visibility="hidden"
                      onChange={updateAvatar}
                    />
                    <AiFillCamera fontSize="18px" />
                  </FormLabel>
                </Box>
              </Box>
            </Flex>
            <Flex gap="3rem" mb="1rem">
              <Text>Name:</Text>
              {userData?.firstName}
              {userData?.lastName}
            </Flex>
            <Flex gap="2rem" mb="1rem">
              <Text>Username:</Text>
              <Text>@{userData?.username}</Text>
            </Flex>
            <Flex gap="4rem" mb="1rem">
              <Text>Bio:</Text>
              <Input
                borderColor="grey.200"
                size="sm"
                name="bio"
                value={userData?.bio}
                onChange={inputHandler}
              />
            </Flex>
            <Flex justifyContent="center">
              <Button variant="brand" onClick={editHandler}>
                Save
              </Button>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export { ProfileModal };
