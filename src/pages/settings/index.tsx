import React, { useContext, useState } from 'react';
import { Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from 'styled-components/native';
import { Header } from '../../components/header';
import { ThemeModel } from '../../styles/themes/types';
import { Background, Head, Title, Content, IconView, BackgroundIcon, IconMaterial, IconFontAwesome, ContentModal, ButtonGroup } from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { Modal } from '../../components/modal';
import { useDispatch } from 'react-redux';
import { clearState } from '../../store/user/slice';

export const Settings: React.FC = () => {
  const themeContext = useContext<ThemeModel>(ThemeContext)
  const { goBack } = useNavigation()
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeContext.background }}>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ContentModal>
          <IconFontAwesome 
            name='inbox'
            color={themeContext.primary}
            size={40}/>

          <Title 
            size={18}
            color={themeContext.text}
            weight={700}>
            Are you sure?
          </Title>

          <Title
            size={14}
            color={themeContext.secundaryText}
            weight={400}>
              You will remove all saved information and will not be able to recover it
          </Title>
          <ButtonGroup>
            <Button
              color={themeContext.text}
              title='Cancel'
              type='clear'
              onPress={() => setShowModal(false)}/>
            
            <Button
              title='Remove'
              type='solid'
              onPress={() => dispatch(clearState())}/>
          </ButtonGroup>
        </ContentModal>
      </Modal>

      <BackgroundIcon>
        <Button
          onPress={() => goBack()}
          type={'clear'}
          title={
            <IconAntDesign
              name='left'
              size={25}
              color={themeContext.primary} />
          } />
      </BackgroundIcon>

      <Background>
        <Header
          title='My'
          titleBold='configurations!'
        />

        <Head>
          <Title
            size={16}
            color={themeContext.secundaryText}>
            CONTENT
          </Title>
        </Head>

        <Content onPress={() => setShowModal(true)}>
          <IconView>
            <IconMaterial
              name='save-alt'
              color={themeContext.icon}
              size={30}/>
            <Title
              size={16}
              color={themeContext.text}>
              Clear Data
            </Title>
          </IconView>

          <IconAntDesign
            name='right'
            color={themeContext.primary}
            size={18} />
        </Content>

        <Head>
          <Title
            size={16}
            color={themeContext.secundaryText}>
            ABOUT
          </Title>
        </Head>

        <Content onPress={() => Linking.openURL('https://github.com/eumaninho54/HelpDogs')}>
          <IconView>
            <IconFontAwesome
              name='github'
              color={themeContext.icon}
              size={30}/>

            <Title 
              size={16}
              color={themeContext.text}>
              See the source
            </Title>
          </IconView>

          <IconAntDesign
            name='right'
            color={themeContext.primary}
            size={18} />
        </Content>

        <Content onPress={() => Linking.openURL('https://www.linkedin.com/in/angelo-menti-663040210/')}>
          <IconView>
            <IconFontAwesome
              name='linkedin'
              color={themeContext.icon}
              size={30}/>

            <Title 
              size={16} 
              color={themeContext.text}>
              Follow me on
            </Title>
          </IconView>

          <IconAntDesign
            name='right'
            color={themeContext.primary}
            size={18} />
        </Content>
      </Background>
    </SafeAreaView>
  )
}