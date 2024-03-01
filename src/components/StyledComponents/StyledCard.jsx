import styled from 'styled-components'

import { typeColor } from '../../components/StyledComponents/Colours'

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

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #10101090;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  transition: all 0.3s ease;
`

export const Modal = styled.div`
  background-color: #2a2749;
  border-style: solid;
  border-color: #ffffff36;
  border-width: 1px;
  max-width: 28rem;
  width: 100%;
  padding: 1rem 0;
  box-shadow: -1px 3px 28px -4px rgba(180, 200, 255, 0.2);
  border-radius: 0.35rem;
  color: var(--text-color);
  transition: all 0.3s ease;
`

export const ModalTitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  text-align: center;
  margin: 0;
  margin-bottom: 1.3rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  z-index: 10;
`

export const ButtonNo = styled.button`
  padding: 0.5rem 1rem;
  min-width: 5rem;
  font-size: 0.9rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  color: var(--text-color);
  background-color: rgb(51, 153, 255, 0.6);
  border: none;
  border-radius: 0.3rem;
  padding: 0.6rem 1.6rem;
  transition: all 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: rgb(51, 153, 255, 0.9);
    transition: all 0.15s ease-in-out;
  }
`

export const ButtonYes = styled.button`
  padding: 0.5rem 1rem;
  min-width: 5rem;
  font-size: 0.9rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  color: var(--text-color);
  background-color: rgb(255, 51, 51, 0.6);
  border: none;
  border-radius: 0.3rem;
  padding: 0.6rem 1.6rem;
  transition: all 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: rgb(255, 51, 51, 0.9);
    transition: all 0.15s ease-in-out;
  }
`
