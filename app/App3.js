import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "./src/store/storeConfig";

import Feed from './src/screens/Home';
import Explore from './src/screens/Search';
import Upload from './src/screens/Upload';
import Notifications from './src/screens/Favorites';
import Perfil from './src/screens/Profile';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UploadIcon from './src/components/UploadIcon';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Feed') {
    iconName = 'home';
    IconComponent = Foundation;
  } else if (routeName === 'Explore') {
    iconName = 'search';
    IconComponent = EvilIcons;
  } else if (routeName === 'Upload') {
    iconName = 'plus';
    IconComponent = UploadIcon;
  } else if (routeName === 'Notifications') {
    iconName = 'hearto';
    IconComponent = AntDesign;
  } else if (routeName === 'Perfil') {
    iconName = 'user';
    IconComponent = AntDesign;
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
};




const Menu = createBottomTabNavigator(
  {
    Feed,
    Explore,
    Upload,
    Notifications,
    Perfil,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#FFFEFF',
      inactiveTintColor: '#9E9BA2',
      style: {
        backgroundColor: '#1a1a1f',
      },
    },
  },
);


//export default createAppContainer(Menu);

const AppContainer = createAppContainer(Menu);

export default class App extends Component {
  render () {
    return (
        <Provider store={store}>
          <AppContainer/>
        </Provider>
    )
  }
}
