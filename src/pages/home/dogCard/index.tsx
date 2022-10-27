import React, { useContext } from 'react';
import { ISearchByName } from '../../../services/dogsApi/types';
import { Background, Content, Favorite, Header, ImageDog, Name, Text, ViewButton } from './styles';
import { Button } from '../../../components/button';
import { ThemeContext } from 'styled-components/native';
import { ThemeModel } from '../../../styles/themes/types';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProps } from '../../../routes/tab/types';


interface DogCardProps {
  data: ISearchByName
}

export const DogCard: React.FC<DogCardProps> = ({ data }) => {
  const themeContext = useContext<ThemeModel>(ThemeContext)
  const {navigate} = useNavigation<HomeScreenNavigationProps['navigation']>()

  const onFavorite = () => {
    // TO DO
  }

  const onShow = () => {
    // TO DO
    navigate('dogSelected', {dogData: data})
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

        <Text numberOfLines={1}>{data.bred_for}</Text>

        <ViewButton>
          <Button title='Show' type='solid' onPress={onShow}/>
        </ViewButton>
      </Content>
    </Background>
  )
}