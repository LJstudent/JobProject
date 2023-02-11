import { StatusBar } from 'expo-status-bar';
import { Center, NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';

export default function App() {
  return (
    <NativeBaseProvider>
        <Main />
    </NativeBaseProvider>
  );
}