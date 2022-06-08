import { Flex } from "@chakra-ui/react";
import { FollowerList, PostBox, PostCard, Sidebar } from "../../Components";

const Home = () => {
  return (
    <Flex justifyContent="space-between" mt="1rem">
      <Sidebar />
      <Flex flexDir="column">
        <PostBox />
        <PostCard img={"https://www.picsum.photos/300"} />
        <PostCard />

      </Flex>
      <FollowerList />
    </Flex>
  );
};
export { Home };
