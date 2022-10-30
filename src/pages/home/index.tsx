import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components/native';
import { useDebouncedCallback } from 'use-debounce';
import { Empty } from '../../components/empty';
import { Header } from '../../components/header';
import Loading from '../../components/loading';
import { DogDataDTO } from '../../dtos/dogDataDTO';
import { HomeScreenNavigationProps } from '../../routes/tab/types';
import { DogsService } from '../../services/dogsApi/dogsService';
import { ThemeModel } from '../../styles/themes/types';
import { DogCard } from './dogCard';
import { Background, IconSearch, Input, SafeAreaView, Search, SearchView, Title } from './styles';


const Home: React.FC = () => {
  const dogsService = new DogsService()
  const [isLoading, setIsloading] = useState(false)
  const [dogsRequested, setDogsRequested] = useState<DogDataDTO[]>([])
  const [searchText, setSearchText] = useState('')
  const themeContext = useContext<ThemeModel>(ThemeContext)
  const { navigate } = useNavigation<HomeScreenNavigationProps['navigation']>()

  const onInput = (text: string) => {
    setSearchText(text)
    setIsloading(true)
    requestDogs()
  }
  const onSettings = () => {
    navigate('settings')
  }

  const requestDogs = useDebouncedCallback(
    async () => {
      await dogsService.searchByName({ textFilter: searchText })
        .then(res => setDogsRequested(res))
        .catch(err => console.log(err))
      setIsloading(false)
    },
    1000
  )

  return (
    <SafeAreaView edges={['top', 'left', 'right']} >
      <Background showsVerticalScrollIndicator={false}>
        <Header
          title='Hello,'
          titleBold='Master!'
          Icon={() => (
            <TouchableOpacity onPress={onSettings}>
              <IconAntDesign
                name='setting'
                size={30}
                color={themeContext.icon} />
            </TouchableOpacity>
          )}
        />

        <SearchView>
          <Title>Search for your Best Pet</Title>
          <Search>
            <IconSearch
              name='search1'
              size={25}
              color={themeContext.icon} />
            <Input
              value={searchText}
              onChangeText={onInput}
              placeholder={"Type name"} />
          </Search>
        </SearchView>

        {isLoading  // if loaded request
          ? <Loading />

          : dogsRequested[0] // if empty data
            ? <FlatList
                showsVerticalScrollIndicator={false}
                data={dogsRequested}
                renderItem={({item}) => <DogCard data={item}/>}
                keyExtractor={(_, index) => String(index)}
              />

            : <Empty
                text='Empty list'
                icon={
                  <IconMaterial 
                    name='error' 
                    size={40}
                    color={themeContext.primary}/>
                }/>
        }
      </Background>
    </SafeAreaView>
  )
}

export default Home;