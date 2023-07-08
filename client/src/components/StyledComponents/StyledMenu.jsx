import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #25183d;

  @media (min-width: 426px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    justify-content: space-evenly;
  }

  @media (min-width: 1024px) {
    justify-content: center;
    gap: 11rem;
  }
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  margin: 0.5rem 1rem;

  @media (min-width: 426px) {
    flex-direction: column;
    min-width: auto;
  }

  @media (min-width: 768px) {
  }
`

export const Label = styled.label`
  font-size: medium;
  font-weight: 600;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

export const SelectBox = styled.select`
  padding: 0.35rem;
  font-size: 0.8rem;
  outline: 0;
  border: none;
  border-radius: 0.25rem;
  background-color: var(--select-bg-color);
  color: var(--text-color);
  transition: all 0.2s ease;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;

  &:hover {
    transition: all 0.2s ease;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
    padding: 0.45rem;
  }
`
