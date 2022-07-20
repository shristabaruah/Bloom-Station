import { Avatar, Box, Button, Flex, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addPost } from "../../Redux/AsyncThunk/postThunk";

const PostBox = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((store) => store.auth);
  const [newPost, setNewPost] = useState({
    content: "",
  });

  const newPostHandler = async (data) => {
    try {
      const response = await dispatch(addPost({ postData: data, token }));
      if (response.payload.status === 201) {

        toast.success("Post added succesfully");

      } else {
        toast.error(`${response.payload.data.errors[0]}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const addPostHandler = () => {
    if (newPost.content !== "") {
      setNewPost({content:""})
      newPostHandler(newPost);

    } else {
      toast.error("Your post cannot be empty");
    }
  };
  const newPostChangeHandler = (e) => {
    setNewPost((prev) => ({ ...prev, content: e.target.value }));
  };

  return (
    <Flex
      flexDir="column"
      border="1px"
      borderColor="grey.200"
      mt="2rem"
      p="2"
      borderRadius="5px"
    >
      <Flex gap="2" p="2" borderBottom="1px" borderColor="grey.200">
        <Avatar size="sm" src={user.avatarURL} />
        <Textarea
          placeholder={`Whats on your mind ${user.username}?`}
          variant="unstyled"
          value={newPost.content}
          onChange={newPostChangeHandler}
        />
      </Flex>
      <Flex justifyContent="space-between" m="0.5rem">

        {/* post with image will be implemented later  */}
        
        {/* <Box position="relative" p="0.5rem" _hover={{ bgColor: "grey.200" }}>
          <Input
            type="file"
            p="2"
            opacity="0"
            position="absolute"
            cursor="pointer"
          />
          <BsCardImage fontSize="28px" cursor="pointer" variant="brand" />
        </Box> */}

        <Button variant="brand" onClick={addPostHandler}>
          Post
        </Button>
      </Flex>
    </Flex>
  );
};
export { PostBox };
