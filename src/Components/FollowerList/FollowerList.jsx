import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { BsFillPersonPlusFill } from "react-icons/bs";

const FollowerList = () => {
  return (
    <Box
      position="sticky"
      p="4"
      h="fit-content"
      borderRadius="8"
      maxW="20rem"
      bg="grey.100"
      top="4"
      mr="3rem"
      mt="1rem"
      ml="1rem"
    >
      <Heading as="h3" size="md" color="brand.300">
        People you may follow{" "}
      </Heading>
      <UnorderedList listStyleType="none" mt="4">
        <ListItem mb="4">
          <Flex alignItems="center" gap="2">
            <Avatar size="sm" />
            <Flex flexDir="column">
              <Box>
                <Heading as="h4" size="sm">
                  Olive yue
                </Heading>
                <Text>@oliveY</Text>
              </Box>
            </Flex>
            <Button leftIcon={<BsFillPersonPlusFill />} variant="brand">
              Follow
            </Button>
          </Flex>
        </ListItem>

        <ListItem mb="4">
          <Flex alignItems="center" gap="2">
            <Avatar size="sm" />
            <Flex flexDir="column">
              <Box>
                <Heading as="h4" size="sm">
                  Olive yue
                </Heading>
                <Text>@oliveY</Text>
              </Box>
            </Flex>
            <Button
              leftIcon={<BsFillPersonPlusFill color="brand.300" />}
              variant="brand"
            >
              Follow
            </Button>
          </Flex>
        </ListItem>
        <ListItem mb="4">
          <Flex alignItems="center" gap="2">
            <Avatar size="sm" />
            <Flex flexDir="column">
              <Box>
                <Heading as="h4" size="sm">
                  Olive yue
                </Heading>
                <Text>@oliveY</Text>
              </Box>
            </Flex>
            <Button
              leftIcon={<BsFillPersonPlusFill color="brand.300" />}
              variant="brand"
            >
              Follow
            </Button>
          </Flex>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export { FollowerList };
