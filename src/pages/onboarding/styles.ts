import styled from 'styled-components/native'

interface props {
  width: number
}

export const Background = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const ButtonsGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${({width}: props) => `${width}px`};
  padding: 10px 20px;
`