import { Flex, Heading, Box } from "@chakra-ui/react";
import { FollowerList, Loader, PostCard, Sidebar } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPost, getUserBookmarks } from "../../Redux/AsyncThunk";

const Bookmark = () => {
  const { bookmarks, token, bookmarkStatus } = useSelector(
    (store) => store.auth
  );
  const { posts, isLoading } = useSelector((store) => store.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserBookmarks(token));
  }, [dispatch, token]);

  const bookmarkedPosts = posts.filter((currPost) =>
    bookmarks.some((curr) => curr === currPost._id)
  );

  return (
    <>
      <Flex justifyContent="center" mt="1rem">
        <Sidebar />
        <Flex flexDir="column" w="50%" alignItems="center" gap="10">
          <Box maxW="50rem">
            {isLoading ? (
              <Loader />
            ) : null}
            {bookmarkedPosts.length !== 0 ? (
              bookmarkedPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))
            ) : (
              <Flex justifyContent="center" alignItems="center">
                <Heading
                  size="md"
                  textAlign="center"
                  color="brand.300"
                  mt="7rem"
                >
                  No bookmarked post
                </Heading>
              </Flex>
            )}
              
          </Box>
        </Flex>
        <FollowerList />
      </Flex>
    </>
  );
};

export { Bookmark };
