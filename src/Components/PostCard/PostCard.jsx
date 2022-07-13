import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots, BsFillBookmarkFill } from "react-icons/bs";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { Comment } from "../Comments/Comments";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { deletePost } from "../../Redux/AsyncThunk/postThunk";
import { EditPostModal } from "../../Components/EditPostModal/EditPostModal";
import {  useDisclosure } from "@chakra-ui/react";


const PostCard = ({ img, post  }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editedPost, setEditedPost] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user, token } = useSelector((store) => store.auth);

  const isCurrentUser = user.username === post.username;

  const deletePostHandler = async () => {
    try {
      const response = await dispatch(deletePost({ post, token }));
      if (response.payload.status === 201) {
        toast.info("Post deleted sucessfully");
      } else {
        toast.error(`${response.payload.data.errors[0]}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const EditedPostHandler = (post)=>{
    setEditedPost(post)
    onOpen()
  }

  return (
    <>    <Flex
      mt="5"
      flexDir="column"
      bgColor="grey.100"
      p="8"
      gap="2"
      borderRadius="8"
      position="relative"
      maxW="32rem"
    >
      <Flex justifyContent="space-between">
        <Flex
          gap="1"
          justifyContent="space-evenly"
          cursor="pointer"
          onClick={() => navigate(`/profile/${post.username}`)}
        >
          <Avatar
            size="sm"
            src={
              post.username === user.username ? user.avatarURL : post.avatarURL
            }
          />
          <Heading as="h3" size="md">
            {post?.firstName} {post?.lastName}
          </Heading>
        </Flex>
        {isCurrentUser && (
          <Popover>
            <PopoverTrigger>
              <IconButton
                icon={<BsThreeDots />}
                bgColor="transparent"
                borderRadius="50"
                _hover={{ bgColor: "brand.50", borderRadius: "50" }}
              />
            </PopoverTrigger>
            <PopoverContent
              maxW="fit-content"
              p="6"
              _focus={{ borderColor: "transparent" }}
              bgColor="grey.200"
            >
              <PopoverArrow />
              <PopoverCloseButton />
              <Button
                leftIcon={<MdModeEdit />}
                variant="ghost"
                _focus={{ borderColor: "transparent" }}
                onClick={()=>EditedPostHandler(post)}
              >
                Edit
              </Button>
              <Button
                leftIcon={<MdDelete />}
                variant="ghost"
                _focus={{ borderColor: "transparent" }}
                onClick={deletePostHandler}
              >
                Delete
              </Button>
            </PopoverContent>
          </Popover>
        )}
      </Flex>

      {/* PostContent */}
      <Box>
        <Text mb="0.5rem">{post?.content}</Text>
        {img ? (
          <Box>
            <Image src={img} alt="img" h="300" w="full" objectFit="cover" />
          </Box>
        ) : null}
      </Box>

      {/* buttons */}
      <Flex
        borderTop="1px"
        borderTopColor="grey.200"
        borderBottom="1px"
        borderColor="grey.200"
        justifyContent="space-between"
      >
        <Box fontSize="1rem" color="brand.500">
          <IconButton
            icon={<AiFillLike />}
            _focus={{ borderColor: "transparent" }}
            size="md"
            fontSize="1.5rem"
            borderRadius="50"
            color="brand.400"
          />
          {post?.likes.likeCount ? post?.likes.likeCount : null}
        </Box>
        <IconButton
          icon={<BsFillBookmarkFill />}
          _focus={{ borderColor: "transparent" }}
          size="md"
          fontSize="1.5rem"
          borderRadius="50"
          color="brand.400"
        />
      </Flex>
      <Flex gap="2">
        <Avatar size="sm" />
        <InputGroup>
          <Input
            variant="unstyled"
            border="1px"
            borderColor="grey.200"
            borderRadius="50"
            pr="4"
            pl="4"
          />
          <InputRightElement>
            <Button
              variant="ghost"
              _hover={{ bgColor: "transparent" }}
              size="sm"
              mr="7"
            >
              REPLY
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
      {post?.comments?.length > 0
        ? post?.comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))
        : null}
    </Flex>
    {isOpen ? (
          <EditPostModal
            isOpen={isOpen}
            onClose={onClose}
            editedPost={editedPost}
            setEditedPost={setEditedPost}
            
          />
        ) : null}
    </>
  );
};

export { PostCard };
