import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2a274d86;
  border-style: solid;
  border-color: #ffffff36;
  border-width: 1px;
  max-width: 28rem;
  width: 100%;
  box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
  border-radius: 1rem;
  color: var(--text-color);
  transition: all 0.3s ease;
`

export const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
`

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  font-size: 1.07rem;
  color: var(--text-color);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
`

export const LabelInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.45rem;
  color: var(--text-color);
  background-color: rgb(255, 255, 255, 0.2);
  margin: 0 2rem;
`

export const Label = styled.label`
  font-size: 1rem;
  width: 7.5rem;
  font-weight: 550;
  font-family: 'Open Sans', Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
`

export const Input = styled.input`
  outline: 0;
  width: 70%;
  border: none;
  border-radius: 0.4rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: var(--input-bg-color);
  color: var(--text-color);
  font-size: 0.95rem;
  padding: 0.5rem;
  text-align: center;
  font-family: 'Open Sans', Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
`

export const SelectBox = styled.select`
  padding: 0.35rem;
  font-size: 0.94rem;
  outline: 0;
  border: none;
  border-radius: 0.4rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-family: 'Open Sans', Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  background-color: var(--select-bg-color);
  color: var(--text-color);
  transition: all 0.2s ease;
  text-align: center;
  width: 75%;

  &:hover {
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px var(--card-hover-bg);
  }
`

export const PokemonTypesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 1rem;
  width: 71.5%;
  margin-top: 1rem;
`

export const TypeListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(255, 255, 255, 0.05);
  padding: 0.3rem 2rem;
  border-radius: 0.45rem;
  transition: all 0.4s ease;
  width: 100%;

  &:hover {
    transition: all 0.4s ease;
    background-color: var(--select-bg-color);
    cursor: pointer;
  }
`

export const TypeList = styled.span`
  font-size: 0.95rem;
  font-family: 'Open Sans', Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  color: var(--text-color);
`

export const IconRemoveType = styled.img`
  width: 1rem;
`

export const ErrorSpan = styled.span`
  font-size: 0.97rem;
  font-family: 'Open Sans', Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  color: #ff1616;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  padding-top: 2.5rem;
  padding-bottom: 1.2rem;

  @media (min-width: 426px) {
  }
`

export const ButtonText = styled.span`
  position: relative;
  z-index: 1;
  color: var(--text-color);
`

export const SubmitButton = styled.button`
  position: relative;
  overflow: hidden;
  outline: 0;
  font-size: 0.95rem;
  font-weight: 550;
  background: linear-gradient(
    82.3deg,
    rgb(71, 49, 104) 10.8%,
    rgb(70, 64, 160) 94.3%
  );
  color: var(--text-color);
  border-color: #ffffff36;
  border-radius: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.25s ease;
  font-size: 0.88rem;
  width: 10rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-family: 'Open Sans', Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover {
    transition: all 0.25s ease;
    border-color: #bdb7b749;
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
`
