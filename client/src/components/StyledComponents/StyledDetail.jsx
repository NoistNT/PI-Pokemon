import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 20rem;
  background-color: var(--card-bg);
  color: var(--text-color);
  padding: 1rem;
  margin: 1.5rem auto;
  margin-top: 2.6rem;
  border-style: solid;
  border-color: #ffffff36;
  border-radius: 0.85rem;
  box-shadow: 0 2px 4px var(--card-shadow);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease;
    box-shadow: 0 14px 28px var(--card-hover-shadow);
    transform: translateY(-0.4rem);
    border-color: #ffffff90;
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`

export const Image = styled.img`
  width: 18rem;
  height: 18rem;
  margin-bottom: 1.5rem;
  -webkit-box-reflect: below 1px
    linear-gradient(transparent, rgba(0, 0, 0, 0.1));
`

export const Name = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`

export const Attribute = styled.span`
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`

export const Item = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
  font-size: 1.07rem;
  color: #fcfcfc;
  padding: 0.25rem 3.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
`

export const Highlight = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
  font-size: 1.07rem;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 0.45rem;
  color: #fcfcfc;
  padding: 0.25rem 3.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
`
