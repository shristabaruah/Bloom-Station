import {
    Box,
    Button,
    Flex,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
  } from "@chakra-ui/react";
  import { useDispatch, useSelector } from "react-redux";
  import { useState } from "react";
  import { edit } from "../../Redux/AsyncThunk";
  import { toast } from "react-toastify";
  
  const ProfileModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const { user, token } = useSelector((store) => store.auth);
    const [userData, setUserData] = useState({ bio: user.bio || "hello everyone" });
  
    const inputHandler = (e) => {
      const { name, value } = e.target;
      setUserData((prev) => ({ ...prev, [name]: value }));
    };
  
    const editHandler = () => {
      const response = dispatch(edit({ userData, token }));
      if (response.status === 201) {
        toast.success("Bio edited ");
        onClose();
      }
    };
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p="2">
              <Flex gap="1rem" mb="1rem">
                <Text>Name:</Text>
                <Text>Guest User</Text>
              </Flex>
              <Flex gap="1rem" mb="1rem">
                <Text>Bio:</Text>
                <Input
                  borderColor="grey.200"
                  size="sm"
                  name="bio"
                  value={userData.bio}
                  onChange={inputHandler}
                />
              </Flex>
              <Flex justifyContent="center">
                <Button variant="brand"onClick={editHandler}>Save</Button>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  export { ProfileModal };
  