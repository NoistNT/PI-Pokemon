import { useState } from 'react'

import { RemoveButton, RemoveButtonImg } from '../StyledComponents/StyledCard'
import icon_remove from '../../assets/icon_remove.svg'

import RemovePokemonModal from './RemovePokemonModal'

export default function Remove({ handleRemove }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const confirmRemoval = () => {
    handleRemove()
    closeModal()
  }

  return (
    <>
      <RemoveButton type="button" onClick={openModal}>
        <RemoveButtonImg alt="remove-pokemon" src={icon_remove} />
      </RemoveButton>
      <RemovePokemonModal
        handleRemove={confirmRemoval}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </>
  )
}
