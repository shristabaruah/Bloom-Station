import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { editComment } from "../../Redux/AsyncThunk";

const CommentEditModel = ({
  isOpen,
  onClose,
  editedComment,
  setEditedComment,
  postId,
  commentId,
  setCommentId,
}) => {
  const { token } = useSelector((store) => store.auth);
  const [commentData, setCommentData] = useState(editedComment);
  const dispatch = useDispatch();
  const editCommentHandler = async () => {
    if (commentData === "") {
      toast.warning("Comment cannot be empty");
    } else {
      const response = await dispatch(
        editComment({ postId, commentData, commentId, token })
      );
      if (response.payload.status === 201) {
        toast.success("Comment edited");
      } else {
        toast.error(`${response.payload.data.errors[0]}`);
      }
    }
    closeHandler();
  };

  const closeHandler = () => {
    setEditedComment("");
    setCommentId(null);
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Comment</ModalHeader>
          <ModalCloseButton onClick={closeHandler} />
          <ModalBody>
            <Textarea
              value={commentData}
              onChange={(e) => setCommentData(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="brand" onClick={editCommentHandler}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { CommentEditModel };
