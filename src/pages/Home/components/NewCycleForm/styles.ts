import styled from 'styled-components'

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
