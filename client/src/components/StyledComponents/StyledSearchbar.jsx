import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem 1rem;

  @media (min-width: 426px) {
    flex-direction: row;
    margin: 0.7rem 1rem;
  }

  @media (min-width: 768px) {
    gap: 2rem;
  }
`

export const Input = styled.input`
  outline: 0;
  border: none;
  border-radius: 0.3rem;
  background-color: var(--input-bg-color);
  color: var(--text-color);
  font-size: 0.9rem;
  text-align: center;
  padding: 0.5rem;

  &::placeholder {
    text-align: center;
    color: #868686;
  }

  @media (min-width: 426px) {
    margin: auto;
    height: 1rem;
  }
`

export const Button = styled.button`
  font-size: 0.95rem;
  font-weight: 550;
  color: var(--text-color);
  background-color: var(--app-bg-color);
  border: none;
  border-radius: 0.3rem;
  padding: 0.6rem 1.4rem;
  transition: all 0.2s ease;
  font-size: 0.88rem;

  &:hover {
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px var(--card-hover-shadow);
    cursor: pointer;
  }

  @media (min-width: 426px) {
    padding: 0.5rem 1rem;
  }
`
