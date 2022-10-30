import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/button';
import { InformationRouteType } from '../../routes/tab/types';
import { Background, BackgroundIcon, Content, Head, Banner, Text, InfoGroup, ViewText } from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components/native';
import { ThemeModel } from '../../styles/themes/types';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../store';
import { setFavorite } from '../../store/user/slice';
import { useWindowDimensions } from 'react-native';
import { InfoDog } from './infoDog';


export const Information: React.FC = () => {
  const dispatch = useDispatch()
  const user = useSelector((store: StoreState) => store.user)
  const themeContext = useContext<ThemeModel>(ThemeContext)
  const { params: { dogData } } = useRoute<InformationRouteType>()
  const { goBack } = useNavigation()
  const { height } = useWindowDimensions()

  const onFavorite = () => {
    dispatch(setFavorite({ favorites: dogData }))
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: themeContext.background }}
      edges={['bottom']}>
      <Background>
        <Banner
          height={height}
          resizeMode='cover'
          source={{ uri: dogData.imageUrl }}>
          <SafeAreaView>
            <BackgroundIcon
              onPress={goBack}
              backgroundColor={'#3b3b3b94'}>
              <IconAntDesign
                name='left'
                size={30}
                color={'#fff'} />
            </BackgroundIcon>
          </SafeAreaView>
        </Banner>

        <Content>
          <Head>
            <ViewText>
              <Text
                size={24}
                color={themeContext.text}
                weight={'bold'}>
                {dogData.name}
              </Text>

              <Text
                size={18}
                color={themeContext.secundaryText}
                weight={'normal'}>
                {dogData.bred_for}
              </Text>
            </ViewText>

            <BackgroundIcon 
              onPress={onFavorite}
              backgroundColor={`${themeContext.primary}20`}>
              <IconFontAwesome
                name={user.favorites.find((item) => item.id == dogData.id) ? 'heart' : 'heart-o'}
                size={30}
                color={themeContext.primary} />
            </BackgroundIcon>

          </Head>
          <InfoGroup>
            <InfoDog
              title='Group'
              text={dogData.breed_group}
              icon={
                <IconFontAwesome5
                  name='dog'
                  color={themeContext.primary}
                  size={25} />
              } />

            <InfoDog
              title='Temperament'
              text={dogData.temperament}
              icon={
                <IconFontAwesome
                  name='thermometer-4'
                  color={themeContext.primary}
                  size={25} />
              } />
          </InfoGroup>

          <InfoGroup>
            <InfoDog
              title='Weight'
              text={dogData.weight}
              icon={
                <IconMaterialCommunity
                  name='weight'
                  color={themeContext.primary}
                  size={25} />
              }
            />

            <InfoDog
              title='Height'
              text={dogData.height}
              icon={
                <IconMaterial
                  name='height'
                  color={themeContext.primary}
                  size={25} />
              } />

          </InfoGroup>
        </Content>
      </Background>
    </SafeAreaView>
  )
}