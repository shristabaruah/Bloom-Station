import {
  Avatar,
  Box,
  Heading,
  IconButton,
  Text,
  PopoverArrow,
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Button,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { toast } from "react-toastify";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from "../../Redux/AsyncThunk";
import { CommentEditModel } from "./CommentEditModel";
import { useState } from "react";

const Comment = ({ comment, postId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [editedComment, setEditedComment] = useState("");
  const [commentId, setCommentId] = useState(null);

  const { user, token } = useSelector((store) => store.auth);

  const deleteCommentHandler = async () => {
    const response = await dispatch(
      deleteComment({ postId, commentId: comment._id, token })
    );
    if (response?.payload.status === 201) {
      toast.success("Comment deleted");
    } else {
      toast.error(`${response.payload.data.errors[0]}`);
    }
  };
  // console.log(editedComment)
  const editCommentHandler = () => {
    setCommentId(comment._id);
    setEditedComment(comment.commentData);
    onOpen();
  };

  return (
    <>
      {isOpen ? (
        <CommentEditModel
          isOpen={isOpen}
          onClose={onClose}
          editedComment={editedComment}
          setEditedComment={setEditedComment}
          setCommentId={setCommentId}
          commentId={commentId}
          postId={postId}
        />
      ) : null}
      <Flex mt="2" borderRadius="lg" justifyContent="space-between">
        <Flex gap="2">
          <Avatar
            size="sm"
            src={
              comment.username === user.username
                ? user.avatarURL
                : comment.avatarURL
            }
            onClick={() => navigate(`/profile/${comment.username}`)}
            cursor="pointer"
          />
          <Box>
            <Heading
              as="h4"
              size="md"
              onClick={() => navigate(`/profile/${comment.username}`)}
              cursor="pointer"
            >
              {comment.firstName}
              {comment.lastName}
            </Heading>
            <Text wordBreak="break-all">{comment.commentData} </Text>
          </Box>
        </Flex>
        {user.username === comment.username ? (
          <Popover>
            <PopoverTrigger>
              <IconButton
                icon={<BsThreeDots />}
                bgColor="transparent"
                borderRadius="50"
                _hover={{
                  bgColor: "grey.100",
                  border: "1",
                  borderRadius: "50",
                }}
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
                onClick={editCommentHandler}
              >
                Edit
              </Button>
              <Button
                leftIcon={<MdDelete />}
                variant="ghost"
                _focus={{ borderColor: "transparent" }}
                onClick={deleteCommentHandler}
              >
                Delete
              </Button>
            </PopoverContent>
          </Popover>
        ) : null}
      </Flex>
    </>
  );
};

export { Comment };
