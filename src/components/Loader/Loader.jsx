import { LoadingContainer, Ring } from '../StyledComponents/StyledLoader'

export default function Loader() {
  return (
    <LoadingContainer>
      <Ring>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Ring>
      <span>Loading</span>
    </LoadingContainer>
  )
}
