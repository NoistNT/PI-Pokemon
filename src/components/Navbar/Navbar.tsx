import Searchbar from '@/components/Searchbar/Searchbar'
import {
  Container,
  Img,
  StyledLink
} from '@/components/StyledComponents/StyledNavbar'

import logo from '@/assets/logo.webp'

export default function NavBar() {
  return (
    <Container>
      <StyledLink to="/">
        <Img alt="Pokemon logo" src={logo} />
      </StyledLink>
      <Searchbar />
    </Container>
  )
}
