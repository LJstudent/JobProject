import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import 'react-native-gesture-handler';
import UserOptions from './src/Components/UserOptions/UserOptions';
import Main from './src/Main';
import { RootStackParamList } from './src/Components/Navigation/RootStackParamList'
import { Provider } from 'react-redux';
import { store } from './src/State/store'


const Stack = createStackNavigator<RootStackParamList>();

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
    <Provider store={store}>
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyle: {
              backgroundColor: 'white',
            }
          }}>
          <Stack.Screen options={{
            headerShown: false,
          }}
            name="Main" component={Main} />
          <Stack.Screen
            options={{
              title: 'User options'
            }}
            name="UserOptions" component={UserOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider >
    </Provider>
  );
}