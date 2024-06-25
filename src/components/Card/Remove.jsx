import { useState } from 'react'

import RemovePokemonModal from './RemovePokemonModal'

import icon_remove from '@/assets/icon_remove.svg'
import {
  RemoveButton,
  RemoveButtonImg
} from '@/components/StyledComponents/StyledCard'

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
