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
import { editPost } from "../../Redux/AsyncThunk/postThunk";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const EditPostModal = ({
  isOpen,
  onClose,
  editedPost,
  setEditedPost,
}) => {
  const { token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const editPostHandler = async (data) => {
    try {
      const postData = {
        _id: editedPost._id,
        content: data.content,
      };
      const response = await dispatch(editPost({ postData, token }));
      if (response.payload.status === 201) {
        toast.info("Post Edited");
      } else {
        toast.error(`${response.payload.data.errors[0]}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const updatePostHandler = () => {
    if (editedPost.content !== "") {
      editPostHandler(editedPost);
    } else {
      toast.error("Your post cannot be empty");
    }
  };

  const modalCloseHandler = ()=>{
    setEditedPost({content:""})
    onClose()
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Post</ModalHeader>
          <ModalCloseButton onClick={modalCloseHandler} />
          <ModalBody>
            <Textarea
              value={editedPost.content}
              onChange={(e) =>
                setEditedPost((prev)=> ({...prev,  content: e.target.value }))
              }
            />
          </ModalBody>
          <ModalFooter>
            <Button color="brand" onClick={updatePostHandler}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export { EditPostModal };
