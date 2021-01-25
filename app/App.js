import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';
import {Provider} from 'react-redux';
import storeConfig from './src/store/storeConfig';

const store = storeConfig();



export default function App() {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </UserContextProvider>
    </Provider>
  );
}


