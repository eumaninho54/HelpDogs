import styled from "styled-components/native";

interface props {
  type: "solid" | "clear"
}

export const ButtonView = styled.TouchableOpacity`


  ${({type}: props) =>  type == "solid" && `
    background-color: #C0423F;
    padding: 10px 15px;
    border-radius: 8px;
  `}
`

export const ButtonTitle = styled.Text`

  ${({type}: props) =>  type == "solid" && `
    color: #fff
  `}
`