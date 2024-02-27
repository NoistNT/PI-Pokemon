import { RemoveButton, RemoveButtonImg } from '../StyledComponents/StyledCard'

export default function Remove({ alt, src, handleRemove }) {
  return (
    <RemoveButton type="button" onClick={handleRemove}>
      <RemoveButtonImg alt={alt} src={src} />
    </RemoveButton>
  )
}
