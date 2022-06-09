import { Modal, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"

const ProfileModal = ({isOpenProfile,onCloseProfile })=>{
return(
    <Modal isOpen={isOpenProfile} onClose={onCloseProfile} >
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Edit Profile</ModalHeader>
        </ModalContent>
    </Modal>
)
}
export {ProfileModal}