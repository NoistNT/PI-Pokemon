import {
  ButtonContainer,
  ButtonNo,
  ButtonYes,
  Modal,
  ModalContainer,
  ModalTitle
} from '@/components/StyledComponents/StyledCard'

export default function RemovePokemonModal({ handleRemove, isOpen, onClose }) {
  const modalContent = (
    <Modal>
      <ModalTitle>Remove Pokemon?</ModalTitle>
      <ButtonContainer>
        <ButtonYes type="button" onClick={handleRemove}>
          Yes
        </ButtonYes>
        <ButtonNo type="button" onClick={onClose}>
          No
        </ButtonNo>
      </ButtonContainer>
    </Modal>
  )

  return (
    <>
      {isOpen ? (
        <ModalContainer onClick={onClose}>{modalContent}</ModalContainer>
      ) : null}
    </>
  )
}
