import React, { useContext } from 'react';
import { ISearchByName } from '../../../services/dogsApi/interface';
import { Background, Content, Favorite, Header, ImageDog, Name, Text, ViewButton } from './styles';
import { Button } from '../../../components/button';
import { ThemeContext } from 'styled-components/native';
import { ThemeModel } from '../../../styles/themes/interface';


interface DogCardProps {
  data: ISearchByName
}

export const DogCard: React.FC<DogCardProps> = ({ data }) => {
  const themeContext = useContext<ThemeModel>(ThemeContext)

  const onFavorite = () => {
    // TO DO
  }

  const onShow = () => {
    // TO DO
  }

  return (
    <Background>
      <ImageDog source={{ uri: data.imageUrl }} />

      <Content>
        <Header>
          <Name numberOfLines={1}>{data.name} </Name>

          <Favorite 
            onPress={onFavorite}
            name='heart'
            solid
            size={25} 
            color={themeContext.primary}/>
        </Header>

        <Text>{data.bred_for}</Text>

        <ViewButton>
          <Button title='Show' type='solid' onPress={onShow}/>
        </ViewButton>
      </Content>
    </Background>
  )
}