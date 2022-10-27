import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import { ThemeContext } from 'styled-components/native';
import { useDebouncedCallback } from 'use-debounce';
import { DogsService } from '../../services/dogsApi/dogsService';
import { ISearchByName } from '../../services/dogsApi/interface';
import { ThemeModel } from '../../styles/themes/interface';
import { Background, Content, Header, IconSearch, Input, Search, SearchView, Title } from './styles';


const Home: React.FC = () => {
  const dogsService = new DogsService()
  const [ dogsRequested, setDogsRequested] = useState<ISearchByName | null>()
  const [ searchText, setSearchText ] = useState('')
  const themeContext = useContext<ThemeModel>(ThemeContext)

  const onInput = (text: string) => {
    setSearchText(text)
    requestDogs()
  }

  const requestDogs = useDebouncedCallback(
    () => {
      dogsService.searchByName({textFilter: searchText})
        .then(res => console.log(res))
        .catch(err => console.log(err)) 
    },
    1000
  )

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{ flex: 1, backgroundColor: themeContext.background }}>
      <Background>
        <Content>
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
                color={themeContext.icon}/>
              <Input
                value={searchText}
                onChangeText={onInput}
                placeholder={"Type breed or name"}/>
            </Search>
          </SearchView>
        </Content>
      </Background>
    </SafeAreaView>
  )
}

export default Home;