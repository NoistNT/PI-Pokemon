import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
`
export const Page = styled.li`
  list-style-type: none;
  padding: 0.3rem 0.9rem;
  margin: 0 0.15rem;
  color: #ffffffe0;
  background-color: ${({ active }) => (active ? '#4941b3;' : '#22223b')};
  font-weight: ${({ active }) => (active ? '600' : '400')};
  border-radius: 0.3rem;
  transition: 0.05s;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
    -webkit-box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
    -moz-box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
    transition: 0.05s;
    font-weight: 600;
  }
`
