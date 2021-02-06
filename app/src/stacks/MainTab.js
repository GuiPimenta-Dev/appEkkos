import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Discover from '../screens/Discover';
import Upload from '../screens/Upload'
import Inbox from '../screens/Inbox';
import Profile from '../screens/Profile';


const Tab = createBottomTabNavigator();

export default () => (

    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>   
      <Tab.Screen name="Home" component={Home} />  
      <Tab.Screen name="Search" component={Discover} />
      <Tab.Screen name="Upload" component={Upload} />    
      <Tab.Screen name="Favorites" component={Inbox} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  
);
