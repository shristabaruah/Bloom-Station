import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Filter,
  FollowerList,
  Loader,
  PostBox,
  PostCard,
  Search,
  Sidebar,
} from "../../Components";
import { getPost } from "../../Redux/AsyncThunk";
import { filterOptions } from "../../Utils/Filter";

const Home = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.auth);
  const { posts, isLoading } = useSelector((store) => store.post);
  const [filterType, setFilterType] = useState("noFilter");

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const postFeed = posts.filter(
    (item) =>
      user.username === item.username ||
      user.following.some((follower) => follower.username === item.username)
  );

  const filteredPost = filterOptions(postFeed, filterType);
  return (
    <Flex  gap="1rem" mt="1rem" p="1rem">
      <Sidebar />
      <Flex flexDir="column" mt="1rem">
        <Flex justifyContent="space-between" gap="5px">
        <Search/>
        <Filter setFilterType={setFilterType} filterType={filterType} />
        </Flex>

        <PostBox />
        {isLoading ? <Loader /> : null}{" "}
        {postFeed.length > 0
          ? filterType === "noFilter"
            ? filteredPost
                .reverse()
                .map((post) => <PostCard key={post._id} post={post} />)
            : filteredPost.map((post) => (
                <PostCard key={post._id} post={post} />
              ))
          : "No post"}
      </Flex>
      <FollowerList />
    </Flex>
  );
};
export { Home };
