import logo from '@/assets/logo.webp'
import Searchbar from '@/components/Searchbar/Searchbar'
import {
  Container,
  Img,
  StyledLink
} from '@/components/StyledComponents/StyledNavbar'

export default function Navbar() {
  return (
    <Container>
      <StyledLink to="/pokemon">
        <Img alt="img not found" src={logo} />
      </StyledLink>
      <Searchbar />
    </Container>
  )
}
