import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import { ThemeContext } from 'styled-components/native';
import { ThemeModel } from '../../styles/themes/interface';
import { Background, Content, Header, IconSearch, Input, Search, SearchView, Title } from './styles';


const Home: React.FC = () => {
  const [ searchText, setSearchText ] = useState('')
  const themeContext = useContext<ThemeModel>(ThemeContext)

  useEffect(() => {
    console.log(searchText)
  },[searchText])

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
                onChangeText={setSearchText}
                placeholder={"Type breed or name"}/>
            </Search>
          </SearchView>
        </Content>
      </Background>
    </SafeAreaView>
  )
}

export default Home;