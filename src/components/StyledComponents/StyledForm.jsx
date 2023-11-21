import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2a274d86;
  border-style: solid;
  border-color: #ffffff36;
  border-width: 1px;
  padding: 2rem;
  margin: 2rem auto;
  width: 30rem;
  box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
  border-radius: 1rem;
  color: var(--text-color);
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    border-width: 1px;
    border-color: #ffffff90;
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.07rem;
  color: var(--text-color);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  margin-bottom: 1rem;
`

export const LabelInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.45rem;
  color: var(--text-color);
  background-color: rgb(255, 255, 255, 0.2);
`

export const Label = styled.label`
  font-size: 1rem;
  margin-right: 0.5rem;
  width: 7rem;
  font-weight: 550;
  font-family: 'Open Sans', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
`

export const Input = styled.input`
  outline: 0;
  border: none;
  border-radius: 0.4rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: var(--input-bg-color);
  color: var(--text-color);
  font-size: 0.95rem;
  padding: 0.5rem;
  width: 15rem;
  text-align: center;
  font-family: 'Open Sans', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
`

export const SelectBox = styled.select`
  padding: 0.35rem;
  font-size: 0.94rem;
  outline: 0;
  border: none;
  border-radius: 0.22rem;
  font-family: 'Open Sans', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  background-color: var(--select-bg-color);
  color: var(--text-color);
  transition: all 0.2s ease;
  text-align: center;
  min-width: 8rem;

  &:hover {
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px var(--card-hover-bg);
  }
`

export const TypeListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  background-color: rgb(255, 255, 255, 0.05);
  padding: 0.3rem 0.4rem;
  border-radius: 0.45rem;
  transition: all 0.4s ease;

  &:hover {
    transition: all 0.4s ease;
    background-color: var(--select-bg-color);
    cursor: pointer;
  }
`

export const TypeList = styled.span`
  margin: 0;
  padding: 0;
  font-size: 0.95rem;
  font-family: 'Open Sans', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  color: var(--text-color);
`

export const IconRemoveType = styled.img`
  width: 1rem;
`

export const ErrorSpan = styled.span`
  margin: 0;
  padding: 0;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-family: 'Open Sans', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  color: #ff1616;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5rem;
  margin-top: 1rem;
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
  background: linear-gradient(82.3deg, rgb(71, 49, 104) 10.8%, rgb(70, 64, 160) 94.3%);
  color: var(--text-color);
  border-color: #ffffff36;
  border-radius: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.25s ease;
  font-size: 0.88rem;
  width: 10rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-family: 'Open Sans', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

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
    background: linear-gradient(82.3deg, rgb(76, 71, 148) 10.8%, rgb(84, 54, 128) 94.3%);
    transition: all 0.48s;
  }
`
