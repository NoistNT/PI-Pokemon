import Searchbar from '../Searchbar/Searchbar'
import logo from '../../assets/logo.png'
import { Container, Img, StyledLink } from '../StyledComponents/StyledNavbar'

export default function Navbar() {
  return (
    <Container>
      <StyledLink to={'/pokemon'}>
        <Img src={logo} alt='img not found' />
      </StyledLink>
      <Searchbar />
    </Container>
  )
}
