import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components/native';
import { useDebouncedCallback } from 'use-debounce';
import { Empty } from '../../components/empty';
import Loading from '../../components/loading';
import { DogDataDTO } from '../../dtos/dogDataDTO';
import { DogsService } from '../../services/dogsApi/dogsService';
import { ThemeModel } from '../../styles/themes/types';
import { DogCard } from './dogCard';
import { Background, Header, IconSearch, Input, Search, SearchView, Title } from './styles';


const Home: React.FC = () => {
  const dogsService = new DogsService()
  const [isLoading, setIsloading] = useState(false)
  const [dogsRequested, setDogsRequested] = useState<DogDataDTO[]>([])
  const [searchText, setSearchText] = useState('')
  const themeContext = useContext<ThemeModel>(ThemeContext)

  const onInput = (text: string) => {
    setSearchText(text)
    setIsloading(true)
    requestDogs()
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
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{ flex: 1, backgroundColor: themeContext.background }}>
      <Background>
        <Header>
          <Title>Hello, <Title weight='bold'>Master!</Title></Title>

          <TouchableOpacity>
            <IconAntDesign
              name='setting'
              size={30}
              color={themeContext.icon} />
          </TouchableOpacity>
        </Header>

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