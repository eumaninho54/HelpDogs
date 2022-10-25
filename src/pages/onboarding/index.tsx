import React, { useRef, useState } from 'react';
import { Background, ButtonsGroup } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Animated, ViewToken, useWindowDimensions } from 'react-native';
import Paginator from './paginator';
import { Button } from '../../components/button';
import { OnboardingItem } from '../../components/onboardingItem';
import { OnBoardingDTO } from '../../dtos/onBoardingDTO';
import imgSlide1 from '../../assets/animals/dog1.png'
import imgSlide2 from '../../assets/animals/animals2.png'
import imgSlide3 from '../../assets/animals/animals1.png'
import { useDispatch} from 'react-redux';
import { setFirstAccess } from '../../store/user/slice';

export const Onboarding: React.FC = () => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions()
  const scrollX = useRef(new Animated.Value(0)).current
  const [currentIndex, setCurrentIndex] = useState(0)
  const slidesRef = useRef<FlatList>(null)

  const viewableItemsChanged = useRef(({viewableItems} : {viewableItems: ViewToken[]}) => {
    if(viewableItems[0].index != null)
      setCurrentIndex(viewableItems[0].index)
  }).current

  const skip = () => {
    dispatch(setFirstAccess({firstAccess: false}))
    // Route change here...
  }

  const next = () => {
    if(currentIndex < test.length - 1){
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1})
    }else {
      dispatch(setFirstAccess({firstAccess: false}))
      // Route change here...
    }
  }

  const test: OnBoardingDTO[] = [
    {
      id: 1,
      image: imgSlide1,
      title: 'Conheça mais sobre seu novo amigo!',
      description: 'Escolha a raça do seu pet favorito e conheça mais sobre o animalzinho.'
    },
    {
      id: 2,
      image: imgSlide2,
      title: 'Mantenha sempre por perto!',
      description: 'Salve seus animaizinhos nos favoritos para visualização rápida.'
    },
    {
      id: 3,
      image: imgSlide3,
      title: 'Seu pet salvando vidas!',
      description: 'Seu animalzinho também pode doar sangue e salvar a vida de outro.'
    }
  ]

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#EBEBEB'}}>
      <Background >
        <FlatList
          data={test}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => String(item.id)}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
          ref={slidesRef}/>
        <Paginator data={test} scrollX={scrollX}/>

        <ButtonsGroup width={width}>
          <Button 
            onPress={() => skip()}
            title={"Pular"}
            type={"clear"}/>

          <Button
            onPress={() => next()}
            title={"Próximo"}
            type={"solid"}/>
        </ButtonsGroup>
      </Background>
    </SafeAreaView>
  )
}
