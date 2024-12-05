import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;

  @media (min-width: 1026px) {
    margin: 3rem 0;
  }
`;

export const PageLink = styled.button`
  padding: 0.35rem 1rem;
  margin: 0 0.15rem;
  list-style-type: none;
  text-decoration: none;
  font-family: 'Open Sans', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  color: var(--text-color);
  background-color: #4941b361;
  border: 1px solid #ffffff36;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover,
  &.active {
    transition: all 0.3s ease;
    color: var(--text-color);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
    background-color: #4941b3;
    border-color: #ffffff6f;
    box-shadow: 0 2px 4px var(--card-hover-shadow);
  }
`;
