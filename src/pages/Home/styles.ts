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

export const BaseButton = styled.button`
  width: 100%;
  border: 0;
  border-radius: 8px;

  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};
  transition: all 0.15s;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StarterCountdown = styled(BaseButton)`
  background-color: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdown = styled(BaseButton)`
  background-color: ${(props) => props.theme['red-500']};
  box-shadow: none;

  &:hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
