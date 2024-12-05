import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 94.1vh;
  background-color: rgba(0, 0, 0, 0.3);

  span {
    color: var(--text-color);
    font-size: 1.8rem;
    font-weight: 600;
    border-radius: 0.2rem;
  }
`;

export const Ring = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;

  div {
    position: absolute;
    width: 6.5rem;
    height: 6.5rem;
    border: 0.65rem solid;
    border-radius: 50%;
    animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--types-bg-color) transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
