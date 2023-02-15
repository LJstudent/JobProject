import { StatusBar } from 'expo-status-bar';
import { Center, extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';

export default function App() {
  const theme = extendTheme({
  breakpoints: {
    base: 0,
    sm: 630,
    md: 868,
    lg: 1280,
    xl: 1800,
  }
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Main />
    </NativeBaseProvider>
  );
}