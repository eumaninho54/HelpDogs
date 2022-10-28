import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/button';
import { InformationRouteType } from '../../routes/tab/types';
import { Background, BackgroundIcon, Content, Header, ImageBanner, Text, Title, Section } from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import { ThemeContext } from 'styled-components/native';
import { ThemeModel } from '../../styles/themes/types';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../store';
import { setFavorite } from '../../store/user/slice';

export const Information: React.FC = () => {
  const dispatch = useDispatch()
  const user = useSelector((store: StoreState) => store.user)
  const themeContext = useContext<ThemeModel>(ThemeContext)
  const { params: { dogData } } = useRoute<InformationRouteType>()
  const { goBack } = useNavigation()

  const onFavorite = () => {
    dispatch(setFavorite({favorites: dogData}))
  }

  return (
    <>
      <ImageBanner source={{ uri: dogData.imageUrl }}>
        <SafeAreaView >
          <BackgroundIcon backgroundColor={"#3b3b3b94"}>
            <Button
              onPress={() => goBack()}
              type={'clear'}
              title={
                <IconAntDesign
                  name='left'
                  size={30}
                  color={'#fff'} />
              } />
          </BackgroundIcon>
        </SafeAreaView>
      </ImageBanner>

      <Background>
        <SafeAreaView
          edges={['bottom']}
          style={{ flex: 1 }}>
          <Content>
            <Header>
              <Title
                size={24}
                color={themeContext.primary}
                weight={'bold'}>
                {dogData.name}
              </Title>

              <Button 
                onPress={onFavorite}
                type='clear'
                title={
                  <IconFontAwesome
                    name={user.favorites.find((item) => item.id == dogData.id) ? 'heart' : 'heart-o'}
                    size={30}
                    color={themeContext.primary} />
                }/>
            </Header>

            <Text>{dogData.breed_group}</Text>

            <Section>
              <BackgroundIcon backgroundColor={themeContext.backgroundYellow}>
                <IconFontAwesome
                  name='thermometer'
                  size={40}
                  color={themeContext.yellow}
                />
              </BackgroundIcon>

              <Title
                color={themeContext.text}
                size={14}
                weight={'normal'}>
                {dogData.temperament != null ? dogData.temperament : "Unknown"}
              </Title>
            </Section>

            <Section>
              <BackgroundIcon backgroundColor={themeContext.backgroundYellow}>
                <IconFontAwesome5
                  name='flag-usa'
                  size={35}
                  color={themeContext.yellow}
                />
              </BackgroundIcon>

              <Title
                color={themeContext.text}
                size={14}
                weight={'normal'}>
                {dogData.origin != null ? dogData.origin : "Unknown"}
              </Title>
            </Section>

            <Section>
              <BackgroundIcon backgroundColor={themeContext.backgroundYellow}>
                <IconCommunity
                  name='hospital'
                  size={40}
                  color={themeContext.yellow}
                />
              </BackgroundIcon>

              <Title
                color={themeContext.text}
                size={14}
                weight={'normal'}>
                {dogData.life_span != null ? dogData.life_span : "Unknown"}
              </Title>
            </Section>

          </Content>
        </SafeAreaView>
      </Background>
    </>
  )
}