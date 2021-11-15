import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppContainer from './src/components/app-container'
import MainScreen from './src/screens/main'

export default function App() {
  return (
    <AppContainer>
      <MainScreen />
    </AppContainer>
  )
}
