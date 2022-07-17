import { Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FollowerList, Loader, PostCard, Sidebar } from "../../Components";
import { getPost } from "../../Redux/AsyncThunk";

const Explore = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((store) => store.post);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <Flex justifyContent="justify-center" mt="1rem">
      <Sidebar />
      <Flex flexDir="column">
        {isLoading ? <Loader /> : null}
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <Text>No post to display</Text>
        )}
      </Flex>
      <FollowerList />
    </Flex>
  );
};
export { Explore };
