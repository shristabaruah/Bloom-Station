import {
  Avatar,
  Box,
  Heading,
  HStack,
  IconButton,
  Text,
  PopoverArrow,
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Button,
  Flex,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { MdModeEdit, MdDelete } from "react-icons/md";

const Comment = ({ comment }) => {
  return (
    <Flex mt="2" borderRadius="lg" justifyContent="space-between">
      <Flex gap="2">
        <Avatar size="sm" src={comment.avatarURL} />
        <Box>
          <Heading as="h4" size="md">
            {comment.firstName}
            {comment.lastName}
          </Heading>
          <Text>{comment.text} </Text>
        </Box>
      </Flex>
      <Popover>
        <PopoverTrigger>
          <IconButton
            icon={<BsThreeDots />}
            bgColor="transparent"
            borderRadius="50"
            _hover={{ bgColor: "grey.100", border: "1", borderRadius: "50" }}
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
  );
};

export { Comment };
