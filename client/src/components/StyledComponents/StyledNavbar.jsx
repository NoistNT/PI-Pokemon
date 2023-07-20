import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--card-hover-bg);

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.9rem;
`

export const Img = styled.img`
  width: 200px;
  height: auto;
  padding: 0.5rem 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.015);
    transition: all 0.2s ease-in-out;
  }

  @media (min-width: 768px) {
    margin-left: 2rem;
  }

  @media (min-width: 1024px) {
    margin-left: 5rem;
  }
`
