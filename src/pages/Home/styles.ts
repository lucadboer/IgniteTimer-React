import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
`

const InputBase = styled.input`
  height: 2.5rem;
  background-color: transparent;
  color: ${(props) => props.theme['gray-100']};
  border: 0;
  border-bottom: 1.5px solid ${(props) => props.theme['gray-100']};
  font-size: inherit;
  font-weight: 400;
  padding: 0 0.5rem;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border-bottom: 1.5px solid ${(props) => props.theme['green-500']};
  }
`

export const TaskInput = styled(InputBase)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const TaskMinutesAmount = styled(InputBase)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  gap: 1rem;

  span {
    font-family: 'Roboto Mono', monospace;
    background-color: ${(props) => props.theme['gray-700']};
    padding: 1.6rem 1rem;
    border-radius: 8px;
  }
`

export const StarterCountdown = styled.button`
  width: 100%;
  border: 0;
  border-radius: 8px;

  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  transition: all 0.15s;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`

export const Separator = styled.div`
  color: ${(props) => props.theme['green-500']};
  padding: 1.6rem 0;

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
