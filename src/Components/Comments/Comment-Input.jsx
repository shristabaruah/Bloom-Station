import { Avatar, Button, Flex, Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addComment } from "../../Redux/AsyncThunk";

const CommentInput = ({ postId }) => {
  const { user, token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [commentData, setCommentData] = useState("");
  const [commentBtnDisable, setCommentBtnDisable] = useState(false);

  const addCommentHandler = async () => {
    if (commentData === "") {
      toast.warning("Comments cannot be empty");
    } else {
      const response = await dispatch(
        addComment({ postId, commentData, token, setCommentBtnDisable })
      );
      if (response?.payload.status === 201) {
        toast.success("Comment added");
      } else {
        console.log("hello");

        toast.error(`${response.payload.data.errors[0]}`);
      }
      setCommentData("");
    }
  };

  return (
    <>
      <Flex gap="2">
        <Avatar
          size="sm"
          name={user.firstName + " " + user.lastName}
          src={user.avatarURL}
        />
        <InputGroup>
          <Input
            variant="unstyled"
            border="1px"
            borderColor="grey.200"
            borderRadius="50"
            pr="4"
            pl="4"
            value={commentData}
            onChange={(e) => setCommentData(e.target.value)}
          />
          <Button
            variant="ghost"
            _hover={{ bgColor: "brand.200" }}
            size="sm"
            color="white"
            ml="1"
            backgroundColor="brand.300"
            cursor={commentData !== "" ? "pointer" : "not-allowed"}
            onClick={addCommentHandler}
            isLoading={commentBtnDisable}
          >
            REPLY
          </Button>
        </InputGroup>
      </Flex>
    </>
  );
};

export { CommentInput };
