import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import DrawerTab from './DrawerTab'
import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MainTab from './MainTab';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Upload from '../screens/Upload'
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile2';

const Stack = createStackNavigator();

export default () => (
  
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
    }}>

    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />     
    <Stack.Screen name="MainTab" component={DrawerTab} />

  </Stack.Navigator>
);