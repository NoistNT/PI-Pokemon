import styled from 'styled-components'

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  font-size: 1.2rem;
  background: linear-gradient(180deg, #212121 0%, #331b5a 50%, #212121 100%);
  font-family: 'Open Sans', sans-serif;
`

export const LandingImage = styled.img`
  max-width: 30rem;
  height: auto;
  margin-bottom: 4rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));

  @media (max-width: 768px) {
    max-width: 20rem;
  }
`

export const LandingTitle = styled.h1`
  font-size: 2rem;
  color: #c5c5c5;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const LandingDescription = styled.p`
  font-size: 1.2rem;
  max-width: 30rem;
  color: #838383;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const LandingButton = styled.button`
  position: relative;
  overflow: hidden;
  height: 3rem;
  padding: 0 1.5rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
  background: linear-gradient(
    82.3deg,
    rgb(71, 49, 104) 10.8%,
    rgb(70, 64, 160) 94.3%
  );
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover::before {
    transform: scaleX(1);
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
      rgb(76, 71, 148) 10.8%,
      rgb(84, 54, 128) 94.3%
    );
    transition: all 0.48s;
  }

  @media (max-width: 768px) {
    height: 2.5rem;
  }
`

export const LandingButtonText = styled.span`
  position: relative;
  font-size: 1.05rem;
  color: var(--text-color);
  z-index: 1;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
