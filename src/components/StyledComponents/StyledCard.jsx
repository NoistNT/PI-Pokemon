import styled from 'styled-components'

const typeColor = {
  normal: '#7e7e7e',
  fighting: '#f08030',
  water: '#2855be',
  electric: '#c5ab19',
  grass: '#347a10',
  ice: '#98d8d8',
  fire: '#8d1812',
  poison: '#8d15ac',
  ground: '#705817',
  flying: '#215872',
  psychic: '#f85888',
  bug: '#839710',
  rock: '#524f49',
  ghost: '#4a3866',
  dragon: '#b45312',
  dark: '#161616',
  steel: '#5f5f75',
  fairy: '#a85668',
  unknown: '#ac2b5c',
  shadow: '#181616'
}

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

  &:hover::before {
    transform: scaleX(1);
    transition: all 0.3s ease;
    border-color: #ffffff90;
  }

  &:hover {
    transition: all 0.3s ease;
    border-color: #bdb7b749;
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
  max-width: 285px;
  height: auto;
  margin-bottom: 1rem;
  filter: drop-shadow(0 2px 6px #101020);
`

export const Name = styled.h2`
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: 1.6rem;
  margin: 2.8rem 0 0.5rem 0;
  color: var(--text-color);
  text-shadow: 1px 0px 8px #272727;
  transition: all 0.15s ease-in-out;

  &:hover {
    text-shadow: 0.5px 0px 7px #ffffff;
    transition: all 0.15s ease-in-out;
  }
`

export const TypesContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0;
`

export const Types = styled.span`
  margin: 0.5rem;
  padding: 0.4rem 1.5rem;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  text-shadow: 2px 2px 4px #272727;
  background-color: ${(props) => typeColor[props.type] || '#999999'};
  color: var(--text-color);
`

export const RemoveButton = styled.button`
  position: absolute;
  z-index: 2;
  top: 0.4rem;
  right: 0.2rem;
  width: fit-content;
  height: fit-content;
  transition: all 0.15s ease-in-out;
  background-color: transparent;
  shadow: 1px 0px 8px #272727;
  border: none;
  opacity: 0.6;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    filter: drop-shadow(0 2px 4px #ffffff);
  }
`

export const RemoveButtonImg = styled.img`
  z-index: 2;
  width: 1.4rem;
  height: 1.4rem;
  transition: all 0.15s ease-in-out;
`
