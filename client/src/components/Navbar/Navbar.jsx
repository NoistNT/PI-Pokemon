import Searchbar from '../Searchbar/Searchbar'
import { Container, Ul, Li, StyledLink } from '../StyledComponents/StyledNavbar'

export default function Navbar() {
  return (
    <Container>
      <Ul>
        <Li>
          <StyledLink to={'/pokemon'}>HOME</StyledLink>
        </Li>
      </Ul>
      <Searchbar />
    </Container>
  )
}
