import { StyledFooter } from '../StyledComponents/StyledFooter'

export default function Footer() {
  return (
    <StyledFooter>
      <p>PokeWiki &copy; {new Date().getFullYear()}</p>
    </StyledFooter>
  )
}
