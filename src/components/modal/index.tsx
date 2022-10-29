import React from 'react';
import { View, Modal as ModalNative, Text, TouchableOpacity, useColorScheme, useWindowDimensions } from 'react-native';
import { Background, Content } from './styles';

interface ModalProps {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, children }) => {
  const { width, height } = useWindowDimensions()
  const deviceTheme = useColorScheme()
  const isDark = deviceTheme == 'dark'
    ? true
    : false

  return (
    <ModalNative
      animationType='fade'
      visible={showModal}
      onRequestClose={() => setShowModal(false)}
      transparent>
      <Background
        onTouchStart={() => setShowModal(false)}
        blurType={isDark ? 'dark' : 'light'}
        blurAmount={10}>
      </Background>

      <Content
        height={height}
        width={width}>
        {children}
      </Content>
    </ModalNative>
  )
}