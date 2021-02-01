//import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/MainStack";
import { Provider } from "react-redux";
import store from "./src/store/storeConfig";

const Routes = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}
export default Routes;