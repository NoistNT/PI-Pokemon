import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem;
  max-width: 20rem;
  border-style: solid;
  border-color: #ffffff36;
  border-radius: 0.85rem;
  background: linear-gradient(
    82.3deg,
    rgb(50, 39, 66) 0%,
    rgb(76, 71, 148) 100%
  );
  box-shadow: 0 2px 4px var(--card-shadow);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover::before {
    transform: scaleX(1);
    transition: all 0.3s ease;
    border-color: #ffffff90;
  }

  &:hover {
    transition: all 0.3s ease;
    border-color: #bdb7b749;
    transform: translateY(-0.4rem);
    box-shadow: -1px 1px 1px #cacaca;
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
      rgb(68, 64, 122) 1%,
      rgb(45, 34, 61) 100%
    );
    transition: all 0.48s;
  }
`

export const Image = styled.img`
  position: relative;
  z-index: 1;
  border-radius: 0.5rem;
  max-width: 300px;
  height: auto;
`

export const Name = styled.h2`
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: 1.7rem;
  color: var(--text-color);
  text-shadow: 1px 0px 8px #272727;
`

export const TypesContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
`

export const Types = styled.span`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  background-color: var(--types-bg-color);
  color: var(--text-color);
`
