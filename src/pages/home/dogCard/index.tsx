import React, { useContext } from 'react';
import { Background, BackgroundIcon, Content, Header, Image, Name, Text, ViewButton } from './styles';
import { Button } from '../../../components/button';
import { ThemeContext } from 'styled-components/native';
import { ThemeModel } from '../../../styles/themes/types';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProps } from '../../../routes/tab/types';
import { DogDataDTO } from '../../../dtos/dogDataDTO';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorite } from '../../../store/user/slice';
import { StoreState } from '../../../store';
import Icon from 'react-native-vector-icons/FontAwesome5';


interface DogCardProps {
  data: DogDataDTO
}

export const DogCard: React.FC<DogCardProps> = ({ data }) => {
  const dispatch = useDispatch()
  const user = useSelector((store: StoreState) => store.user)
  const themeContext = useContext<ThemeModel>(ThemeContext)
  const { navigate } = useNavigation<HomeScreenNavigationProps['navigation']>()

  const onFavorite = () => {
    dispatch(setFavorite({ favorites: data }))
  }

  const onShow = () => {
    navigate('information', { dogData: data })
  }

  return (
    <Background>
      <Image source={{ uri: data.imageUrl }} />

      <Content>
        <Header>
          <Name numberOfLines={1}>{data.name}</Name>

          <BackgroundIcon onPress={onFavorite}>
            <Icon
              name='heart'
              solid={user.favorites.find((item) => item.id == data.id) ? true : false}
              size={20}
              color={themeContext.primary} />
          </BackgroundIcon>
        </Header>

        <Text numberOfLines={1}>{data.origin || data.bred_for || data.breed_group}</Text>
        <ViewButton>
          <Button title='Show' type='solid' onPress={onShow} />
        </ViewButton>
      </Content>
    </Background>
  )
}