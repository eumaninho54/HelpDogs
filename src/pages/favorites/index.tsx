import React, { useContext } from 'react';
import { FlatList, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';
import { StoreState } from '../../store';
import { ThemeModel } from '../../styles/themes/types';
import { Background, Banner, TextBanner, TitleBanner, ButtonBanner, Separator } from './styles';
import BannerASPCA from '../../assets/ASPCA/bannerASPCA.jpg'
import { Divisor } from '../../components/divisor';
import { DogCard } from './dogCard';
import { Empty } from '../../components/empty';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { Header } from '../../components/header';


export const Favorites: React.FC = () => {
  const themeContext = useContext<ThemeModel>(ThemeContext)
  const user = useSelector((store: StoreState) => store.user)

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{ flex: 1, backgroundColor: themeContext.background }}>
      <Background>
        <Header
          title='My'
          titleBold='Favorites!'/>

        <Banner source={BannerASPCA}>
          <TitleBanner>Will You Help Dogs Like Me?</TitleBanner>
          <TextBanner width={55}>Protect animals who are most at risk</TextBanner>
          
          <ButtonBanner onPress={() => Linking.openURL("https://secure.aspca.org/donate/donate?ms=wb_top_homepage-donate&initialms=wb_top_homepage-donate&pcode=WEBMEMBER&lpcode=WEBGUARD")}>
            <TextBanner align='center'>DONATE</TextBanner>
          </ButtonBanner>
        </Banner>

        <Divisor/>

        { user.favorites.length != 0
          ? <FlatList 
              data={user.favorites} 
              renderItem={({item}) => <DogCard data={item}/>}
              keyExtractor={(_, index) => String(index)}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center'
              }}
              ItemSeparatorComponent={() => <Separator/>}/>
        
          : <Empty 
              text='No favorite dogs'
              icon={
                <IconFontAwesome
                  name='heart-o'
                  size={40}
                  color={themeContext.primary}/>
              }/>
        }
      </Background>
    </SafeAreaView>
  )
}
