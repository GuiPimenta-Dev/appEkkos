import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainTab from './MainTab'
import Schedule from '../screens/Schedule'
import Bands from '../screens/Bands'
import Settings from '../screens/Settings'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainTab} />
      <Drawer.Screen name="Agenda" component={Schedule} />
      <Drawer.Screen name="Bandas" component={Bands} />
      <Drawer.Screen name="Configuracões" component={Settings} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;