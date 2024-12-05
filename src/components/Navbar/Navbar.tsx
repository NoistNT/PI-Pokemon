import logo from '@/assets/logo.webp';
import { Searchbar } from '@/components/Searchbar/Searchbar';
import { Container, Img, StyledLink } from '@/components/StyledComponents/StyledNavbar';

function NavBar() {
  return (
    <Container>
      <StyledLink to="/">
        <Img
          alt="Pokemon logo"
          src={logo}
        />
      </StyledLink>
      <Searchbar />
    </Container>
  );
}

export { NavBar };
