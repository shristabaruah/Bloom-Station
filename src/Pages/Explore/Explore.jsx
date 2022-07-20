import { Flex, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Filter,
  FollowerList,
  Loader,
  PostCard,
  Sidebar,
} from "../../Components";
import { getPost } from "../../Redux/AsyncThunk";
import { filterOptions } from "../../Utils/Filter";

const Explore = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((store) => store.post);
  const [filterType, setFilterType] = useState("noFilter");

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const filteredPost = filterOptions(posts, filterType);

  return (
    <Flex justifyContent="justify-center" mt="1rem" gap="5px">
      <Sidebar />
      <Flex flexDir="column">
        {isLoading ? <Loader /> : null}
        {posts.length > 0 ? (
          <Box mt="1.3rem">
            <Filter setFilterType={setFilterType} filterType={filterType} />
            {filteredPost.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </Box>
        ) : (
          <Text>No post to display</Text>
        )}
      </Flex>
      <FollowerList />
    </Flex>
  );
};
export { Explore };
