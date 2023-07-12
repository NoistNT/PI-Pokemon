import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`

export const Img = styled.img`
  width: 100vw;
  height: auto;
  max-width: 30rem;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
`

export const Message = styled.p`
  font-size: 1.1rem;
  margin: 0;
  margin-top: 1.5rem;

  @media (min-width: 426px) {
    font-size: 1.15rem;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`
