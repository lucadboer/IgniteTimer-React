import styled from 'styled-components'

export const Separator = styled.div`
  color: ${(props) => props.theme['green-500']};
  padding: 1.6rem 0;

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
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
