import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes'
import {AuthContextProvider} from './context/authContext'

const App = () => {

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Routes/>
      </AuthContextProvider>
    </NavigationContainer>
  );

}
export default App;
