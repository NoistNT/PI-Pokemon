import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.7rem 1rem;

  @media (min-width: 678px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    gap: 2rem;
  }
`

export const Search = styled.input`
  outline: 0;
  border: none;
  border-radius: 0.25rem;
  background-color: var(--input-bg-color);
  color: var(--text-color);
  font-size: 0.9rem;
  text-align: center;
  padding: 0.5rem;
  transition: all 0.4s ease-in-out;
  font-family: 'Open Sans', Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;

  &::placeholder {
    text-align: center;
    color: #868686;
  }

  @media (min-width: 426px) {
    margin: auto;
    height: 1rem;
    transition: all 0.4s ease-in-out;
  }

  @media (min-width: 1025px) {
    height: 1.3rem;
    width: 20rem;
    font-size: 0.95rem;
    transition: all 0.4s ease-in-out;
  }
`

export const ButtonText = styled.span`
  position: relative;
  z-index: 1;
  color: var(--text-color);
`

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 550;
  color: var(--text-color);
  background: linear-gradient(
    82.3deg,
    rgb(71, 49, 104) 10.8%,
    rgb(70, 64, 160) 94.3%
  );
  border-color: #ffffff36;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.35rem;
  padding: 0.4rem 1.2rem;
  transition: all 0.25s ease;
  font-size: 0.88rem;
  cursor: pointer;

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover {
    transition: all 0.25s ease;
    border-color: #bdb7b749;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(
      82.3deg,
      rgb(76, 71, 148) 10.8%,
      rgb(84, 54, 128) 94.3%
    );
    transition: all 0.48s;
  }
`
