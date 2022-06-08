import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { BsCardImage } from "react-icons/bs";

const PostBox = () => {
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
        <Avatar size="sm" />
        <Textarea placeholder="Whats on your Mind ?" variant="unstyled" />
      </Flex>
      <Flex justifyContent="space-between" m="0.5rem">
        <Box position="relative" p="0.5rem" _hover={{ bgColor: "grey.200" }}>
          <Input
            type="file"
            p="2"
            opacity="0"
            position="absolute"
            cursor="pointer"
          />
          <BsCardImage fontSize="28px" cursor="pointer" variant="brand" />
        </Box>
        <Button variant="brand">Post</Button>
      </Flex>
    </Flex>
  );
};
export { PostBox };
