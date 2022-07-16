import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FollowerList,
  Loader,
  PostBox,
  PostCard,
  Sidebar,
} from "../../Components";
import { getPost } from "../../Redux/AsyncThunk";

const Home = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.auth);
  const { posts, isLoading } = useSelector((store) => store.post);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const postFeed = posts.filter(
    (item) =>
      user.username === item.username ||
      user.following.some((follower) => follower.username === item.username)
  );
  return (
    <Flex justifyContent="justify-center" mt="1rem">
      <Sidebar />
      <Flex flexDir="column">
        <PostBox />
        {isLoading ? <Loader /> : null}{" "}
        {postFeed.length > 0
          ? postFeed
              .reverse()
              .map((post) => <PostCard key={post._id} post={post} />)
          : "No post"}
      </Flex>
      <FollowerList />
    </Flex>
  );
};
export { Home };
