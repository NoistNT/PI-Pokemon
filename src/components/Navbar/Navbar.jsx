import Searchbar from '../Searchbar/Searchbar'
import logo from '../../assets/logo.webp'
import { Container, Img, StyledLink } from '../StyledComponents/StyledNavbar'

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
