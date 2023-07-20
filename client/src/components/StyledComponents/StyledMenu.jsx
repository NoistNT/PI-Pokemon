import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #25183d;

  @media (min-width: 426px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Title = styled.h2`
  margin: 0;
  width: auto;
  font-size: 1.5rem;
  margin-top: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);

  @media (min-width: 426px) {
    font-size: 1.9rem;
    margin-bottom: 0.8rem;
  }

  @media (min-width: 1440px) {
    font-size: 2rem;
  }
`

export const SelectGroup = styled.div`
  @media (min-width: 426px) {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-bottom: 0.6rem;
  }

  @media (min-width: 500px) {
    gap: 1rem;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  margin: 0.5rem 0.8rem;

  @media (min-width: 426px) {
    flex-direction: column;
    min-width: auto;
  }

  @media (min-width: 768px) {
    margin: 0 2rem;
    width: auto;
  }

  @media (min-width: 1024px) {
    margin: 0 4rem;
  }

  @media (min-width: 1440px) {
    margin: 0 6rem;
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
  border-radius: 0.22rem;
  background-color: var(--select-bg-color);
  color: var(--text-color);
  transition: all 0.2s ease;
  text-align: center;
  min-width: 8rem;

  &:hover {
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px #433063;
  }

  @media (min-width: 426px) {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    border-radius: 0.25rem;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
    padding: 0.45rem;
    min-width: 10rem;
  }
`

export const Button = styled.button`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-color);
  background-color: #4941b396;
  border-color: #ffffff36;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  border-radius: 0.3rem;
  padding: 0.4rem 1.2rem;
  transition: all 0.2s ease;
  font-size: 0.88rem;
  min-width: 8rem;
  margin: 0.5rem auto;

  &:hover {
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px var(--card-hover-shadow);
    background-color: #4941b3b3;
    border-color: #ffffff36;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    font-weight: 500;
    min-width: 10rem;
    margin-bottom: 0.8rem;
  }
`
