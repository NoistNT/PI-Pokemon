import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--card-hover-bg);
  padding: 0.5rem;

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 0 2rem;
  }
`

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  color: var(--text-color);
  padding: 0;
`

export const Li = styled.li`
  display: flex;
  align-items: center;
`

export const StyledLink = styled(Link)`
  align-items: center;
  color: var(--text-color);
  text-decoration: none;
  margin: 0 1rem;
  font-size: 0.9rem;

  &:hover,
  &:focus {
    font-weight: 600;
    color: var(--link-color);
  }

  &:active {
    color: #4941b3;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`
