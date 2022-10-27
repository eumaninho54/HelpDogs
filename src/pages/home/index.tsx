import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import { ThemeContext } from 'styled-components/native';
import { useDebouncedCallback } from 'use-debounce';
import Loading from '../../components/loading';
import { DogsService } from '../../services/dogsApi/dogsService';
import { ISearchByName } from '../../services/dogsApi/interface';
import { ThemeModel } from '../../styles/themes/interface';
import { DogCard } from './dogCard';
import { Background, Header, IconSearch, Input, Search, SearchView, Title } from './styles';


const Home: React.FC = () => {
  const dogsService = new DogsService()
  const [isLoading, setIsloading] = useState(false)
  const [dogsRequested, setDogsRequested] = useState<ISearchByName[]>([])
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

  const mapCards = () => {
    return dogsRequested.map(data => {
      return <DogCard data={data} key={data.id} />
    })
  }

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{ flex: 1, backgroundColor: themeContext.background }}>
      <Background>
        <Header>
          <Title>Hello, <Title weight='bold'>Master</Title></Title>

          <TouchableOpacity>
            <Icon
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

        {isLoading  //if loaded request
          ? <Loading />

          : <ScrollView>
              {mapCards()}
            </ScrollView>
        }
      </Background>
    </SafeAreaView>
  )
}

export default Home;