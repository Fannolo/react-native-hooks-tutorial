// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import { HomeScreen } from "../screens";
import { FirstScreen } from "../screens/FirstScreen";

const Stack = createStackNavigator();
export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.OLDCLASSHOME} component={FirstScreen} />
        <Stack.Screen name={Routes.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
