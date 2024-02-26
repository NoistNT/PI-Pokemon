import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 20rem;
  background-color: var(--card-bg);
  color: var(--text-color);
  padding: 1rem;
  margin: 1.5rem auto;
  margin-top: 2.6rem;
  border-style: solid;
  border-color: #ffffff36;
  border-radius: 0.85rem;
  background: linear-gradient(
    82.3deg,
    rgb(50, 39, 66) 0%,
    rgb(76, 71, 139) 100%
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
    border-color: #ffffff36;
    box-shadow: -1px 1px 2px #7e5994;
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
    transition: all 0.48s;
  }
`

export const Title = styled.h2`
  position: relative;
  z-index: 1;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`

export const Image = styled.img`
  position: relative;
  z-index: 1;
  width: 18rem;
  height: 18rem;
  margin-bottom: 1.5rem;
  -webkit-box-reflect: below 1px
    linear-gradient(transparent, rgba(0, 0, 0, 0.1));
`

export const Name = styled.h3`
  position: relative;
  z-index: 1;
  position: relative;
  z-index: 1;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`

export const Attribute = styled.span`
  position: relative;
  z-index: 1;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`

export const Item = styled.p`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
  font-size: 1.07rem;
  color: #fcfcfc;
  padding: 0.25rem 3.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
`

export const Highlight = styled.p`
  position: relative;
  z-index: 1;
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
