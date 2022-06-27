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

const PostCard = ({ img,post }) => {
  return (
    <Flex
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
        <Flex gap="1" justifyContent="space-evenly">
          <Avatar size="sm" src={post?.avatarURL} />
          <Heading as="h3" size="md">
            {post?.firstName} {post?.lastName}
          </Heading>
        </Flex>
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
            >
              Edit
            </Button>
            <Button
              leftIcon={<MdDelete />}
              variant="ghost"
              _focus={{ borderColor: "transparent" }}
            >
              Delete
            </Button>
          </PopoverContent>
        </Popover>
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
        <Box fontSize="1rem" color="brand.500" >
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
  );
};

export { PostCard };
