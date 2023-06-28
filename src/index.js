import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AddTaskScreen from "./screens/AddTaskScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import EditarTaskScreen from "./screens/EditarTaskScreen";

const Tabs = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
         <Tabs.Navigator>
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false, tabBarLabel: "Home" }}
      />
      <Tabs.Screen
        name="AddTaskScreen"
        component={AddTaskScreen}
        options={{ headerShown: false, tabBarLabel: "Adicionar Task" }}
      />
      <Tabs.Screen
        name="EditarTaskScreen"
        component={EditarTaskScreen}
        options={{ headerShown: false, tabBarLabel: "Editar Task" }}
      />
        </Tabs.Navigator>
    </NavigationContainer> 
  );
}