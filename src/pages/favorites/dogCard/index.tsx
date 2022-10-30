import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components/native';
import { DogDataDTO } from '../../../dtos/dogDataDTO';
import { ThemeModel } from '../../../styles/themes/types';
import { Background, BackgroundIcon, Image, Text } from './styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { setFavorite } from '../../../store/user/slice';
import { useNavigation } from '@react-navigation/native';
import { FavoriteScreenNavigationProps } from '../../../routes/tab/types';
import { TouchableOpacity } from 'react-native';


interface DogCardProps {
  data: DogDataDTO
}

export const DogCard: React.FC<DogCardProps> = ({ data }) => {
  const themeContext = useContext<ThemeModel>(ThemeContext)
  const dispatch = useDispatch()
  const { navigate } = useNavigation<FavoriteScreenNavigationProps['navigation']>()

  const onFavorite = () => {
    dispatch(setFavorite({ favorites: data }))
  }

  const onInformation = () => {
    navigate('information', { dogData: data })
  }

  return (
    <Background>
      <TouchableOpacity onPress={onInformation}>
        <Image source={{ uri: data.imageUrl }}>
          <BackgroundIcon onPress={onFavorite}>
            <IconFontAwesome
              name='heart'
              color={themeContext.primary}
              size={18} />
          </BackgroundIcon>
        </Image>

        <Text
          numberOfLines={1}
          color={themeContext.text}
          size={18}
          weight={700}>
          {data.name}
        </Text>

        <Text
          numberOfLines={1}
          color={themeContext.secundaryText}
          size={15}>
          {data.bred_for}
        </Text>
      </TouchableOpacity>
    </Background>
  )
}
