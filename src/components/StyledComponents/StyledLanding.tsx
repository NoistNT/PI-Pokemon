import styled from 'styled-components';

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, #212121 0%, #331b5a 50%, #212121 100%);
  font-family: 'Open Sans', sans-serif;
`;

export const LandingImage = styled.img`
  max-width: 30rem;
  margin-bottom: 2rem;
  aspect-ratio: 18 / 7;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 8rem;
    transition: all 0.3s ease;
  }
`;

export const LandingTitle = styled.h1`
  font-size: 2rem;
  color: #c5c5c5;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin: 0 auto;
    font-size: 1.5rem;
  }
`;

export const LandingDescription = styled.p`
  font-size: 1.2rem;
  max-width: 40rem;
  color: #838383;

  @media (max-width: 768px) {
    max-width: 28rem;
    font-size: 1rem;
  }
`;

export const LandingButton = styled.button`
  position: relative;
  overflow: hidden;
  height: 2.5rem;
  padding: 0 1rem;
  margin: 2rem 0;
  border-radius: 0.45rem;
  background: linear-gradient(82.3deg, rgb(71, 49, 104) 10.8%, rgb(70, 64, 160) 94.3%);
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
    background: linear-gradient(82.3deg, rgb(76, 71, 148) 10.8%, rgb(84, 54, 128) 94.3%);
    transition: all 0.48s;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    height: 2.35rem;
    border-radius: 0.3rem;
    transition: all 0.3s ease;
  }
`;

export const LandingButtonText = styled.span`
  position: relative;
  font-size: 1.05rem;
  color: var(--text-color);
  z-index: 1;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 768px) {
    font-size: 0.96rem;
  }
`;
