import React from 'react';
import { Background, Title } from './styles';


interface HeaderProps {
  Icon?: () => JSX.Element | null
  title: string
  titleBold: string
}

export const Header: React.FC<HeaderProps> = ({Icon, title, titleBold}) => {

  return  (
    <Background>
      <Title>{title} <Title weight='bold'>{titleBold}</Title></Title>

      { Icon != null
        ? <Icon/>
        : null
      }
    </Background>
  )
}