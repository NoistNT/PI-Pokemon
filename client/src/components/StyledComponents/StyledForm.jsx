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
  color: #ffffff;
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    border-width: 1px;
    border-color: #ffffff90;
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.07rem;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  margin-bottom: 1rem;
`

export const LabelInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  border-radius: 0.45rem;
  color: #ffffff;
  background-color: rgb(255, 255, 255, 0.2);
`

export const Label = styled.label`
  font-size: 1rem;
  margin-right: 0.5rem;
  width: 7rem;
  font-weight: 550;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
`

export const Input = styled.input`
  outline: 0;
  border: none;
  border-radius: 0.4rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: var(--input-bg-color);
  color: #fcfcfcfc;
  font-size: 0.95rem;
  padding: 0.5rem;
  width: 15rem;
  text-align: center;
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
    box-shadow: 0 2px 4px var(--card-hover-bg);
  }
`

export const TypeList = styled.span`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  color: #fcfcfcfc;
`

export const ErrorSpan = styled.span`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  color: #ff3737;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5rem;
  margin-top: 1rem;
`

export const SubmitButton = styled.button`
  font-size: 0.95rem;
  font-weight: 550;
  background-color: #4941b388;
  color: var(--text-color);
  border-color: #ffffff36;
  border-radius: 0.3rem;
  padding: 0.4rem 1.2rem;
  transition: all 0.2s ease;
  font-size: 0.88rem;
  width: 10rem;

  &:hover {
    transition: all 0.2s ease;
    box-shadow: 2px 4px 8px var(--card-hover-shadow);
    background-color: var(--card-hover-bg);
    border-color: #bdb7b749;
    cursor: pointer;
  }
`
