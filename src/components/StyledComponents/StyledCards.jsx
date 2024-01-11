import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const CardsContainer = styled.div`
  display: grid;
  max-width: 1600px;
  margin: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
